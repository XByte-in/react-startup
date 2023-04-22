export interface IModalComponentParams {
  modalData: { [key: string]: any };
  onModalDataChange?: (key: string, val: any) => void;
  modalComponentRef?: any;
}
