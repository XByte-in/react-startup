import { useEffect, useState } from "react";
import "./App.scss";
import { Size } from "./common/commonConst";
import CommonUtils from "./common/commonUtils";
import Modal, { IModalParams } from "./common/components/modal/modal";
import colors from "./common/theme/colors.json";
import fonts from "./common/theme/fonts.json";
import TestModal from "./testModal/testModal";
import SelectField from "./common/components/selectField/selectField";
import { TypographyConst } from "./common/scss/typographyConst";
import DateTimePicker, { DateTimePickerType } from "./common/components/dateTimePicker/dateTimePicker";

function App() {
  useEffect(() => {
    CommonUtils.loadColors(colors);
    CommonUtils.loadFonts(fonts);
  });

  const [modalReq, setModalReq] = useState<IModalParams>({ show: false });
  const modalTestRef = { validate: () => [] };
  let testModalData: { [key: string]: any } = {
    email: "Pranshu",
    mobile: "123456789",
  };
  const onYes = () => {
    const errMsgs = modalTestRef.validate();
    if (errMsgs.length > 0) {
      setupTestModal(true, false, errMsgs);
    } else {
      setupTestModal(true, true); // start showing loader
      setTimeout(() => {
        // mimic api call
        setupTestModal(true, false, ["Something went wrong after api call"]);
      }, 1000);
    }
  };
  const showTestModalDetail = () => {
    setupTestModal(true, false);
  };
  const setupTestModal = (
    show: boolean,
    isLoading: boolean,
    errMsg?: Array<string>
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
            onModalDataChange={(data: { [key: string]: any }) => {
              testModalData = data;
            }}
          ></TestModal>
        ),
      },
    });
  };

  const options =[
    { label: "label 1", value: "value 1" },
    { label: "label 2", value: "value 2" },
    { label: "label 3", value: "value 3" },
  ]

  const defaultValue = [
    { label: "label 1", value: "value 1" },
    { label: "label 2", value: "value 2" }]
  return (
    <div>
      <SelectField isMulti={true}
        className={TypographyConst.body_medium_regular}
        options={options}
        defaultValue={defaultValue}
      />
      {/* <button onClick={() => showTestModalDetail()}>Show Modal</button>
      <Modal show={modalReq.show} modalData={modalReq.modalData} />
      <SelectField
        className={TypographyConst.body_medium_regular}
        value={{ label: "label 2", value: "value 2" }}
        options={[
          { label: "label 1", value: "value 1" },
          { label: "label 2", value: "value 2" },
        ]}
      /> */}
    </div>
  );
}

export default App;
