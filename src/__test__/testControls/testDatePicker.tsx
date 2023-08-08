import { DateTimePickerType } from '../../common/const';
import DateTimePicker from '../../common/controls/dateTimePicker/dateTimePicker';

import 'react-datepicker/dist/react-datepicker.css';

const TestDatePicker = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <DateTimePicker
            dateTimePickerType={DateTimePickerType.time}
            onChange={data => console.log(data)}
          />
        </div>
        <div className="col">
          <DateTimePicker
            disabled
            dateTimePickerType={DateTimePickerType.time}
            onChange={data => console.log(data)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DateTimePicker
            dateTimePickerType={DateTimePickerType.dateTime}
            onChange={data => console.log(data)}
          />
        </div>
        <div className="col">
          <DateTimePicker
            disabled
            dateTimePickerType={DateTimePickerType.dateTime}
            onChange={data => console.log(data)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DateTimePicker
            dateTimePickerType={DateTimePickerType.date}
            onChange={data => console.log(data)}
          />
        </div>
        <div className="col">
          <DateTimePicker
            disabled
            dateTimePickerType={DateTimePickerType.date}
            onChange={data => console.log(data)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DateTimePicker
            dateTimePickerType={DateTimePickerType.dateRange}
            onChange={data => console.log(data)}
          />
        </div>
        <div className="col">
          <DateTimePicker
            disabled
            dateTimePickerType={DateTimePickerType.dateRange}
            onChange={data => console.log(data)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DateTimePicker
            dateTimePickerType={DateTimePickerType.month}
            onChange={data => console.log(data)}
          />
        </div>
        <div className="col">
          <DateTimePicker
            disabled
            dateTimePickerType={DateTimePickerType.month}
            onChange={data => console.log(data)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DateTimePicker
            dateTimePickerType={DateTimePickerType.year}
            onChange={data => console.log(data)}
          />
        </div>
        <div className="col">
          <DateTimePicker
            disabled
            dateTimePickerType={DateTimePickerType.year}
            onChange={data => console.log(data)}
          />
        </div>
      </div>
    </>
  );
};

export default TestDatePicker;
