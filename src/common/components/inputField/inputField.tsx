import React from "react";
import "./inputField.scss";

// <input type="email">
// <input type="number">
// <input type="color">
// <input type="file">
// <input type="password">
// <input type="tel">
export enum InputFieldType {
  text = "text",
  number = "number",
  email = "email",
  tel = "tel",
  color = "color",
  file = "file",
  password = "password"
  // regex
  // amount  
}

interface IInputFieldParams {
  type: InputFieldType;
  className?: string;
  placeholder?: string;
  value?: string;
  pattern?:string;

  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onClick?: (e: any) => void;
}
const InputField = (props: IInputFieldParams) => {
  return (
    <input
      className={`inputField ${props.type} ${props.className}`}
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
