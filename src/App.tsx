import { useEffect } from "react";
import "./App.scss";
import { CommonUtils } from "./common/commonUtils";
import Image from "./common/components/image/image";
import Icon from "./common/components/icon/icon";
import { Icons, IconSize, Images } from "./common/pictures";

import colors from "./theme/colors.json";
import fonts from "./theme/fonts.json";
function App() {
  useEffect(() => {
    CommonUtils.loadColors(colors);
    CommonUtils.loadFonts(fonts);
  });
  return <Image imageName={Images.hibiscus} className="test"></Image>;
}

export default App;
