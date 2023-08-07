import { DateTimePickerType } from '../../common/const';
import DateTimePicker from '../../common/controls/dateTimePicker/dateTimePicker';

import 'react-datepicker/dist/react-datepicker.css';

const TestDatePicker = () => {
  return (
    <>
      <DateTimePicker
        dateTimePickerType={DateTimePickerType.time}
        onChange={data => console.log(data)}
      />
      <DateTimePicker
        dateTimePickerType={DateTimePickerType.dateTime}
        onChange={data => console.log(data)}
      />
      <DateTimePicker
        dateTimePickerType={DateTimePickerType.date}
        onChange={data => console.log(data)}
      />
      <DateTimePicker
        dateTimePickerType={DateTimePickerType.dateRange}
        onChange={data => console.log(data)}
      />
      <DateTimePicker
        dateTimePickerType={DateTimePickerType.month}
        onChange={data => console.log(data)}
      />
      <DateTimePicker
        dateTimePickerType={DateTimePickerType.year}
        onChange={data => console.log(data)}
      />
    </>
  );
};

export default TestDatePicker;
