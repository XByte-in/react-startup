import { useEffect } from "react";
import "./App.scss";
import { CommonUtils } from "./common/commonUtils";
// import Icon from "./common/components/icon/icon";
// import { Icons, IconSize } from "./common/pictures";

import colors from "./theme/colors.json";
import fonts from "./theme/fonts.json"
function App() {
  useEffect(() => {
    CommonUtils.loadColors(colors);
    CommonUtils.loadFonts(fonts);
  });
  return (
    <div>
      <label className="flow-title">test</label>
    </div>
  );
}

export default App;
