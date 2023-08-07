import DateTimePicker from '../../common/controls/dateTimePicker/dateTimePicker';
import { DateTimePickerType } from '../../common/const';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const TestDatePicker = () => {
  return (
    <>
      <DateTimePicker dateTimePickerType={DateTimePickerType.time} />
      <DateTimePicker dateTimePickerType={DateTimePickerType.dateTime} />
      <DateTimePicker dateTimePickerType={DateTimePickerType.date} />
      <DateTimePicker dateTimePickerType={DateTimePickerType.dateRange} />
      <DateTimePicker dateTimePickerType={DateTimePickerType.month} />
      <DateTimePicker dateTimePickerType={DateTimePickerType.year} />
    </>
  );
};

export default TestDatePicker;
