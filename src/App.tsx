import { useEffect } from "react";
import "./App.scss";
import { CommonUtils } from "./common/commonUtils";
import Image from "./common/components/image/image";
import Icon from "./common/components/icon/icon";
import Label from "./common/components/label/label";
import { Icons, IconSize, Images } from "./common/pictures";

import colors from "./theme/colors.json";
import fonts from "./theme/fonts.json";
import { Size, Type } from "./common/commonConst";
import { TypographyConst } from "./common/scss/typographyConst";
function App() {
  useEffect(() => {
    CommonUtils.loadColors(colors);
    CommonUtils.loadFonts(fonts);
  });
  return <div>
    {/* <Image imageName={Images.hibiscus} className="test"></Image> */}
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.default}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.primary}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.secondary}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.danger}></Label>
  </div>;
}

export default App;
