import { useEffect, useState } from "react";
import "./App.scss";
import CommonUtils from "./common/commonUtils";

import { Size } from "./common/commonConst";
import colors from "./common/theme/colors.json";
import fonts from "./common/theme/fonts.json";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./common/store/store";

import Modal from "./common/components/modal/modal";
import ModalTest from "./modalTest/modalTest";

function App() {
  const userEmail = useSelector(
    (state: RootState) => state.googleUserInfo.email
  );
  const dispatch = useDispatch();
  useEffect(() => {
    CommonUtils.loadColors(colors);
    CommonUtils.loadFonts(fonts);
  });

  const [show, setShow] = useState(true);

  const [modalTestData, setModalTestData] = useState<{ [key: string]: any }>({ email: "Pranshu" });
  const modalTestRef = {};
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal
        yesBtnText="yes"
        noBtnText="no"
        isLoading={true}
        size={Size.small}
        title="Title"
        onClose={() => setShow(false)}
        show={show}
        onYes={() => console.log("Yes")}
        onNo={() => console.log("No")}
      >
        <ModalTest
          modalData={modalTestData}
          modalComponentRef={modalTestRef}
          onModalDataChange={(key: string, val: any) => {
            modalTestData[key] = val;
            setModalTestData(Object.assign({}, modalTestData));
          }}
        ></ModalTest>
      </Modal>
    </div>
  );
}

export default App;
