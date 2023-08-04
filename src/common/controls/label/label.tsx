import { Type } from '../../const';
import { Typography } from '../../theme/typography/typography';
import { IMouseEventParam } from '../iControl';
import TranslatedText from '../translatedText/translatedText';

import './label.scss';

interface ILabelParam extends IMouseEventParam {
  textId: string;
  type: Type;
  typography: Typography;
  onClick?: () => void;
}

const Label = (props: ILabelParam) => {
  const isClickable = !!props.onClick;
  return (
    <span
      onClick={props.onClick}
      id={props.id}
      style={props.styleObj}
      className={`label ${props.type} ${props.typography} 
      ${isClickable ? 'clickable' : ''}${props.disabled ? 'disabled' : ''} ${
        props.className
      }`}
    >
      <TranslatedText id={props.textId} />
    </span>
  );
};

export default Label;
