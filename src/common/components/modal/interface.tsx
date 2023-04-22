export interface IModalComponentParams {
  modalData: { [key: string]: any };
  onModalDataChange?: (data: { [key: string]: any }) => void;
  modalComponentRef?: any;
}
