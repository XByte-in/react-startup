import { useEffect, useState } from 'react';

import { Type } from '../../../common/const';
import InputField from '../../../common/controls/inputField/inputField';
import { InputFieldType } from '../../../common/controls/inputField/inputFieldType';
import Label from '../../../common/controls/label/label';
import { IModalComponentParams } from '../../../common/controls/modal/interface';
import { Typography } from '../../../common/theme/typography/typography';
import { RequiredValidation, Validator } from '../../../validator';

import './admin.scss';

type IAdminParams = IModalComponentParams;

const Admin = (props: IAdminParams) => {
  const [email, setEmail] = useState<string>(
    props.modalData['email'].toString()
  );

  const validator = new Validator({
    email: [
      new RequiredValidation('Email is required'),
      // new RegExpValidation(
      //   "/^[a-zA-Z0-9.]*@(bluestacks|now){1}.com$/",
      //   "Email should be of bluestacks or now domain"
      // ),
    ],
  });
  useEffect(() => {
    if (props.modalComponentRef)
      props.modalComponentRef.validate = validateData;
  }, []);
  const validateData = () => {
    return validator.validate(props.modalData);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateData = (prop: string, value: any) => {
    props.modalData[prop] = value;
    if (prop === 'email') {
      setEmail(value);
    }
    props.onModalDataChange?.(props.modalData);
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
            type={InputFieldType.email}
            value={email}
            onChange={data => updateData('email', data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
