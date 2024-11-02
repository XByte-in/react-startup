import InputField from '../inputField/inputField';
import { InputFieldType } from '../inputField/inputFieldType';
import './query.scss';
const Query = () => {
  const handleClick = () => {
    document.getElementById('queryInput')?.focus();
  };
  return (
    <div className="query" onClick={handleClick}>
      <InputField
        id="queryInput"
        className="query-text"
        placeholder="Query"
        type={InputFieldType.text}
      />
    </div>
  );
};

export default Query;
