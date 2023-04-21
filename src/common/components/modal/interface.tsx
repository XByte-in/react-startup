export interface IModalComponentParams {
  modalComponentRef: any;
  modalData: {[key: string]: any}
  onModalDataChange: (key: string, val: any) => void;
}