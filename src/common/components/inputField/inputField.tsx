import React from "react";
import "./inputField.scss";
export enum InputFieldType {
  text = "text",
  number = "number",
  email = "email",
  // email
  // color
  // file
  // image
  // password
  // regex
  // decimal number
  // amount
  // min-max
}

interface IInputFieldParams {
  type: InputFieldType;
  className?: string;
  placeholder?: string;
  value?: string;

  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onClick?: (e: any) => void;
}
const InputField = (props: IInputFieldParams) => {
  return (
    <input
      className="inputField"
      placeholder=""
      type={props.type}
      onChange={(e) => props.onChange && props.onChange(e.target.value)}
      onFocus={(e) => props.onFocus && props.onFocus(e)}
      onBlur={(e) => props.onBlur && props.onBlur(e)}
      onClick={(e) => props.onClick && props.onClick(e)}
      value={props.value}
    />
  );
};

export default InputField;
