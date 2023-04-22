import { BaseValidator } from "./baseValidator";
export class Validator {
  private dataValidators: { [key: string]: Array<BaseValidator> } = {};
  constructor(dataValidators: { [key: string]: Array<BaseValidator> }) {
    this.dataValidators = dataValidators;
  }
  validate(data: { [key: string]: any }) {
    let errMsgs = [];
    for (const key in this.dataValidators) {
      if (data.hasOwnProperty(key)) {
        const keyValidators = this.dataValidators[key];
        for (const validator of keyValidators) {
          const isValid = validator.validate(data[key]);
          if (!isValid) {
            errMsgs.push(`<pre>${validator.errMsg}</pre>`);
            break;
          }
        }
      }
    }
    return errMsgs.join("");
  }
}
