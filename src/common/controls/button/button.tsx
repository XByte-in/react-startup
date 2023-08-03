import { Size, Type } from '../../const';
import Icon from '../icon/icon';
import { IMouseEventParam } from '../iControl';
import TranslatedText from '../translatedText/translatedText';

import './button.scss';

interface IButtonParams extends IMouseEventParam {
  textId: string;
  type: Type;
  size: Size;
  disabled?: boolean;
  iconSrc?: string;
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
        {props.iconSrc && (
          <Icon
            className="btn-icon"
            iconSrc={props.iconSrc}
            alt={props.iconAlt}
          />
        )}
        <TranslatedText id={props.textId} />
      </>
    </button>
  );
};

export default Button;
