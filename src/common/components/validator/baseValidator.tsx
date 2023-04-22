export interface BaseValidator {
    errMsg: string;
    validate: (value: any) => boolean;
}