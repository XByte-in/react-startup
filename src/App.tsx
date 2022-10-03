import { useEffect } from "react";
import "./App.scss";
import CommonUtils from "./common/commonUtils";
import Image from "./common/components/image/image";
import Icon from "./common/components/icon/icon";
import Label from "./common/components/label/label";
import { Icons, IconSize, Images } from "./common/pictures";

import colors from "./theme/colors.json";
import fonts from "./theme/fonts.json";
import { Size, Type } from "./common/commonConst";
import { TypographyConst } from "./common/scss/typographyConst";
import GoogleSignIn from "./common/components/google/googleSignIn";
import GoogleSignOut from "./common/components/google/googleSignOut";
function App() {
  useEffect(() => {
    CommonUtils.loadColors(colors);
    CommonUtils.loadFonts(fonts);
  });
  return (
    <div>
      {/* <Image imageName={Images.hibiscus} className="test"></Image> */}
      {/* <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.default}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.primary}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.secondary}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.danger}></Label> */}
      <GoogleSignIn
        client_id="769780182132-m6qia6f13297q33tuda2otngdh8eqaik.apps.googleusercontent.com"
        auto_select={false}
        cancel_on_tap_outside={false}
        onSignIn={(params) => console.log(params)}
      />
      <GoogleSignOut onSignOut={() => console.log("signedout")}/>
    </div>
  );
}

export default App;
