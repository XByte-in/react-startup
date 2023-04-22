import { BaseValidator } from "./baseValidator";
export class Validator {
  private validators: { [key: string]: Array<BaseValidator> } = {};
  constructor(validators: { [key: string]: Array<BaseValidator> }) {
    this.validators = validators;
  }
  validate() {
    let errMsg = "";
    for (const key in this.validators) {
      if (this.validators.hasOwnProperty(key)) {
        const element = this.validators[key];
        for (let i = 0; i < element.length; i++) {
          const validator = element[i];
          if (!validator.validate(key)) {
            errMsg = validator.errMsg;
            break;
          }
        }
      }
    }
    return errMsg;
  }
}
