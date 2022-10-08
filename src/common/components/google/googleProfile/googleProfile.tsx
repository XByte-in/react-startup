import "./googleProfile.scss";

import type { RootState } from "../../../store/store";
import { useSelector, useDispatch } from "react-redux";
import GoogleSignOut from "../googleSignOut";
import { removeGoogleUserInfo } from "../googleUserInfoSlice";
import { IconSize } from "../../../pictures/pictures";
import Icon from "../../icon/icon";

interface IGoogleProfileParams {
  id?: string;
  className?: string;
  styleObj?: { [key: string]: {} };  
}

const GoogleProfile = (props: IGoogleProfileParams) => {
  const dispatch = useDispatch();
  const gooleUserInfo = useSelector((state: RootState) => state.gooleUserInfo);
  return (
    <div className="Profile">
      <Icon
        className="Profile-Logo"
        iconName={gooleUserInfo.picture}
        iconSize={IconSize._32}
      />
      <div className="Profile-Info">
        <span className="User-Name">{gooleUserInfo.name}</span>
        <span className="User-Email">{gooleUserInfo.email}</span>
      </div>
      <GoogleSignOut
        className="Profile-Logout"
        showIconOnly={true}
        onSignOut={(result) => {
          console.log(result);
          dispatch(removeGoogleUserInfo());
        }}
      />
    </div>
  );
};

export default GoogleProfile;
