import InputField from '../../common/controls/inputField/inputField';
import { InputFieldType } from '../../common/controls/inputField/inputFieldType';

const TestInputField = () => {
  return (
    <>
      <div className="row">
        <InputField type={InputFieldType.color} />
      </div>
      <div className="row">
        <InputField type={InputFieldType.email} />
      </div>
      <div className="row">
        <InputField type={InputFieldType.file} />
      </div>
      <div className="row">
        <InputField type={InputFieldType.number} />
      </div>
      <div className="row">
        <InputField type={InputFieldType.password} />
      </div>
      <div className="row">
        <InputField type={InputFieldType.tel} />
      </div>
      <div className="row">
        <InputField type={InputFieldType.text} />
      </div>
    </>
  );
};

export default TestInputField;
