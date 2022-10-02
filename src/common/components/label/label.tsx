import React from "react";
import FormattedText from "../formattedText/formattedText";
import { Type } from "../../commonConst";
import "./label.scss";
import { TypographyConst } from "../../scss/typographyConst";

interface ILabelParam {
  labelText: string;
  type: Type;
  typographySize: TypographyConst;
  id?: string;
  className?: string;
  styleObj?: { [key: string]: {} };

  // id = "",
  // className = "body-body-regular",
  // styleObj = {},
  // type = Type.default,
  // size = Size.medium,
  // labelText = "appName",
}
const Label = (props: ILabelParam) => {
  return (
    <span
      id={props.id}
      style={props.styleObj}
      className={`label ${props.type} ${props.typographySize} ${props.className}`}
    >
      <FormattedText text={props.labelText} />
    </span>
  );
};

export default Label;
