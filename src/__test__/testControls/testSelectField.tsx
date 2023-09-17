import { useEffect, useState } from 'react';

import SelectField, {
  ISelectFieldOption,
} from '../../common/controls/SelectField/SelectField';
import { Typography } from '../../common/theme';

const TestSelectField = () => {
  const options = [
    { label: 'test1', value: 'test1' },
    { label: 'test2', value: 'test2' },
    { label: 'test3', value: 'test3' },
    { label: 'test4', value: 'test4' },
  ];
  const [val, setVal] = useState<ISelectFieldOption>();
  const [vals, setVals] = useState<ISelectFieldOption[]>([]);
  useEffect(() => {
    setVal(options[1]);
    setVals([options[1], options[2]]);
  }, []);
  return (
    <>
      <div className="row">
        <div className="col">
          <SelectField
            options={options}
            defaultValue={val}
            className={Typography.body_medium_regular}
            value={val}
            onChange={data => setVal(data)}
          />
        </div>

        <div className="col">
          <SelectField
            isCreatable={true}
            options={options}
            className={Typography.body_medium_regular}
            value={val}
            defaultValue={val}
            onChange={data => setVal(data)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SelectField
            isMulti={true}
            options={options}
            className={Typography.body_medium_regular}
            value={vals}
            defaultValue={vals}
            onChange={data => setVals(data)}
          />
        </div>

        <div className="col">
          <SelectField
            isMulti={true}
            isCreatable={true}
            options={options}
            className={Typography.body_medium_regular}
            value={vals}
            defaultValue={vals}
            onChange={data => setVals(data)}
          />
        </div>
      </div>
    </>
  );
};

export default TestSelectField;
