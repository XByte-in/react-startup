import { Size, Type } from "../../commonConst";
import { IconSize, Icons_32px } from "../../pictures/pictures";
import Button from "../button/button";
import Icon from "../icon/icon";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface IGoogleSignOutParams {
  showIconOnly?: boolean;
  className?: string;
  onSignOut: (param: {}) => void;
}
const GoogleSignOut = (props: IGoogleSignOutParams) => {
  const googleUserEMail = useSelector(
    (state: RootState) => state.googleUserInfo.email
  );
  const revokeGsi = () => {
    if (!window.google) return;
    window.google.accounts.id.disableAutoSelect();
    window.google.accounts.id.revoke(googleUserEMail, (done: any) => {
      props.onSignOut(done);
    });
  };
  if (props.showIconOnly)
    return (
      <div className="g_id_signout" onClick={() => revokeGsi()}>
        <Icon
          className={props.className}
          iconName={Icons_32px.logout_32px}
          iconSize={IconSize._40}
        />
      </div>
    );
  else
    return (
      <div className="g_id_signout" onClick={() => revokeGsi()}>
        <Button
          className={props.className}
          size={Size.default}
          type={Type.secondary}
          btnText="signoutWithGoogle"
          btnIconName={Icons_32px.google_2}
          onClick={() => {}}
        ></Button>
      </div>
    );
};

export default GoogleSignOut;
