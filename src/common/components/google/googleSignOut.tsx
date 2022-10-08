import { Size, Type } from "../../commonConst";
import { IconSize, Icons_32px } from "../../pictures/pictures";
import Button from "../button/button";
import Icon from "../icon/icon";

interface IGoogleSignOutParams {
  showIconOnly?: boolean;
  onSignOut: (param: {}) => void;
}
const GoogleSignOut = (props: IGoogleSignOutParams) => {
  const revokeGsi = () => {
    if (!window.google) return;
    window.google.accounts.id.revoke(
      "Pranshu.gupta@Bluestacks.com",
      (done: any) => {
        props.onSignOut(done);
      }
    );
  };
  if (props.showIconOnly)
    return (
      <Icon
        className="btn-icon"
        iconName={Icons_32px.google_2}
        iconSize={IconSize._32}
        onClick={() => revokeGsi()}
      />
    );
  else
    return (
      <Button
        size={Size.default}
        type={Type.secondary}
        btnText="signoutWithGoogle"
        btnIconName={Icons_32px.google_2}
        onClick={() => revokeGsi()}
      ></Button>
    );
};

export default GoogleSignOut;
