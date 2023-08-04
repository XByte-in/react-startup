import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Size, Type } from '../../const';
import { IMouseEventParam } from '../iControl';
import TranslatedText from '../translatedText/translatedText';

import './button.scss';

interface IButtonParams extends IMouseEventParam {
  textId: string;
  type: Type;
  size: Size;
  fontAwesomeIcon?: IconProp;
  fontAwesomeIconSize?: SizeProp;
  iconAlt?: string;
}

const Button = (props: IButtonParams) => {
  return (
    <button
      id={props.id}
      style={props.styleObj}
      className={`button type_${props.type} size_${props.size} ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseDown={props.onMouseDown}
    >
      <>
        {props.fontAwesomeIcon && (
          <FontAwesomeIcon
            icon={props.fontAwesomeIcon}
            size={props.fontAwesomeIconSize}
            className="btn-icon"
          />
        )}
        <TranslatedText id={props.textId} />
      </>
    </button>
  );
};

export default Button;
