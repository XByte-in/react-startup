export interface IBaseValidation {
  errMsg: string;
  objectKey?: string;
  validate: (value: any) => string[];
}
