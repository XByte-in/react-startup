import { useState } from "react";
import { Type } from "../../commonConst";
import { IconSize, Icons_24px } from "../../pictures/pictures";
import { TypographyConst } from "../../scss/typographyConst";
import Icon from "../icon/icon";
import Label from "../label/label";
import "./radioButton.scss";
interface IRadioButtonParams {
  labelText: string;
  radioGroup: string;
  isChecked: boolean;
  onCheckChanged?: (isChecked: boolean) => void;
}

const RadioButton = (props: IRadioButtonParams) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const updateCheckedStated = () => {
    const isChecked = true;
    setIsChecked(isChecked);
    if (props.onCheckChanged) props.onCheckChanged(isChecked);
  };

  return (
    <div className="radiobutton" onClick={() => updateCheckedStated()}>
      <input type="radio" checked={isChecked} name={props.radioGroup} />
      <Icon
        className="radiobutton-icon"
        iconName={
          isChecked
            ? Icons_24px.radiobutton_checked
            : Icons_24px.radiobutton_unchecked
        }
        iconSize={IconSize._16}
      />
      <Label
        className="radiobutton-label"
        labelText={props.labelText}
        typographySize={TypographyConst.body_medium_regular}
        type={Type.default}
      ></Label>
    </div>
  );
};
export default RadioButton;
