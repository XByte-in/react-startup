import { useEffect } from "react";
import "./App.scss";
import CommonUtils from "./common/commonUtils";
import Image from "./common/components/image/image";
import Icon from "./common/components/icon/icon";
import Label from "./common/components/label/label";
import { IconSize, Icons_16px, Icons_180px } from "./common/pictures/pictures";

import colors from "./common/theme/colors.json";
import fonts from "./common/theme/fonts.json";
import { Size, Type } from "./common/commonConst";
import { TypographyConst } from "./common/scss/typographyConst";
import GoogleSignIn from "./common/components/google/googleSignIn";
import GoogleSignOut from "./common/components/google/googleSignOut";
import Button from "./common/components/button/button";

import type { RootState } from "./common/store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setGoogleUserInfo,
  removeGoogleUserInfo,
} from "./common/components/google/googleUserInfoSlice";

import jsonTest from "./testData/jsonTest.json";
import leftJson from "./testData/left.json";
import rightJson from "./testData/right.json";
import JsonView, {
  getFormattedString,
  arrayToFormattedTable,
  ICustomFormatterParam,
} from "./common/components/jsonView/jsonView";
import GoogleProfile from "./common/components/google/googleProfile/googleProfile";
import JsonDiff from "./common/components/jsonDiff/jsonDiff";
import SelectField from "./common/components/selectField/selectField";
function App() {
  const userEmail = useSelector(
    (state: RootState) => state.gooleUserInfo.email
  );
  const dispatch = useDispatch();
  useEffect(() => {
    CommonUtils.loadColors(colors);
    CommonUtils.loadFonts(fonts);
  });

  const customFormatter = {
    app_assets: function (params: ICustomFormatterParam) {
      return arrayToFormattedTable(params);
    },
    "app_assets.[*].data": function (params: ICustomFormatterParam) {
      return arrayToFormattedTable(params);
    },
    comments: function (params: ICustomFormatterParam) {
      return arrayToFormattedTable(params);
    },
    "comments.[*].commented_at": function (params: ICustomFormatterParam) {
      return getFormattedString(
        params.parentKey,
        CommonUtils.jsToDateString(new Date(params.data.$date))
      );
    },
    created_at: function (params: ICustomFormatterParam) {
      return getFormattedString(
        params.parentKey,
        CommonUtils.jsToDateString(new Date(params.data))
      );
    },
    modified_at: function (params: ICustomFormatterParam) {
      return getFormattedString(
        params.parentKey,
        CommonUtils.jsToDateString(new Date(params.data))
      );
    },
  };
  const defaultSelectText = "Please select an option";
  const countryList = [
    { id: 1, name: "Australia" },
    { id: 2, name: "Brazil" },
    { id: 3, name: "China" },
    { id: 4, name: "Denmark" },
    { id: 5, name: "Egypt" },
    { id: 6, name: "Finland" },
    { id: 7, name: "Ghana" },
    { id: 8, name: "Hungary" },
    { id: 9, name: "India" },
    { id: 10, name: "Japan" },
  ];
  return (
    <div>
      <SelectField
        className={TypographyConst.body_medium_regular}
        options={[
          { label: "label 1", value: "value 1" },
          { label: "label 2", value: "value 2" },
          { label: "label 3", value: "value 3" },
          { label: "label 4", value: "value 4" },
          { label: "label 5", value: "value 5" },
          { label: "label 6", value: "value 6" },
          { label: "label 7", value: "value 7" },
          { label: "label 8", value: "value 8" },
          { label: "label 9", value: "value 9" },
          { label: "label 10", value: "value 10" },
          { label: "label 11", value: "value 11" },
          { label: "label 12", value: "value 11" },
          { label: "label 13", value: "value 12" },
          { label: "label 14", value: "value 13" },
          { label: "label 15", value: "value 14" },
          { label: "label 16", value: "value 15" },
          { label: "label 17", value: "value 16" },
          { label: "label 18", value: "value 17" },
          { label: "label 19", value: "value 18" },
          { label: "label 20", value: "value 19" },
          { label: "label 21", value: "value 20" },
          { label: "label 22", value: "value 21" },
          { label: "label 23", value: "value 23" },
          { label: "label 24", value: "value 24" },
          { label: "label 25", value: "value 25" },
        ]}
      />
      {/* <JsonDiff
        leftData={{ heading: "Left Heading", jsonData: leftJson }}
        rightData={{ heading: "Right Heading", jsonData: rightJson }}
      ></JsonDiff> */}
      {/* <JsonView
        jsonObject={jsonTest}
        customFormatter={customFormatter}
      ></JsonView> */}
      {/* <Image imageName={Images.hibiscus} className="test"></Image> */}
      {/* <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.default}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.primary}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.secondary}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.danger}></Label> */}
      {/* {!userEmail && (
        <GoogleSignIn
          client_id="769780182132-m6qia6f13297q33tuda2otngdh8eqaik.apps.googleusercontent.com"
          auto_select={true}
          cancel_on_tap_outside={false}
          onSignIn={(params) => {
            console.log(params);
            dispatch(setGoogleUserInfo(params));
          }}
        />
      )}
      {userEmail && (
        <GoogleProfile/>
      )} */}
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
