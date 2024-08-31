import { IBaseValidation } from "../baseValidation";

export class RegExpValidation implements IBaseValidation {
  errMsg: string;
  validate: (value: any) => string[];
  constructor(regExp: string, errMsg = "This field is invalid") {
    this.errMsg = errMsg;
    this.validate = (value: any) => {
      if (value === undefined || value === null || value === "") {
        return [this.errMsg];
      }
      if (typeof value !== "string") {
        return [this.errMsg];
      }
      const reg = new RegExp(regExp);
      return reg.test(value) ? [] : [this.errMsg];
    };
  }
}
