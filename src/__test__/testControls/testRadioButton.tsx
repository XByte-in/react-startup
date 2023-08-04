import { useState } from 'react';

import RadioButton from '../../common/controls/radioButton/radioButton';

const TestRadioButton = () => {
  enum Test {
    yes = 'yes',
    no = 'no',
  }
  const [test, setTest] = useState<string>(Test.yes);
  return (
    <>
      <div className="row">
        <div className="col">
          <RadioButton
            textId="yes"
            isChecked={test === Test.yes}
            value={Test.yes}
            onChange={param => setTest(param)}
          />
        </div>
        <div className="col">
          <RadioButton
            textId="no"
            isChecked={test === Test.no}
            value={Test.no}
            onChange={param => setTest(param)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <RadioButton
            textId="yes"
            disabled
            isChecked={test === Test.yes}
            value={Test.yes}
            onChange={param => setTest(param)}
          />
        </div>
        <div className="col">
          <RadioButton
            textId="no"
            disabled
            isChecked={test === Test.no}
            value={Test.no}
            onChange={param => setTest(param)}
          />
        </div>
      </div>
    </>
  );
};

export default TestRadioButton;
