import React from "react";
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
  return (
    <div className="modal-test">
      <div className="row">
        <div className="col label">
          <Label
            labelText="Label 1:"
            typographySize={TypographyConst.body_label}
            type={Type.default}
          ></Label>
        </div>
        <div className="col data">
          <InputField type={InputFieldType.text} />
        </div>
      </div>
      <div className="row">
        <div className="col label">
          <Label
            labelText="Label 2:"
            typographySize={TypographyConst.body_label}
            type={Type.default}
          ></Label>
        </div>
        <div className="col data">
          <SelectField
            className={TypographyConst.body_medium_regular}
            options={[
              { label: "label 1", value: "value 1" },
              { label: "label 2", value: "value 2" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalTest;
