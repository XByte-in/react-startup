import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import { DateTimePickerType } from '../../const';
import { IBaseControlParam } from '../iControl';

import 'react-datepicker/dist/react-datepicker.css';
import './dateTimePicker.scss';

interface IDateTimePickerParams extends IBaseControlParam {
  dateTimePickerType: DateTimePickerType;
  selectedDate?: Date;

  selectsRange?: boolean;
  startDate?: Date;
  endDate?: Date;
  showWeekNumbers?: boolean;

  minValue?: Date;
  maxValue?: Date;
  showTimeInput?: boolean;
  timeIntervals?: number;

  isClearable?: boolean;
  placeholderText?: string;
  onCalendarClose?: () => void;
  onCalendarOpen?: () => void;
  onChange?: (e: Date | Date[]) => void;
}
const DateTimePicker = (props: IDateTimePickerParams) => {
  const [dateFormat, setDateFormat] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [showMonthYearPicker, setShowMonthYearPicker] = useState<boolean>();
  const [showYearPicker, setShowYearPicker] = useState<boolean>();

  const [selectsRange, setSelectsRange] = useState<boolean>();
  const [monthsShown, setMonthsShown] = useState<number>();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [showWeekNumbers, setShowWeekNumbers] = useState<boolean>();

  const [minDate, setMinDate] = useState<Date>();
  const [maxDate, setMaxDate] = useState<Date>();

  const [minTime, setMinTime] = useState<Date>();
  const [maxTime, setMaxTime] = useState<Date>();
  const [showTimeInput, setShowTimeInput] = useState<boolean>();
  const [showTimeSelect, setShowTimeSelect] = useState<boolean>();
  const [showTimeSelectOnly, setShowTimeSelectOnly] = useState<boolean>();
  const [timeIntervals, setTimeIntervals] = useState<number>();

  const setTimeRequisite = () => {
    setDateFormat('h:mm aa');
    setShowTimeSelectOnly(true);
    if (props.selectedDate != null) setSelectedDate(props.selectedDate);
    if (props.minValue != null) setMinTime(props?.minValue);
    if (props.maxValue != null) setMaxTime(props?.maxValue);
    if (props.showTimeInput != null) setShowTimeInput(props.showTimeInput);
    else {
      setShowTimeSelect(true);
      if (props.timeIntervals != null) setTimeIntervals(props.timeIntervals);
    }
  };

  const setDateTimeRequisite = () => {
    setDateFormat('ddMMM,yyyy hh:mm aa');
    if (props.selectedDate != null) setSelectedDate(props.selectedDate);
    if (props.minValue != null) setMinDate(props.minValue);
    if (props.maxValue != null) setMaxDate(props.maxValue);
    if (props.showWeekNumbers != null)
      setShowWeekNumbers(props.showWeekNumbers);
    if (props.showTimeInput != null) setShowTimeInput(props.showTimeInput);
    else {
      setShowTimeSelect(true);
      if (props.timeIntervals != null) setTimeIntervals(props.timeIntervals);
    }
  };

  const setDateRequisite = () => {
    setDateFormat('ddMMM,yyyy');
    if (props.selectedDate != null) setSelectedDate(props.selectedDate);
    if (props.minValue != null) setMinDate(props.minValue);
    if (props.maxValue != null) setMaxDate(props.maxValue);
    if (props.showWeekNumbers != null)
      setShowWeekNumbers(props.showWeekNumbers);
  };

  const setDateRangeRequisite = () => {
    setDateFormat('ddMMM,yyyy');
    setSelectsRange(true);
    setMonthsShown(2);
    if (props.startDate != null) setStartDate(props.startDate);
    if (props.endDate != null) setEndDate(props.endDate);
    if (props.minValue != null) setMinDate(props.minValue);
    if (props.maxValue != null) setMaxDate(props.maxValue);
    if (props.showWeekNumbers != null)
      setShowWeekNumbers(props.showWeekNumbers);
  };
  const setMonthRequisite = () => {
    setDateFormat('MMM,yyyy');
    setShowMonthYearPicker(true);
    if (props.selectedDate != null) setSelectedDate(props.selectedDate);
    if (props.minValue != null) setMinDate(props.minValue);
    if (props.maxValue != null) setMaxDate(props.maxValue);
  };
  const setYearRequisite = () => {
    setDateFormat('yyyy');
    setShowYearPicker(true);
    if (props.selectedDate != null) setSelectedDate(props.selectedDate);
    if (props.minValue != null) setMinDate(props.minValue);
    if (props.maxValue != null) setMaxDate(props.maxValue);
  };
  useEffect(() => {
    switch (props.dateTimePickerType) {
      case DateTimePickerType.time:
        setTimeRequisite();
        break;
      case DateTimePickerType.dateTime:
        setDateTimeRequisite();
        break;
      case DateTimePickerType.date:
        setDateRequisite();
        break;
      case DateTimePickerType.dateRange:
        setDateRangeRequisite();
        break;
      case DateTimePickerType.month:
        setMonthRequisite();
        break;
      case DateTimePickerType.year:
        setYearRequisite();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dateTimePickerType]);

  return (
    <div className="dateTimePicker">
      <DatePicker
        id={props.id}
        disabled={props.disabled}
        className={`datePicker-display datePicker-display-icon ${
          props.disabled ? 'disabled' : ''
        }`}
        dateFormat={dateFormat}
        isClearable={props.isClearable}
        placeholderText={props.placeholderText}
        showTimeInput={showTimeInput}
        showTimeSelect={showTimeSelect}
        showMonthYearPicker={showMonthYearPicker}
        timeIntervals={timeIntervals}
        minDate={minDate}
        maxDate={maxDate}
        showWeekNumbers={showWeekNumbers}
        selected={selectedDate}
        selectsRange={selectsRange}
        startDate={startDate}
        endDate={endDate}
        monthsShown={monthsShown}
        showTimeSelectOnly={showTimeSelectOnly}
        showYearPicker={showYearPicker}
        minTime={minTime}
        maxTime={maxTime}
        calendarStartDay={1}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(param: any) => {
          switch (props.dateTimePickerType) {
            case DateTimePickerType.time:
            case DateTimePickerType.date:
            case DateTimePickerType.month:
            case DateTimePickerType.year:
            case DateTimePickerType.dateTime:
              setSelectedDate(param);
              props.onChange?.(param);
              break;
            case DateTimePickerType.dateRange:
              setStartDate(param[0]);
              setEndDate(param[1]);
              props.onChange?.(param);
              break;
          }
        }}
        onCalendarClose={() => {
          if (props.onCalendarClose) props.onCalendarClose();
        }}
        onCalendarOpen={() => {
          if (props.onCalendarOpen) props.onCalendarOpen();
        }}
        // renderDayContents={(dayOfMonth: number, date?: Date | undefined) =>
        //   renderDayContents(dayOfMonth, date)
        // }
      />
    </div>
  );
};

export default DateTimePicker;
