import { ISelectFieldOption } from '../selectField/SelectField';

export enum ModalMode {
  Add,
  Update,
}
export interface IModalComponentParams {
  modalData: {
    [key: string]:
      | string
      | number
      | boolean
      | ISelectFieldOption
      | Array<ISelectFieldOption>;
  };
  mode: ModalMode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onModalDataChange?: (data: { [key: string]: any }) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modalComponentRef?: any;
}
