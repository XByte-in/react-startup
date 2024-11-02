import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Type, Size } from '../../const';
import Button from '../button/button';
import InputField from '../inputField/inputField';
import { InputFieldType } from '../inputField/inputFieldType';
import './query.scss';
const Query = () => {
  const handleClick = () => {
    document.getElementById('queryInput')?.focus();
  };
  return (
    <div className="query">
      <div className="query-fields" onClick={handleClick}>
        <InputField
          id="queryInput"
          className="query-text"
          placeholder="Query"
          type={InputFieldType.text}
        />
      </div>
      <Button
        textId="query"
        className="query-button"
        type={Type.primary}
        size={Size.medium}
        fontAwesomeIcon={faMagnifyingGlass}
      />
    </div>
  );
};

export default Query;
