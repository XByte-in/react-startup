import { IBaseValidation } from "../baseValidation";

export class RequiredValidation implements IBaseValidation {
  errMsg: string;
  validate: (value: any) => string[];

  constructor(errMsg = "This field is required") {
    this.errMsg = errMsg;
    this.validate = (value: any) => {
      if (value === undefined || value === null || value === "") {
        return [this.errMsg];
      }
      switch (typeof value) {
        case "string":
          if (value.trim() === "") return [this.errMsg];
          break;
        case "number":
          if (value === 0) return [this.errMsg];
          break;
        case "object":
          if (value instanceof Array)
            if (value.length === 0) return [this.errMsg];
          if (value instanceof Date)
            if (value.toString() === "Invalid Date") return [this.errMsg];
          if (value instanceof Object)
            if (Object.keys(value).length === 0) return [this.errMsg];
          break;
        default:
          break;
      }
      return [];
    };
  }
}
