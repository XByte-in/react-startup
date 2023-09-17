import { useEffect, useMemo, useState } from 'react';

import SelectField, {
  ISelectFieldOption,
} from '../../common/controls/SelectField/SelectField';
import { Typography } from '../../common/theme';

const TestSelectField = () => {
  const options = useMemo(
    () => [
      { label: 'test1', value: 'test1' },
      { label: 'test2', value: 'test2' },
      { label: 'test3', value: 'test3' },
      { label: 'test4', value: 'test4' },
    ],
    []
  );
  const [value, setValue] = useState<ISelectFieldOption>();
  const [values, setValues] = useState<ISelectFieldOption[]>([]);
  useEffect(() => {
    setValue(options[1]);
    setValues([options[1], options[2]]);
  }, [options]);
  return (
    <>
      <div className="row">
        <div className="col">
          <SelectField
            options={options}
            defaultValue={value}
            className={Typography.body_medium_regular}
            value={value}
            onChange={data => setValue(data)}
          />
        </div>

        <div className="col">
          <SelectField
            isCreatable={true}
            options={options}
            className={Typography.body_medium_regular}
            value={value}
            defaultValue={value}
            onChange={data => setValue(data)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SelectField
            isMulti={true}
            options={options}
            className={Typography.body_medium_regular}
            value={values}
            defaultValue={values}
            onChange={data => setValues(data)}
          />
        </div>

        <div className="col">
          <SelectField
            isMulti={true}
            isCreatable={true}
            options={options}
            className={Typography.body_medium_regular}
            value={values}
            defaultValue={values}
            onChange={data => setValues(data)}
          />
        </div>
      </div>
    </>
  );
};

export default TestSelectField;
