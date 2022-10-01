import { useEffect } from "react";
import "./App.scss";
import { CommonUtils } from "./common/commonUtils";
import Icon from "./common/components/icon/icon";
import { Icons, IconSize } from "./common/pictures";

import colors from "./theme/colors.json";
// import fonts from "./theme/fonts.json"
function App() {
  useEffect(() => {
    CommonUtils.loadColors(colors);
  });
  return (
    <div className="app">
      <Icon iconName={Icons.hibiscus} iconSize={IconSize._16} />
    </div>
  );
}

export default App;
