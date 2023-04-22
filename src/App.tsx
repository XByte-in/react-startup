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

  const [email, setEmail] = useState("Pranshu.Gupta@Bluestacks.com");
  const [modalReq, setModalReq] = useState<IModalParams>({ show: false });
  const modalTestRef = {};
  const modalTestData: { [key: string]: any } = {
    email: "Pranshu",
  };
  function showTestModalDetail() {
    function startLoader() {
      setModalReq({
        show: true,
        modalData: {
          title: "title",
          size: Size.small,
          onClose: () => setModalReq({ show: false }),
          isLoading: true,
          yesBtn: {
            btnText: "yes",
            onClick: () => startLoader(),
          },
          noBtn: {
            btnText: "no",
            onClick: () => console.log("No"),
          },
          children: (
            <TestModal
              modalData={modalTestData}
              modalComponentRef={modalTestRef}
              onModalDataChange={(key: string, val: any) => {
                modalTestData[key] = val;
                console.log(modalTestData);
              }}
            ></TestModal>
          ),
        },
      });
    }
    setModalReq({
      show: true,
      modalData: {
        title: "title",
        size: Size.small,
        onClose: () => setModalReq({ show: false }),
        isLoading: false,
        yesBtn: {
          btnText: "yes",
          onClick: () => startLoader(),
        },
        noBtn: {
          btnText: "no",
          onClick: () => console.log("No"),
        },
        children: (
          <TestModal
            modalData={modalTestData}
            modalComponentRef={modalTestRef}
            onModalDataChange={(key: string, val: any) => {
              modalTestData[key] = val;
              console.log(modalTestData);
            }}
          ></TestModal>
        ),
      },
    });
  }
  return (
    <div>
      <button onClick={() => showTestModalDetail()}>Show Modal</button>
      <Modal show={modalReq.show} modalData={modalReq.modalData} />
    </div>
  );
}

export default App;
