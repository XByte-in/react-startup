import { useEffect, useMemo, useState } from 'react';

import { Type } from '../../../common/const';
import InputField from '../../../common/controls/inputField/inputField';
import { InputFieldType } from '../../../common/controls/inputField/inputFieldType';
import Label from '../../../common/controls/label/label';
import {
  IModalComponentParams,
  ModalMode,
} from '../../../common/controls/modal/interface';
import SelectField, {
  ISelectFieldOption,
} from '../../../common/controls/selectField/SelectField';
import { Typography } from '../../../common/theme/typography/typography';
import { RequiredValidation, Validator } from '../../../common/validator';
import { NavigationJson } from '../../routePermissionMap';

import './admin.scss';

type IAdminParams = IModalComponentParams;

const Admin = (props: IAdminParams) => {
  const [email, setEmail] = useState<string>('');
  const [dashboard_permissions, setDashboardPermissions] = useState<
    ISelectFieldOption[]
  >([]);
  const validator = new Validator({
    email: [
      new RequiredValidation('Email is required'),
      // new RegExpValidation(
      //   "/^[a-zA-Z0-9.]*@(bluestacks|now){1}.com$/",
      //   "Email should be of bluestacks or now domain"
      // ),
    ],
  });

  const permission_options = useMemo(
    () => [
      { label: 'None', value: 0 },
      { label: 'View', value: 1 },
      { label: 'Edit', value: 2 },
    ],
    []
  );
  const default_permission = { label: 'None', value: 0 };
  useEffect(() => {
    const setup_dashboard_default_permissions = () => {
      const default_dashboard_permissions: ISelectFieldOption[] = [];
      NavigationJson.forEach(_navItem => {
        if (props.modalData[_navItem.route])
          default_dashboard_permissions.push(
            permission_options.filter(
              option => option.value === props.modalData[_navItem.route]
            )[0]
          );
        else default_dashboard_permissions.push({ ...default_permission });
      });
      setDashboardPermissions(default_dashboard_permissions);
    };
    setup_dashboard_default_permissions();
    if (props.modalData['email']) setEmail(props.modalData['email'].toString());
    if (props.modalComponentRef)
      props.modalComponentRef.validate = validateData;
  }, []);
  const validateData = () => {
    return validator.validate(props.modalData);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateData = (prop: string, value: any, index: number = 0) => {
    const updated_dashboard_permissions = [...dashboard_permissions];
    switch (prop) {
      case 'email':
        setEmail(value);
        props.modalData[prop] = value;
        break;
      default:
        updated_dashboard_permissions[index] = permission_options.filter(
          option => option.value === value.value
        )[0];
        setDashboardPermissions(updated_dashboard_permissions);
        props.modalData[prop] = value.value;
        break;
    }
    props.onModalDataChange?.(props.modalData);
  };
  const dashboard_permission_controls =
    dashboard_permissions.length > 0 ? (
      NavigationJson.map((navItem, index) => {
        return (
          <div className="row" key={navItem.route}>
            <div className="col label">
              <Label
                textId={navItem.name}
                typography={Typography.body_medium_regular}
                type={Type.default}
              ></Label>
            </div>
            <div className="col data">
              <SelectField
                options={permission_options}
                defaultValue={dashboard_permissions[index]}
                className={Typography.body_medium_regular}
                value={dashboard_permissions[index]}
                onChange={data => updateData(navItem.route, data, index)}
              />
            </div>
          </div>
        );
      })
    ) : (
      <></>
    );
  return (
    <div className="admin">
      <div className="row">
        <div className="col label">
          <Label
            textId="email"
            className="required"
            typography={Typography.body_medium_regular}
            type={Type.default}
          ></Label>
        </div>
        <div className="col data">
          <InputField
            isDisabled={props.mode === ModalMode.Update}
            type={InputFieldType.email}
            value={email}
            onChange={data => updateData('email', data)}
          />
        </div>
      </div>
      {dashboard_permission_controls}
    </div>
  );
};

export default Admin;
