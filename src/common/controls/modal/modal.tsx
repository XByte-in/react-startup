import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Size, Type } from '../../const';
import Button from '../button/button';
import Mask from '../mask/mask';
import TranslatedText from '../translatedText/translatedText';

import './modal.scss';

export interface IModalButtonParams {
  textId: string;
  onClick: () => void;
}
export interface IModalDataParams {
  size: Size;
  title: string;
  onClose: () => void;
  yesBtn?: IModalButtonParams;
  noBtn?: IModalButtonParams;
  isLoading?: boolean;
  children?: React.ReactNode;
  errMsg?: Array<string>;
}
export interface IModalParams {
  show: boolean;
  modalData?: IModalDataParams;
}

const Modal = (props: IModalParams) => {
  if (!props.show) return null;
  const errMsg: Array<string> = [];

  props.modalData?.errMsg?.forEach(msg => {
    errMsg.push(`<pre>${msg}</pre>`);
  });
  return (
    <div className={`modal`}>
      {props.modalData?.isLoading && <Mask />}
      <div
        className={`size-${props.modalData?.size}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <span className="modal-title">
            <TranslatedText
              id={props.modalData ? props.modalData.title : 'Title'}
            />
          </span>
          <FontAwesomeIcon
            className={`modal-close disabled-${
              props.modalData?.isLoading ?? 'false'
            }`}
            icon={faSquareXmark}
            size="2xl"
            onClick={props.modalData?.onClose}
          />
        </div>
        <div className="modal-body">{props.modalData?.children}</div>
        {errMsg && errMsg.length > 0 && (
          <div
            className="modal-errMsg"
            dangerouslySetInnerHTML={{ __html: errMsg.join('') }}
          />
        )}
        {(props.modalData?.yesBtn || props.modalData?.noBtn) && (
          <div className="modal-footer">
            {props.modalData.yesBtn && (
              <Button
                className={`actionBtn disabled-${
                  props.modalData?.isLoading ?? 'false'
                }`}
                size={Size.medium}
                type={Type.primary}
                textId={props.modalData?.yesBtn?.textId || 'yes'}
                onClick={props.modalData?.yesBtn?.onClick}
              ></Button>
            )}
            {props.modalData.noBtn && (
              <Button
                className={`actionBtn disabled-${
                  props.modalData?.isLoading ?? 'false'
                }`}
                size={Size.medium}
                type={Type.secondary}
                textId={props.modalData?.noBtn?.textId || 'no'}
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
