import { IBaseValidation } from '../baseValidation';

export class RangeValidation implements IBaseValidation {
  errMsg: string;
  validate: (value: any) => string[];
  constructor(
    min = -1,
    max = -1,
    errMsg = `This field must be between ${min} and ${max}`
  ) {
    this.errMsg = errMsg;
    this.validate = (value: any) => {
      if (value === undefined || value === null || value === '') {
        return [this.errMsg];
      }
      value = parseInt(value, 10);
      if (isNaN(value)) return [this.errMsg];
      if (min !== -1 && max !== -1)
        return min < value && value < max ? [] : [this.errMsg];
      if (min !== -1) return min < value ? [] : [this.errMsg];
      if (max !== -1) return value < max ? [] : [this.errMsg];
      return [];
    };
  }
}
