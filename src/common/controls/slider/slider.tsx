import { useState } from 'react';

import { IBaseControlParam } from '../iControl';

import './slider.scss';

interface ISliderParams extends IBaseControlParam {
  min: number;
  max: number;
  value: number;
  onChange: (param: number) => void;
}
const Slider = (props: ISliderParams) => {
  const [value, setValue] = useState(props.value);
  return (
    <input
      className={`slider ${props.disabled ? 'disabled' : ''}`}
      disabled={props.disabled}
      type="range"
      min={props.min}
      max={props.max}
      value={value}
      step="1"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={(param: any) => {
        setValue(param.target.value);
        props.onChange(param.target.value);
      }}
    />
  );
};

export default Slider;
