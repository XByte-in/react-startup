import { BaseValidator } from "../baseValidator";

export class RequiredValidator implements BaseValidator {
  errMsg: string;
  validate: (value: any) => boolean;
  constructor() {
    this.errMsg = "This field is required";
    this.validate = (value: any) => {
      if (value === undefined || value === null || value === "") {
        return false;
      }
      switch (typeof value) {
        case "string":
          if (value.trim() === "") return false;
          break;
        case "number":
          if (value === 0) return false;
          break;
        case "object":
          if (value instanceof Array) if (value.length === 0) return false;
          if (value instanceof Date)
            if (value.toString() === "Invalid Date") return false;
          if (value instanceof Object)
            if (Object.keys(value).length === 0) return false;
          break;
        default:
          break;
      }
      return true;
    };
  }
}
