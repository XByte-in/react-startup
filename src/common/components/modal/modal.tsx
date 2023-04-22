import React from "react";
import { Size, Type } from "../../commonConst";
import { IconSize, Icons_40px } from "../../pictures/pictures";
import Button from "../button/button";
import Icon from "../icon/icon";
import "./modal.scss";
import FormattedText from "../formattedText/formattedText";
import Mask from "../mask/mask";

export interface IModalButtonParams {
  btnText: string;
  onClick: () => void;
}
export interface IModalDataParams {
  size: Size;
  title: string;
  onClose: () => void;
  yesBtn?: IModalButtonParams;
  noBtn?: IModalButtonParams;
  isLoading?: boolean;
  children: React.ReactNode;
}
export interface IModalParams {
  show: boolean;
  modalData?: IModalDataParams;
}

const Modal = (props: IModalParams) => {
  if (!props.show) return null;
  return (
    <div className={`modal`}>
      {props.modalData?.isLoading && <Mask />}
      <div
        className={`size-${props.modalData?.size}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">
          <span className="title">
            <FormattedText
              text={props.modalData ? props.modalData.title : "Title"}
            />
          </span>
          <Icon
            iconName={Icons_40px.close}
            className={`close disabled-${
              props.modalData?.isLoading || "false"
            }`}
            iconSize={IconSize._32}
            onClick={props.modalData?.onClose}
          ></Icon>
        </div>
        <div className="body">{props.modalData?.children}</div>
        {props.modalData &&
          (props.modalData.yesBtn || props.modalData.noBtn) && (
            <div className="footer">
              {props.modalData.yesBtn && (
                <Button
                  className={`actionBtn disabled-${
                    props.modalData?.isLoading || "false"
                  }`}
                  size={Size.medium}
                  type={Type.primary}
                  btnText={props.modalData?.yesBtn?.btnText || "yes"}
                  onClick={props.modalData?.yesBtn?.onClick}
                ></Button>
              )}
              {props.modalData.noBtn && (
                <Button
                  className={`actionBtn disabled-${
                    props.modalData?.isLoading || "false"
                  }`}
                  size={Size.medium}
                  type={Type.secondary}
                  btnText={props.modalData?.noBtn?.btnText || "no"}
                  onClick={props.modalData?.noBtn?.onClick}
                  disabled={props.modalData?.isLoading}
                ></Button>
              )}
            </div>
          )}
      </div>
    </div>
  );
};

export default Modal;
