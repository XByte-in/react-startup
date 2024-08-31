import { IBaseValidation } from './baseValidation';

export interface IValidator {
  dataValidators: { [key: string]: Array<IBaseValidation | IValidator> };
  validate: (data: { [key: string]: any }) => string[];
}

export class Validator implements IValidator {
  dataValidators: { [key: string]: Array<IBaseValidation | IValidator> } = {};
  validate: (data: { [key: string]: any }) => string[];
  constructor(dataValidators: {
    [key: string]: Array<IBaseValidation | IValidator>;
  }) {
    this.dataValidators = dataValidators;
    this.validate = (data: { [key: string]: any }): string[] => {
      let errMsgs: string[] = [];
      for (const key in this.dataValidators) {
        const validators = this.dataValidators[key];
        for (const validator of validators) {
          const _errMsgs: string[] = validator.validate(data[key]);
          if (_errMsgs && _errMsgs.length > 0) {
            errMsgs = errMsgs.concat(_errMsgs);
            break;
          }
        }
      }
      return errMsgs;
    };
  }
}
