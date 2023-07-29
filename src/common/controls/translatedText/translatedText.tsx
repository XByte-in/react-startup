import { FormattedMessage } from 'react-intl';
import type { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';
interface ITranslatedText {
  id: string;
  values?: Record<
    string,
    | React.ReactNode
    | PrimitiveType
    | FormatXMLElementFn<React.ReactNode, React.ReactNode>
  >;
}
const TranslatedText = (props: ITranslatedText) => {
  return <FormattedMessage id={props.id} values={props.values} />;
};

export default TranslatedText;
