import { BaseValidator } from "./baseValidator";
export class Validator {
  private validators: { [key: string]: Array<BaseValidator> } = {};
  constructor(validators: { [key: string]: Array<BaseValidator> }) {
    this.validators = validators;
  }
  validate(data: { [key: string]: any }) {
    let errMsg = "";
    for (const key in this.validators) {
      if (this.validators.hasOwnProperty(key)) {
        const validators = this.validators[key];
        for (const validator of validators) {
          const isValid = validator.validate(data[key]);
          if (!isValid) {
            errMsg = validator.errMsg;
          }
        }
      }
    }
    return errMsg;
  }
}
