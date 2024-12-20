import chroma from 'chroma-js';
import { ReactNode } from 'react';
import Select, { FormatOptionLabelMeta, StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';

import TranslatedText from '../translatedText/translatedText';
import { IBaseControlParam } from '../iControl';

export interface ISelectFieldOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface ISelectFieldParams extends IBaseControlParam {
  isCreatable?: boolean;
  options: ISelectFieldOption[];
  placeholder?: string;
  classNamePrefix?: string;
  isLoading?: boolean;
  isClearable?: boolean;
  isRtl?: boolean;
  isSearchable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  maxMenuHeight?: number;
  isMulti?: boolean;
  defaultValue?: ISelectFieldOption | ISelectFieldOption[];
  formatOptionLabel?: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formatOptionLabelMeta: FormatOptionLabelMeta<any>
  ) => ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (e: any) => void;
}
const SelectField = (props: ISelectFieldParams) => {
  const style = getComputedStyle(document.body);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme = (_theme: any) => {
    return {
      ..._theme,
      borderRadius: 4,
      colors: {
        ..._theme.colors,
        primary: style.getPropertyValue('--color-accent'),
      },
      spacing: {
        ..._theme.spacing,
        baseUnit: 4,
        controlHeight: 34,
        menuGutter: 8,
      },
    };
  };
  const colorStyles: StylesConfig<ISelectFieldOption, boolean> = {
    control: styles => ({
      ...styles,
      backgroundColor: style.getPropertyValue('--color-white'),
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      const color = chroma(style.getPropertyValue('--color-accent'));
      return {
        ...styles,
        backgroundColor: isSelected
          ? style.getPropertyValue('--color-accent')
          : isFocused
          ? color.alpha(0.5).css()
          : style.getPropertyValue('--color-white'),
        color:
          isSelected || isFocused
            ? style.getPropertyValue('--color-white')
            : style.getPropertyValue('--color-base'),
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    multiValue: (styles, _) => {
      return {
        ...styles,
      };
    },
    // eslint-disable-next-line no-empty-pattern
    multiValueLabel: (styles, {}) => ({
      ...styles,
      color: style.getPropertyValue('--color-accent'),
      backgroundColor: style.getPropertyValue('--color-white'),
      border: '1px solid ' + style.getPropertyValue('--color-accent'),
      fontSize: '1.4rem',
      ':hover': {
        color: style.getPropertyValue('--color-white'),
        backgroundColor: style.getPropertyValue('--color-accent-hover'),
      },
    }),
    // eslint-disable-next-line no-empty-pattern
    multiValueRemove: (styles, {}) => ({
      ...styles,
      color: style.getPropertyValue('--color-white'),
      backgroundColor: style.getPropertyValue('--color-accent'),
      ':hover': {
        color: style.getPropertyValue('--color-white'),
        backgroundColor: style.getPropertyValue('--color-additional-warning'),
        cursor: 'pointer',
      },
    }),
  };
  if (props.isCreatable)
    return (
      <CreatableSelect
        isMulti={props.isMulti}
        closeMenuOnSelect={false}
        maxMenuHeight={props.maxMenuHeight}
        components={props.components}
        options={props.options}
        className={props.className}
        classNamePrefix={props.classNamePrefix ?? 'creatableSelect'}
        defaultValue={props.defaultValue}
        isDisabled={props.disabled}
        isLoading={props.isLoading}
        isClearable={props.isClearable}
        isRtl={props.isRtl}
        isSearchable={props.isSearchable}
        name={props.id}
        onChange={e => props.onChange?.(e)}
        isOptionDisabled={option => option.isDisabled}
        placeholder={
          props.placeholder ? <TranslatedText id={props.placeholder} /> : ''
        }
        value={props.value}
        formatOptionLabel={props.formatOptionLabel}
        theme={theme}
        menuPlacement="auto"
        styles={colorStyles}
      />
    );
  else
    return (
      <Select
        styles={colorStyles}
        isMulti={props.isMulti}
        maxMenuHeight={props.maxMenuHeight}
        components={props.components}
        options={props.options}
        className={props.className}
        classNamePrefix={props.classNamePrefix ?? 'select'}
        defaultValue={props.defaultValue}
        isDisabled={props.disabled}
        isLoading={props.isLoading}
        isClearable={props.isClearable}
        isRtl={props.isRtl}
        isSearchable={props.isSearchable}
        name={props.id}
        onChange={e => props.onChange?.(e)}
        isOptionDisabled={option => option.isDisabled}
        placeholder={
          props.placeholder ? <TranslatedText id={props.placeholder} /> : ''
        }
        value={props.value}
        formatOptionLabel={props.formatOptionLabel}
        theme={theme}
        menuPlacement="auto"
      />
    );
};

export default SelectField;
