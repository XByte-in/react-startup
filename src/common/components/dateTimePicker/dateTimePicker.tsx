import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./dateTimePicker.scss";
export enum DateTimePickerType {
  date,
  dateRange,
  time,
}

interface IDateTimePickerParams {
  dateTimePickerType: DateTimePickerType;
  selectedDate?: Date;

  selectsRange?: boolean;
  startDate?: Date;
  endDate?: Date;

  minValue?: Date;
  maxValue?: Date;

  showTimeSelect?: boolean;

  isClearable?: boolean;
  placeholderText?: string;
  onCalendarClose?: () => void;
  onCalendarOpen?: () => void;
}
const DateTimePicker = (props: IDateTimePickerParams) => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const [selectsRange, setSelectsRange] = useState<boolean>();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const [minDate, setMinDate] = useState<Date>();
  const [maxDate, setMaxDate] = useState<Date>();

  // const [minTime, setMinTime] = useState<Date>();
  // const [maxTime, setMaxTime] = useState<Date>();

  const [showTimeSelect, setShowTimeSelect] = useState<boolean>();

  useEffect(() => {
    switch (props.dateTimePickerType) {
      case DateTimePickerType.date:
        if (props.selectedDate != null) setSelectedDate(props.selectedDate);
        if (props.minValue != null) setMinDate(props?.minValue);
        if (props.maxValue != null) setMaxDate(props?.maxValue);
        if (props.showTimeSelect != null)
          setShowTimeSelect(props?.showTimeSelect);
        break;
      case DateTimePickerType.dateRange:
        setSelectsRange(true);
        if (props.startDate != null) setStartDate(props?.startDate);
        if (props.endDate != null) setEndDate(props?.endDate);
        if (props.minValue != null) setMinDate(props?.minValue);
        if (props.maxValue != null) setMaxDate(props?.maxValue);
        // if (props.showTimeSelect != null) setShowTimeSelect(props?.showTimeSelect);
        break;
      case DateTimePickerType.time:
        // if (props.selectedDate != null) setSelectedDate(props.selectedDate);
        // if (props.minValue != null) setMinTime(props?.minValue);
        // if (props.maxValue != null) setMaxTime(props?.maxValue);
        break;
    }
  }, [props.dateTimePickerType]);

  const renderDayContents = (dayOfMonth: number, date?: Date | undefined) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return <span title={tooltipText}>{dayOfMonth}</span>;
  };
  return (
    <DatePicker
      dateFormat="dd/MMM/yyyy"
      isClearable={props.isClearable}
      placeholderText={props.placeholderText}
      selected={selectedDate}
      showTimeSelect={showTimeSelect}
      minDate={minDate}
      maxDate={maxDate}
      selectsRange={selectsRange}
      startDate={startDate}
      endDate={endDate}
      // minTime={minTime}
      // maxTime={maxTime}
      onChange={(param: any) => {
        switch (props.dateTimePickerType) {
          case DateTimePickerType.date:
            setSelectedDate(param);
            break;
          case DateTimePickerType.dateRange:
            setStartDate(param[0]);
            setEndDate(param[1]);
            break;
        }
      }}
      onCalendarClose={() => {
        if (props.onCalendarClose) props.onCalendarClose();
      }}
      onCalendarOpen={() => {
        if (props.onCalendarOpen) props.onCalendarOpen();
      }}
      renderDayContents={(dayOfMonth: number, date?: Date | undefined) =>
        renderDayContents(dayOfMonth, date)
      }
    />
  );
};

export default DateTimePicker;
