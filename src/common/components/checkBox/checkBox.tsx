import React, { useEffect, useState } from "react";
import { Type } from "../../commonConst";
import { IconSize, Icons_24px } from "../../pictures/pictures";
import { TypographyConst } from "../../scss/typographyConst";
import Icon from "../icon/icon";
import Label from "../label/label";
import "./checkBox.scss";
interface ICheckBoxParams {
  labelText: string;
  isChecked: boolean | null;
  isTriState?: boolean;
  onCheckChanged?: (isChecked: boolean) => void;
}

const CheckBox = (props: ICheckBoxParams) => {
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
    <div className="checkbox" onClick={() => updateCheckedStated()}>
      <Icon
        className="checkbox-icon"
        iconName={
          isChecked === null
            ? Icons_24px.checkbox_partial_checked
            : isChecked
            ? Icons_24px.checkbox_checked
            : Icons_24px.checkbox_unhecked
        }
        iconSize={IconSize._16}
      />
      <Label
        className="checkbox-label"
        labelText={props.labelText}
        typographySize={TypographyConst.body_medium_regular}
        type={Type.default}
      ></Label>
    </div>
  );
};
export default CheckBox;
