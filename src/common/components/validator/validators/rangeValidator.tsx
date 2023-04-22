import { BaseValidator } from "../baseValidator";

export class RangeValidator implements BaseValidator {
  errMsg: string;
  validate: (value: any) => boolean;
  constructor(min: number, max: number) {
    this.errMsg = `This field must be between ${min} and ${max}`;
    this.validate = (value: any) => {
      if (value === undefined || value === null || value === "") {
        return false;
      }
      switch (typeof value) {
        case "number":
          if (value < min || value > max) return false;
          break;
        default:
          break;
      }
      return true;
    };
  }
}
