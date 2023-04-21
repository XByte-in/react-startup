import React, { useEffect, useState } from "react";
import "./modalTest.scss";
import { IModalComponentParams } from "../common/components/modal/interface";
import Label from "../common/components/label/label";
import { TypographyConst } from "../common/scss/typographyConst";
import { Type } from "../common/commonConst";
import InputField, {
  InputFieldType,
} from "../common/components/inputField/inputField";
import Select from "react-select/dist/declarations/src/Select";
import SelectField from "../common/components/selectField/selectField";

interface IModalTestParams extends IModalComponentParams {}

const ModalTest = (props: IModalTestParams) => {
  const [hasError, setHasError] = useState({ show: false, errMsg: ""  });
  useEffect(() => {
    props.modalComponentRef.updateError = updateError;
  }, []);

  function updateError(errMsg:string) {
    setHasError({ show: true, errMsg: errMsg });
  }
  return (
    <div className="modal-test">
      <div className="row">
        <div className="col label">
          <Label
            labelText="Label 1:"
            typographySize={TypographyConst.body_medium_regular}
            type={Type.default}
          ></Label>
        </div>
        <div className="col data">
          <InputField type={InputFieldType.text} value = {props.modalData["email"]} onChange={(data) =>
              props.onModalDataChange("email", data)
            } />
        </div>
      </div>
    </div>
  );
};

export default ModalTest;
