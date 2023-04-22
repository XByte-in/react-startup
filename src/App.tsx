import { useEffect, useState } from "react";
import "./App.scss";
import CommonUtils from "./common/commonUtils";

import { Size } from "./common/commonConst";
import colors from "./common/theme/colors.json";
import fonts from "./common/theme/fonts.json";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./common/store/store";

import Modal, { IModalParams } from "./common/components/modal/modal";
import TestModal from "./testModal/testModal";

function App() {
  const userEmail = useSelector(
    (state: RootState) => state.googleUserInfo.email
  );
  const dispatch = useDispatch();
  useEffect(() => {
    CommonUtils.loadColors(colors);
    CommonUtils.loadFonts(fonts);
  });

  const [modalReq, setModalReq] = useState<IModalParams>({ show: false });
  const modalTestRef = {
    validate: (data: { [key: string]: any }) => "",
  };
  const testModalData: { [key: string]: any } = {
    email: "Pranshu",
    mobile: "1234567890",
  };
  const onYes = () => {
    const errMsg = modalTestRef.validate(testModalData);
    console .log(errMsg);
    if (errMsg && errMsg.trim().length > 0) {      
      setupTestModal(true, false, errMsg);
    }
    else {
    setupTestModal(true, true); // start showing loader
      setTimeout(() => { // mimc api call
        setupTestModal(true, false, "Something went wrong after api call");
      }, 5000);
    }
  };
  const showTestModalDetail = () => {
    setupTestModal(true, false);
  };
  const setupTestModal = (
    show: boolean,
    isLoading: boolean,
    errMsg?: string
  ) => {
    setModalReq({
      show: show,
      modalData: {
        title: "title",
        size: Size.small,
        onClose: () => setModalReq({ show: false }),
        isLoading: isLoading,
        errMsg: errMsg,
        yesBtn: {
          btnText: "yes",
          onClick: () => onYes(),
        },
        noBtn: {
          btnText: "no",
          onClick: () => console.log("No"),
        },
        children: (
          <TestModal
            modalData={testModalData}
            modalComponentRef={modalTestRef}
            onModalDataChange={(key: string, val: any) => {
              testModalData[key] = val;
            }}
          ></TestModal>
        ),
      },
    });
  };

  return (
    <div>
      <button onClick={() => showTestModalDetail()}>Show Modal</button>
      <Modal show={modalReq.show} modalData={modalReq.modalData} />
    </div>
  );
}

export default App;
