/* eslint-disable @typescript-eslint/no-explicit-any */
import './inputField.scss';
import { InputFieldType } from './inputFieldType';

interface IInputFieldParams {
  type: InputFieldType;
  className?: string;
  placeholder?: string;
  value?: string;
  pattern?: string;
  isDisabled?: boolean;

  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onClick?: (e: any) => void;
}
const InputField = (props: IInputFieldParams) => {
  return (
    <input
      className={`inputField ${props.type} ${props.className}`}
      disabled={props.isDisabled ? true : false}
      placeholder=""
      type={props.type}
      onChange={e => props.onChange && props.onChange(e.target.value)}
      onFocus={e => props.onFocus && props.onFocus(e)}
      onBlur={e => props.onBlur && props.onBlur(e)}
      onClick={e => props.onClick && props.onClick(e)}
      value={props.value}
    />
  );
};

export default InputField;
