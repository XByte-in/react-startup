/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseControlParam } from '../iControl';
import { InputFieldType } from './inputFieldType';
import './inputField.scss';

interface IInputFieldParams extends IBaseControlParam {
  type: InputFieldType;
  placeholder?: string;
  value?: string;
  pattern?: string;

  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onClick?: (e: any) => void;
}
const InputField = (props: IInputFieldParams) => {
  return (
    <input
      id={props.id}
      className={`inputField ${props.type} ${props.className}`}
      disabled={props.disabled ? true : false}
      placeholder={props.placeholder}
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
