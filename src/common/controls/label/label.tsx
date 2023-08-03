import { Type } from '../../const';
import { Typography } from '../../theme/typography/typography';
import { IBaseControlParam } from '../iControl';
import TranslatedText from '../translatedText/translatedText';
import './label.scss';

interface ILabelParam extends IBaseControlParam {
  textId: string;
  type: Type;
  typography: Typography;
}

const Label = (props: ILabelParam) => {
  return (
    <span
      id={props.id}
      style={props.styleObj}
      className={`label ${props.type} ${props.typography} ${props.className}`}
    >
      <TranslatedText id={props.textId} />
    </span>
  );
};

export default Label;
