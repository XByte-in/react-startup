import { useEffect, useState } from "react";
import { Type } from "../common/commonConst";
import InputField, {
  InputFieldType,
} from "../common/components/inputField/inputField";
import Label from "../common/components/label/label";
import { IModalComponentParams } from "../common/components/modal/interface";
import {
  RangeValidator,
  RequiredValidator,
  Validator,
} from "../common/components/validator";
import { TypographyConst } from "../common/scss/typographyConst";
import "./testModal.scss";

interface ITestModalParams extends IModalComponentParams {}

const TestModal = (props: ITestModalParams) => {
  const [email, setEmail] = useState(props.modalData["email"]);
  const [mobile, setMobile] = useState(props.modalData["mobile"]);
  const [trackingIds, setTrackingIds] = useState(
    props.modalData["trackingIds"]
  );

  const validator = new Validator({
    email: [new RequiredValidator("Email is required")],
    mobile: [
      new RequiredValidator("Mobile is required"),
      new RangeValidator(
        999999999,
        9999999999,
        "Mobile number should be of 10 digits"
      ),
    ],
  });
  useEffect(() => {
    if (props.modalComponentRef)
      props.modalComponentRef.validate = validateData;
  }, []);
  const validateData = () => {
    return validator.validate(props.modalData);
  };
  const updateTestModalData = (prop: string, value: any) => {
    switch (prop) {
      case "email":
        setEmail(value);
        props.modalData[prop] = value;
        break;
      case "mobile":
        setMobile(value);
        props.modalData[prop] = value;
        break;
      default:
        if (Object.keys(trackingIds).includes(prop)) {
          const updatedTrackingIds = { ...trackingIds };
          updatedTrackingIds[prop] = value;
          setTrackingIds(updatedTrackingIds);
          props.modalData["trackingIds"] = updatedTrackingIds;
        }
        break;
    }
    props.onModalDataChange?.(props.modalData);
  };

  const trackingIds_ = Object.keys(trackingIds).map((id: string) => {
    return (
      <div className="row" key={id}>
        <div className="col label">
          <Label
            labelText={id}
            typographySize={TypographyConst.body_medium_regular}
            type={Type.default}
          ></Label>
        </div>
        <div className="col data">
          <InputField
            type={InputFieldType.text}
            value={trackingIds[id]}
            onChange={(data) => updateTestModalData(id, data)}
          />
        </div>
      </div>
    );
  });
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
      {trackingIds_}
    </div>
  );
};

export default TestModal;
