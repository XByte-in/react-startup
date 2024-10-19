export enum Type {
  primary = 'primary',
  secondary = 'secondary',
  default = 'default',
  danger = 'danger',
}

export enum Size {
  small = 'small',
  medium = 'medium',
  default = 'default',
  large = 'large',
}

export enum DateTimePickerType {
  time,
  dateTime,
  date,
  dateRange,
  month,
  year,
}

export enum Permission {
  None = 0,
  View = 1,
  Edit = 2,
}

export enum JsonValueType {
  none,
  null,
  undefined,
  boolean,
  number,
  string,
  array,
  object,
  function,
}

export const STRING_CONSTRUCTOR = ''.constructor;
export const ARRAY_CONSTRUCTOR = [].constructor;
export const OBJECT_CONSTRUCTOR = {}.constructor;
