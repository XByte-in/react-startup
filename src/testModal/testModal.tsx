import { useEffect, useState } from "react";
import { Type } from "../common/commonConst";
import InputField, {
  InputFieldType,
} from "../common/components/inputField/inputField";
import Label from "../common/components/label/label";
import { IModalComponentParams } from "../common/components/modal/interface";
import { TypographyConst } from "../common/scss/typographyConst";
import "./testModal.scss";

import { Validator } from "../common/components/validator/validator";
import { RequiredValidator } from "../common/components/validator/validators/required";
import { RangeValidator } from "../common/components/validator/validators/rangeValidator";

interface ITestModalParams extends IModalComponentParams {}

const TestModal = (props: ITestModalParams) => {
  const [email, setEmail] = useState(props.modalData["email"]);
  const [mobile, setMobile] = useState(props.modalData["mobile"]);

  const validator = new Validator({
    email: [new RequiredValidator("Email is required")],
    mobile: [
      new RequiredValidator("Mobile is required"),
      new RangeValidator(
        1000000000,
        9999999999,
        "Mobile number should be of 10 digits"
      ),
    ],
  });
  useEffect(() => {
    if (props.modalComponentRef)
      props.modalComponentRef.validate = validateData;
  }, []);
  const validateData = (data: { [key: string]: any }) => {
    return validator.validate(data);
  };
  const updateTestModalData = (prop: string, value: any) => {
    props.onModalDataChange?.(prop, value);
    switch (prop) {
      case "email":
        setEmail(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="modal-test">
      <div className="row">
        <div className="col label">
          <Label
            labelText="email"
            className="required"
            typographySize={TypographyConst.body_medium_regular}
            type={Type.default}
          ></Label>
        </div>
        <div className="col data">
          <InputField
            type={InputFieldType.text}
            value={email}
            onChange={(data) => updateTestModalData("email", data)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col label">
          <Label
            labelText="mobile"
            className="required"
            typographySize={TypographyConst.body_medium_regular}
            type={Type.default}
          ></Label>
        </div>
        <div className="col data">
          <InputField
            type={InputFieldType.number}
            value={mobile}
            onChange={(data) => updateTestModalData("mobile", data)}
          />
        </div>
      </div>
    </div>
  );
};

export default TestModal;
