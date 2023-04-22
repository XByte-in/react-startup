import React from "react";
import { Size, Type } from "../../commonConst";
import { IconSize, Icons_40px } from "../../pictures/pictures";
import Button from "../button/button";
import Icon from "../icon/icon";
import "./modal.scss";
import FormattedText from "../formattedText/formattedText";

export interface IModalParams {
  show: boolean;
  onClose?: () => void;
  size?: Size;
  title?: string;
  children?: React.ReactNode;
  onYes?: () => void;
  yesBtnText?: string;
  onNo?: () => void;
  noBtnText?: string;
  isLoading?: boolean;
}

const Modal = (props: IModalParams) => {
  if (!props.show) return null;
  return (
    <div className={`modal`}>
      <div
        className={`size-${props.size}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">
          <span className="title">
            <FormattedText text={props.title ? props.title : "Title"} />
          </span>
          <Icon
            iconName={Icons_40px.close}
            className="close"
            iconSize={IconSize._32}
            onClick={props.onClose}
          ></Icon>
        </div>
        <div className="body">{props.children}</div>
        {props.onYes || props.onNo ? (
          <div className="footer">
            {props.onYes && (
              <Button
                className="actionBtn"
                size={Size.medium}
                type={Type.primary}
                btnText={props.yesBtnText || "yes"}
                onClick={props.onYes}
                isLoading={props.isLoading}
              ></Button>
            )}
            {props.onNo && (
              <Button
                className="actionBtn"
                size={Size.medium}
                type={Type.secondary}
                btnText={props.noBtnText || "no"}
                onClick={props.onNo}
              ></Button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
