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
import {
  RegExpValidation,
  RequiredValidation,
  Validator,
} from '../../../common/validator';
import { NavigationRoutes } from '../../navigationRoutes';

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
      new RegExpValidation(
        '^[a-zA-Z0-9._%+-]+@(bluestacks\\.com|now\\.gg)$',
        'Email should be of bluestacks or now domain'
      ),
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
      NavigationRoutes.forEach(_navItem => {
        if (_navItem.subNavigation) {
          _navItem.subNavigation.forEach(subNavItem => {
            if (props.modalData[subNavItem.route])
              default_dashboard_permissions.push(
                permission_options.filter(
                  option => option.value === props.modalData[subNavItem.route]
                )[0]
              );
            else default_dashboard_permissions.push({ ...default_permission });
          });
        } else if (props.modalData[_navItem.route])
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
    console.log('modalData', props.modalData);
    props.onModalDataChange?.(props.modalData);
  };
  const generate_permission_control = (navItem, index) => {
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
  };
  const generate_controls = () => {
    const controls = [];
    let index = 0;
    for (const navItem of NavigationRoutes) {
      if (navItem.subNavigation) {
        for (const subNavItem of navItem.subNavigation) {
          controls.push(generate_permission_control(subNavItem, index++));
        }
      } else {
        controls.push(generate_permission_control(navItem, index++));
      }
    }
    return controls;
  };
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
      {generate_controls()}
    </div>
  );
};

export default Admin;
