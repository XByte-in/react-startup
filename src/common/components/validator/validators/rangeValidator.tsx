import { BaseValidator } from "../baseValidator";

export class RangeValidator implements BaseValidator {
  errMsg: string;
  validate: (value: any) => boolean;
  constructor(
    min: number = -1,
    max: number = -1,
    errMsg: string = `This field must be between ${min} and ${max}`
  ) {
    this.errMsg = errMsg;
    this.validate = (value: any) => {
      if (value === undefined || value === null || value === "") {
        return false;
      }
      value = parseInt(value, 10);
      if (isNaN(value)) return false;
      if (min !== -1 && max !== -1) return min < value && value < max;
      if (min !== -1) return min < value;
      if (max !== -1) return value < max;
      return true;
    };
  }
}
