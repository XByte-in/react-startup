import { Type } from '../../const';
import { Typography } from '../../theme/typography/typography';
import { IBaseControlParam } from '../iControls';
import TranslatedText from '../translatedText/translatedText';
import styles from './label.module.scss';

interface ILabelParam extends IBaseControlParam {
  labelText: string;
  type: Type;
  typographySize: Typography;
}

const Label = (props: ILabelParam) => {
  return (
    <span
      id={props.id}
      style={props.styleObj}
      className={`${styles.label} ${props.type} ${props.typographySize} ${props.className}`}
    >
      <TranslatedText id={props.labelText} />
    </span>
  );
};

export default Label;
