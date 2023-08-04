import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faSolidCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

import { Type } from '../../const';
import { Typography } from '../../theme/typography/typography';
import { IBaseControlParam } from '../iControl';
import Label from '../label/label';

import './radioButton.scss';

interface IRadioButtonParams extends IBaseControlParam {
  textId: string;
  isChecked: boolean;
  value: string;
  onChange: (value: string) => void;
}

const RadioButton = (props: IRadioButtonParams) => {
  const [isChecked, setChecked] = useState(props.isChecked);

  useEffect(() => {
    setChecked(props.isChecked);
  }, [props.isChecked]);

  const toggleChecked = () => {
    if (props.disabled) return;
    if (!isChecked) {
      setChecked(true);
      if (props.onChange) props.onChange(props.value);
    }
  };

  return (
    <div
      className={`radioButton  ${props.disabled ? 'disabled' : ''}`}
      onClick={() => toggleChecked()}
    >
      <input
        type="radio"
        defaultChecked={isChecked}
        value={props.value}
        disabled={props.disabled}
      />
      {isChecked ? (
        <FontAwesomeIcon icon={faSolidCircle} className="icon" size="lg" />
      ) : (
        <FontAwesomeIcon icon={faCircle} className="icon" size="lg" />
      )}
      <Label
        className="label"
        textId={props.textId}
        type={Type.default}
        typography={Typography.body_small_regular}
      />
    </div>
  );
};
export default RadioButton;
