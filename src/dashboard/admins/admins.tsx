/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

import { Size, Type } from '../../common/const';
import Button from '../../common/controls/button/button';
import CheckBox from '../../common/controls/checkbox/checkBox';
import DataGrid, {
  IColumnSchema,
} from '../../common/controls/dataGrid/dataGrid';
import Modal, { IModalParams } from '../../common/controls/modal/modal';
import { RootState } from '../../common/store/store';
import ApiService from '../apiService';
import { RoutePermissionMap, UserPermissionMap } from '../routePermissionMap';
import Admin from './admin/admin';
import './admins.scss';

const Admins = () => {
  const credential = useSelector(
    (state: RootState) => state.googleUserInfo.credential
  );
  const [columns, setColumns] = useState<Array<IColumnSchema>>([]);
  const [gridDataLoading, setGridDataLoading] = useState(false);
  const [admins, setAdmins] = useState<Array<any>>([]);

  const [modalReq, setModalReq] = useState<IModalParams>({ show: false });
  const modalAddAdminRef = { validate: () => [] };
  let addAdminData: { [key: string]: any } = {
    email: '',
  };

  useEffect(() => {
    generateColumns();
    fetchAdmins();
  }, []);

  const generateColumns = () => {
    const cols: IColumnSchema[] = [];
    cols.push({
      field: 'email',
      headerName: 'Email',
      sortable: true,
      filter: true,
      floatingFilter: true,
    });
    Object.values(RoutePermissionMap).forEach((permissionId: string) => {
      cols.push({
        field: permissionId,
        headerName: permissionId,
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
    Object.values(RoutePermissionMap).forEach((permissionId: string) => {
      rowData[permissionId] = adminData[permissionId] || 0;
    });
    return rowData;
  };
  const parseAdmins = (adminsData: any[]) => {
    return adminsData.map(adminData => parseAdmin(adminData));
  };
  const fetchAdmins = () => {
    setGridDataLoading(true);
    setAdmins([]);
    ApiService.Admins.get(credential)
      .then((response: any) => {
        if (response.success && response.data)
          if (Array.isArray(response.data) && response.data.length > 0)
            setAdmins(parseAdmins(response.data));
        setGridDataLoading(false);
      })
      .catch(error => {
        setGridDataLoading(false);
        console.log(error);
      });
    setAdmins(parseAdmins(UserPermissionMap));
  };

  const updateAdminStatus = (rowData: any) => {
    ApiService.Admins.update(credential, rowData)
      .then((response: any) => {
        if (response.success && response.data) {
          let updatedAdmins = [];
          const updateAdmin = parseAdmin(response.data);
          updatedAdmins = admins.map(admin => {
            if (admin.email == updateAdmin.email) return updateAdmin;
            return admin;
          });
          setAdmins(updatedAdmins);
        } else {
          console.error('Could not update admin', response.message);
        }
      })
      .catch(error => {
        setupAddAdmin(true, false, [error.message]);
      });
  };

  const updatedAdminStatusButton = (rowData: any) => {
    return (
      <CheckBox
        checked={rowData.active}
        onChange={checked => updateAdminStatus(rowData, checked)}
      />
    );
  };

  const deleteAdminButton = (rowData: any) => {
    return (
      <Button
        textId="delete"
        type={Type.secondary}
        size={Size.small}
        onClick={() => showRemoveModalDetail(rowData.email)}
      />
    );
  };

  const deleteAdmin = (email: string) => {
    setupRemoveModal(email, true, true);
    ApiService.Admins.delete(credential, email)
      .then((response: any) => {
        if (response.success) {
          let adminList = [];
          adminList = admins.filter(admin => {
            return admin.email != email;
          });
          setAdmins(adminList);
          setupRemoveModal(email, false, false);
        } else {
          setupRemoveModal(email, true, false, [response.message]);
        }
      })
      .catch(error => {
        setupRemoveModal(email, true, false, [error.message]);
      });
  };

  const addAdmin = (email: string) => {
    setupAddAdmin(true, true);
    ApiService.Admins.add(credential, {
      email: email,
    })
      .then((response: any) => {
        if (response.success && response.data) {
          const admin: IAdmin = parseAdmin(response.data);
          const updatedAdmins = [...admins];
          updatedAdmins.push(admin);
          setAdmins(updatedAdmins);
          setupAddAdmin(false, false);
        } else {
          setupAddAdmin(true, false, [response.message]);
        }
      })
      .catch(error => {
        setupAddAdmin(true, false, [error.message]);
      });
  };

  const onYes = () => {
    const errMsgs = modalAddAdminRef.validate();
    if (errMsgs.length > 0) {
      setupAddAdmin(true, false, errMsgs);
    } else {
      addAdmin(addAdminData.email);
    }
  };

  const showAddAdminModal = () => {
    setupAddAdmin(true, false);
  };

  const showRemoveModalDetail = (email: string) => {
    setupRemoveModal(email, true, false);
  };

  const setupAddAdmin = (
    show: boolean,
    isLoading: boolean,
    errMsg?: Array<string>
  ) => {
    setModalReq({
      show: show,
      modalData: {
        title: 'addAdmin',
        size: Size.small,
        onClose: () => setModalReq({ show: false }),
        isLoading: isLoading,
        errMsg: errMsg,
        yesBtn: {
          textId: 'yes',
          onClick: () => onYes(),
        },
        noBtn: {
          textId: 'no',
          onClick: () => setupAddAdmin(false, false),
        },
        children: (
          <Admin
            modalData={addAdminData}
            modalComponentRef={modalAddAdminRef}
            onModalDataChange={(data: { [key: string]: any }) => {
              addAdminData = data;
              console.log(addAdminData);
            }}
          ></Admin>
        ),
      },
    });
  };

  const setupRemoveModal = (
    email: string,
    show: boolean,
    isLoading: boolean,
    errMsg?: Array<string>
  ) => {
    setModalReq({
      show: show,
      modalData: {
        title: 'areYouSure',
        size: Size.small,
        onClose: () => setModalReq({ show: false }),
        isLoading: isLoading,
        errMsg: errMsg,
        yesBtn: {
          textId: 'yes',
          onClick: () => deleteAdmin(email),
        },
        children: (
          <div className="deleteAdmin">
            <FormattedMessage id="deletingAdmin" />
            <div>{email}</div>
          </div>
        ),
        noBtn: {
          textId: 'no',
          onClick: () => setupRemoveModal(email, false, false),
        },
      },
    });
  };

  return (
    <div className="admins">
      <div className="btns">
        <Button
          className="btn"
          size={Size.medium}
          type={Type.secondary}
          textId="addAdmin"
          onClick={() => showAddAdminModal()}
        />
        <Button
          className="btn"
          size={Size.medium}
          type={Type.secondary}
          textId="refresh"
          onClick={() => fetchAdmins()}
        />
      </div>
      <DataGrid
        rows={admins}
        columns={columns}
        loading={gridDataLoading}
        height="calc(100vh - 12rem)"
      />
      <Modal show={modalReq.show} modalData={modalReq.modalData} />
    </div>
  );
};

export default Admins;
