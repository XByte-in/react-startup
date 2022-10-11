import React, { useEffect, useState } from "react";
import { Type } from "../../commonConst";
import { IconSize, Icons_24px } from "../../pictures/pictures";
import { TypographyConst } from "../../scss/typographyConst";
import Icon from "../icon/icon";
import Label from "../label/label";
import "./radioButton.scss";
interface IRadioButtonParams {
  labelText: string;
  isChecked: boolean | null;
  isTriState?: boolean;
  onCheckChanged?: (isChecked: boolean) => void;
}

const RadioButton = (props: IRadioButtonParams) => {
  const [isChecked, setIsChecked] = useState<boolean | null>(false);
  useEffect(() => {
    if (props.isTriState) {
      setIsChecked(props.isChecked);
    } else {
      if (props.isChecked) setIsChecked(true);
      else setIsChecked(false);
    }
  }, []);

  const updateCheckedStated = () => {
    var checked = false;
    if (isChecked == null) checked = true;
    else checked = !isChecked;

    setIsChecked(checked);
    if (props.onCheckChanged) props.onCheckChanged(checked);
  };
  return (
    <div className="radiobutton" onClick={() => updateCheckedStated()}>
      <Icon
        className="radiobutton-icon"
        iconName={
          isChecked === null
            ? Icons_24px.radiobutton_partial_checked
            : isChecked
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
