import { useEffect } from "react";
import "./App.scss";
import CommonUtils from "./common/commonUtils";
import Image from "./common/components/image/image";
import Icon from "./common/components/icon/icon";
import Label from "./common/components/label/label";
import { IconSize, Icons_16px, Icons_180px } from "./common/pictures/pictures";

import colors from "./theme/colors.json";
import fonts from "./theme/fonts.json";
import { Size, Type } from "./common/commonConst";
import { TypographyConst } from "./common/scss/typographyConst";
import GoogleSignIn from "./common/components/google/googleSignIn";
import GoogleSignOut from "./common/components/google/googleSignOut";
import Button from "./common/components/button/button";

import type { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, removeUseInfo } from "./store/userInfoSlice";

import jsonTest from "./jsonTest.json";
import JsonView, {createFormattedTable} from "./common/components/jsonView/jsonView";
function App() {
  const userEmail = useSelector((state: RootState) => state.userInfo.email);
  const dispatch = useDispatch();
  useEffect(() => {
    CommonUtils.loadColors(colors);
    CommonUtils.loadFonts(fonts);
  });

  const customFormatter = {
    app_assets: function (params:Array<any>) {      
      const columns = Object.keys(params[0])
      if (columns.length > 0)
        return createFormattedTable(columns, params)
      else <></>
    },
  };

  return (
    <div>
      <JsonView
        jsonObject={jsonTest}
        customFormatter={customFormatter}
      ></JsonView>
      {/* <Image imageName={Images.hibiscus} className="test"></Image> */}
      {/* <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.default}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.primary}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.secondary}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.danger}></Label> */}
      {/* {!userEmail &&
      <GoogleSignIn
        client_id="769780182132-m6qia6f13297q33tuda2otngdh8eqaik.apps.googleusercontent.com"
        auto_select={false}
        cancel_on_tap_outside={false}
        onSignIn={(params) => {
          console.log(params);
          dispatch(setUserInfo(params));
        }}
      />
      }
      {userEmail &&
        <GoogleSignOut
        onSignOut={(result) => {
          console.log(result);
          dispatch(removeUseInfo());
        }}
      />
      } */}
      {/* <Icon iconName={Icons_180px.coming_soon} className="test" iconSize={IconSize._180}></Icon> */}
      {/* <Icon iconName={Icons_180px.coming_soon} className="test-image" ></Icon> */}
      {/* <table>
        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.primary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.primary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.primary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.primary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.primary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.primary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.primary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.primary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.primary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.primary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.primary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.primary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.primary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.primary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.primary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.primary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.secondary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.secondary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.secondary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.secondary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.secondary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.secondary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.secondary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.secondary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.secondary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.secondary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.secondary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.secondary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.secondary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.secondary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.secondary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.secondary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>
      </table> */}
    </div>
  );
}

export default App;
