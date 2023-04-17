import { useEffect, useState } from "react";
import "./App.scss";
import CommonUtils from "./common/commonUtils";

import { Size } from "./common/commonConst";
import colors from "./common/theme/colors.json";
import fonts from "./common/theme/fonts.json";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./common/store/store";

import Modal from "./common/components/modal/modal";

function App() {
  const userEmail = useSelector(
    (state: RootState) => state.googleUserInfo.email
  );
  const dispatch = useDispatch();
  useEffect(() => {
    CommonUtils.loadColors(colors);
    CommonUtils.loadFonts(fonts);
  });

  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal
        yesBtnText="Yes"
        noBtnText="No"
        isLoading={false}
        size={Size.medium}
        title="My Modal"
        onClose={() => setShow(false)}
        show={show}
        onYes={()=>console.log("Yes")}
        onNo={()=>console.log("No")}
      >
        <p>This is modal body</p>
      </Modal>
      
    </div>
  );
}

export default App;