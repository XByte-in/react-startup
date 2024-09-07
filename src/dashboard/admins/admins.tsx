/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Size, Type } from '../../common/const';
import Button from '../../common/controls/button/button';
import DataGrid, {
  IColumnSchema,
} from '../../common/controls/dataGrid/dataGrid';
import Label from '../../common/controls/label/label';
import { ModalMode } from '../../common/controls/modal/interface';
import Modal, { IModalParams } from '../../common/controls/modal/modal';
import { RootState } from '../../common/store/store';
import { Typography } from '../../common/theme';
import ApiService from '../apiService';
import {
  NavigationJson,
  Permission,
  UserPermissionMap,
} from '../routePermissionMap';
import Admin from './admin/admin';

import './admins.scss';

export interface IScreenProps {
  name: string;
  route: string;
}

const Admins = (props: IScreenProps) => {
  const userPermission: Permission = useSelector(
    (state: RootState) => state.userPermissionInfo.permission[props.route]
  );
  console.log(userPermission);
  const credential = useSelector(
    (state: RootState) => state.googleUserInfo.credential
  );
  const [gridApi, setGridApi] = useState<any>(null);
  const [columns, setColumns] = useState<Array<IColumnSchema>>([]);
  const [gridDataLoading, setGridDataLoading] = useState(false);
  const [hasSelectedRows, setHasSelectedRows] = useState(false);
  const [admins, setAdmins] = useState<Array<any>>([]);

  const [modalReq, setModalReq] = useState<IModalParams>({ show: false });
  const adminModalRef = { validate: (modalData: any) => [] };
  useEffect(() => {
    generateColumns();
    fetchAdmins();
  }, []);

  const generateColumns = () => {
    const cols: IColumnSchema[] = [];
    cols.push({
      field: 'email',
      checkboxSelection: true,
      width: 300,
      headerCheckboxSelection: true,
      headerName: 'Email',
      sortable: true,
      filter: true,
      floatingFilter: true,
    });
    NavigationJson.forEach(_navItem => {
      if (_navItem.subNavigation) {
        _navItem.subNavigation.forEach(subNavItem => {
          cols.push({
            field: subNavItem.route,
            headerName: subNavItem.name,
            sortable: true,
            filter: true,
            floatingFilter: true,
          });
        });
      } else
        cols.push({
          field: _navItem.route,
          headerName: _navItem.name,
          sortable: true,
          filter: true,
          floatingFilter: true,
        });
    });
    setColumns(cols);
  };

  const parseAdmin = (adminData: any) => {
    const rowData: { [key: string]: any } = {};
    rowData['email'] = adminData['email'];
    NavigationJson.forEach(_navItem => {
      if (_navItem.subNavigation) {
        _navItem.subNavigation.forEach(subNavItem => {
          rowData[subNavItem.route] = adminData[subNavItem.route] || 0;
        });
      } else rowData[_navItem.route] = adminData[_navItem.route] || 0;
    });
    return rowData;
  };
  const parseAdmins = (adminsData: any[]) => {
    return adminsData.map(adminData => parseAdmin(adminData));
  };
  const fetchAdmins = () => {
    setGridDataLoading(true);
    setAdmins([]);
    // ApiService.Admins.get(credential)
    //   .then((response: any) => {
    //     if (response.success && response.data)
    //       if (Array.isArray(response.data) && response.data.length > 0)
    //         setAdmins(parseAdmins(response.data));
    //     setGridDataLoading(false);
    //   })
    //   .catch(error => {
    //     setGridDataLoading(false);
    //     console.log(error);
    //   });
    setAdmins(parseAdmins(UserPermissionMap));
    setGridDataLoading(false);
  };

  const deleteAdmin = (emails: string[]) => {
    setAdminDeleteModal(emails, true, true);
    ApiService.Admins.delete(credential, emails)
      .then((response: any) => {
        if (response.success) {
          let adminList = [];
          adminList = admins.filter(admin => {
            return emails.indexOf(admin.email) === -1;
          });
          setAdmins(adminList);
          setAdminDeleteModal(emails, false, false);
        } else {
          setAdminDeleteModal(emails, true, false, [response.message]);
        }
      })
      .catch(error => {
        setAdminDeleteModal(emails, true, false, [error.message]);
      });
  };
  const setAdminDeleteModal = (
    emails: string[],
    show: boolean,
    isLoading: boolean,
    errMsg?: Array<string>
  ) => {
    setModalReq({
      show: show,
      modalData: {
        title: 'deleteAdmins',
        size: Size.small,
        onClose: () => setModalReq({ show: false }),
        isLoading: isLoading,
        errMsg: errMsg,
        yesBtn: {
          textId: 'yes',
          onClick: () => deleteAdmin(emails),
        },
        children: (
          <div className="deleteAdmin">
            {emails.map((email: string) => {
              return <div>{email}</div>;
            })}
          </div>
        ),
        noBtn: {
          textId: 'no',
          onClick: () => setAdminDeleteModal(emails, false, false),
        },
      },
    });
  };
  const showDeleteAdminsModal = () => {
    if (gridApi) {
      const selectedData = gridApi.getSelectedRows();
      const emails = selectedData.map((data: any) => data.email);
      setAdminDeleteModal(emails, true, false, []);
    }
  };

  const updateAdmin = (admin_data: { [key: string]: any }) => {
    setAdminModal(ModalMode.Update, true, true, [], admin_data, onYesUpdate);
    ApiService.Admins.update(credential, admin_data)
      .then((response: any) => {
        if (response.success && response.data) {
          const admin = parseAdmin(response.data);
          const updatedAdmins = [...admins];
          updatedAdmins.push(admin);
          setAdmins(updatedAdmins);
          setAdminModal(ModalMode.Update, false);
        } else {
          setAdminModal(
            ModalMode.Update,
            true,
            false,
            [response.message],
            admin_data,
            onYesUpdate
          );
        }
      })
      .catch(error => {
        setAdminModal(
          ModalMode.Add,
          true,
          false,
          ['Could not update Admin'],
          admin_data,
          onYesUpdate
        );
        console.error('Could not update Admin: ' + error);
      });
  };
  const onYesUpdate = (modalCompData: any) => {
    const errMsgs = adminModalRef.validate(modalCompData);
    if (errMsgs.length > 0) {
      setAdminModal(
        ModalMode.Update,
        true,
        false,
        errMsgs,
        modalCompData,
        onYesUpdate
      );
    } else {
      updateAdmin(modalCompData);
    }
  };
  const showUpdatedAdminModal = (rowData: any) => {
    console.log(rowData);
    setAdminModal(
      ModalMode.Update,
      true,
      false,
      undefined,
      rowData.data,
      onYesUpdate
    );
  };

  const addAdmin = (admin_data: { [key: string]: any }) => {
    setAdminModal(ModalMode.Add, true, true, [], admin_data, onYesAdd);
    ApiService.Admins.add(credential, admin_data)
      .then((response: any) => {
        if (response.success && response.data) {
          const admin = parseAdmin(response.data);
          const updatedAdmins = [...admins];
          updatedAdmins.push(admin);
          setAdmins(updatedAdmins);
          setAdminModal(ModalMode.Add, false);
        } else {
          setAdminModal(
            ModalMode.Add,
            true,
            false,
            [response.message],
            admin_data,
            onYesAdd
          );
        }
      })
      .catch(error => {
        setAdminModal(
          ModalMode.Add,
          true,
          false,
          ['Could not add Admin'],
          admin_data,
          onYesAdd
        );
        console.error('Could not add Admin: ' + error);
      });
  };
  const onYesAdd = (modalCompData: any) => {
    const errMsgs = adminModalRef.validate(modalCompData);
    if (errMsgs.length > 0) {
      setAdminModal(
        ModalMode.Add,
        true,
        false,
        errMsgs,
        modalCompData,
        onYesAdd
      );
    } else {
      addAdmin(modalCompData);
    }
  };
  const showAddAdminModal = () => {
    const adminData: { [key: string]: any } = {};
    setAdminModal(ModalMode.Add, true, false, undefined, adminData, onYesAdd);
  };

  const setAdminModal = (
    mode: ModalMode,
    show: boolean,
    isLoading?: boolean,
    errMsg?: Array<string>,
    modalCompData?: any,
    onYesClbk?: (modalCompData: any) => void
  ) => {
    setModalReq({
      show: show,
      modalData: {
        title: (mode == ModalMode.Add ? 'add' : 'update') + 'Admin',
        size: Size.medium,
        onClose: () => setModalReq({ show: false }),
        isLoading: isLoading,
        errMsg: errMsg,
        yesBtn: {
          textId: 'yes',
          onClick: () => onYesClbk && onYesClbk(modalCompData),
        },
        noBtn: {
          textId: 'no',
          onClick: () => setAdminModal(mode, false),
        },
        children: (
          <Admin
            mode={mode}
            modalData={modalCompData}
            modalComponentRef={adminModalRef}
            onModalDataChange={(data: { [key: string]: any }) => {
              modalCompData = data;
            }}
          ></Admin>
        ),
      },
    });
  };

  const onSelectionChanged = () => {
    const selectedRows = gridApi.getSelectedRows();
    setHasSelectedRows(selectedRows.length > 0);
  };

  return (
    <div className="admins">
      <div className="btns">
        <Label
          className="dashboard-id"
          textId={props.name}
          typography={Typography.title_header}
          type={Type.secondary}
        ></Label>
        <Button
          className="btn"
          size={Size.medium}
          type={Type.secondary}
          textId="refresh"
          onClick={() => fetchAdmins()}
        />
        <Button
          className="btn"
          size={Size.medium}
          type={Type.secondary}
          textId="add"
          disabled={userPermission < Permission.Edit}
          onClick={() => showAddAdminModal()}
        />
        <Button
          className="btn"
          size={Size.medium}
          type={Type.secondary}
          textId="delete"
          disabled={userPermission < Permission.Edit || !hasSelectedRows}
          onClick={() => showDeleteAdminsModal()}
        />
      </div>
      <DataGrid
        rows={admins}
        columns={columns}
        loading={gridDataLoading}
        supressRowClickSelection={true}
        rowSelection={'multiple'}
        height="calc(100vh - 12rem)"
        onGridReady={params => setGridApi(params)}
        onRowDoubleClicked={rowData => {
          if (userPermission == Permission.Edit) showUpdatedAdminModal(rowData);
        }}
        onSelectionChanged={() => onSelectionChanged()}
      />
      <Modal show={modalReq.show} modalData={modalReq.modalData} />
    </div>
  );
};

export default Admins;
