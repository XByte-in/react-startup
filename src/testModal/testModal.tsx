import { useEffect, useState } from "react";
import { Type } from "../common/commonConst";
import InputField, {
  InputFieldType,
} from "../common/components/inputField/inputField";
import Label from "../common/components/label/label";
import { IModalComponentParams } from "../common/components/modal/interface";
import { TypographyConst } from "../common/scss/typographyConst";
import "./testModal.scss";

interface ITestModalParams extends IModalComponentParams {}

const TestModal = (props: ITestModalParams) => {
  const [email, setEmail] = useState(props.modalData["email"]);
  const [mobile, setMobile] = useState(props.modalData["mobile"]);
  useEffect(() => {
    if (props.modalComponentRef)
      props.modalComponentRef.validate = validateData;
  }, []);
  const validateData = () => {
    // validate for any value here
    return true;
  };
  const updateTestModalData = (prop: string, value: any) => {
    props.onModalDataChange?.(prop, value);
    switch (prop) {
      case "email":
        // validate for any value here
        setEmail(value);
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
            type={InputFieldType.text}
            value={mobile}
            onChange={(data) => updateTestModalData("mobile", data)}
          />
        </div>
      </div>
    </div>
  );
};

export default TestModal;
