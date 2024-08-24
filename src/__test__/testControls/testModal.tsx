import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Size, Type } from '../../common/const';
import Button from '../../common/controls/button/button';
import Modal, { IModalParams } from '../../common/controls/modal/modal';

const TestModal = () => {
  const [modalReq, setModalReq] = useState<IModalParams>({ show: false });
  const closeModal = () => {
    setModalReq({ show: false });
  };
  const showModal = () => {
    setModalReq({
      show: true,
      modalData: {
        title: 'areYouSure',
        size: Size.small,
        onClose: () => setModalReq({ show: false }),
        isLoading: false,
        errMsg: [],
        yesBtn: {
          textId: 'yes',
          onClick: () => closeModal(),
        },
        children: (
          <div className="deleteAdmin">
            <FormattedMessage id="deletingAdmin" />
            <div>Test</div>
          </div>
        ),
        noBtn: {
          textId: 'no',
          onClick: () => closeModal(),
        },
      },
    });
  };
  return (
    <>
      <Button
        textId="showModal"
        onClick={showModal}
        type={Type.primary}
        size={Size.medium}
      />
      <Modal show={modalReq.show} modalData={modalReq.modalData} />
    </>
  );
};

export default TestModal;
