import { ISelectFieldOption } from '../selectField/selectField';

export interface IModalComponentParams {
  modalData: {
    [key: string]:
      | string
      | number
      | boolean
      | ISelectFieldOption
      | Array<ISelectFieldOption>;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onModalDataChange?: (data: { [key: string]: any }) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modalComponentRef?: any;
}

export enum ModalMode {
  Add,
  Update,
}
