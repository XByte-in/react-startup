import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { Type } from '../../const';
import { Typography } from '../../theme/typography/typography';
import { IBaseControlParam } from '../iControl';
import Label from '../label/label';

import './checkBox.scss';

interface ICheckBoxParams extends IBaseControlParam {
  textId: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox = (props: ICheckBoxParams) => {
  const [isChecked, setChecked] = useState(props.checked);
  const toggleChecked = () => {
    if (props.disabled) return;
    const checked = !isChecked;
    setChecked(checked);
    props.onChange(checked);
  };

  return (
    <div className={`checkbox ${props.disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        disabled={props.disabled}
      />
      {isChecked ? (
        <FontAwesomeIcon
          icon={faSquareCheck}
          className={`icon ${props.disabled ? 'disabled' : ''}`}
          size="lg"
          onClick={toggleChecked}
        />
      ) : (
        <FontAwesomeIcon
          icon={faSquare}
          className={`icon ${props.disabled ? 'disabled' : ''}`}
          size="lg"
          onClick={toggleChecked}
        />
      )}
      <Label
        onClick={toggleChecked}
        className={`label ${props.disabled ? 'disabled' : ''}`}
        textId={props.textId}
        type={Type.default}
        typography={Typography.body_small_regular}
      />
    </div>
  );
};
export default CheckBox;
