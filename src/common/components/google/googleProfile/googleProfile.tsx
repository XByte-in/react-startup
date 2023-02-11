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
  const googleUserInfo = useSelector(
    (state: RootState) => state.googleUserInfo
  );
  return (
    <div className="profile">
      <Icon
        className="profile-logo"
        iconName={googleUserInfo.picture}
        iconSize={IconSize._40}
      />
      <div className="profile-info">
        <span className="user-name">{googleUserInfo.name}</span>
        <span className="user-email">{googleUserInfo.email}</span>
      </div>
      <GoogleSignOut
        className="profile-logout"
        showIconOnly={true}
        onSignOut={(result) => {
          dispatch(removeGoogleUserInfo());
        }}
      />
    </div>
  );
};

export default GoogleProfile;
