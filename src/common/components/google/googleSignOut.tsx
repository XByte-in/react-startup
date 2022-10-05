import { Size, Type } from "../../commonConst";
import { Icons_32px } from "../../pictures/pictures";
import Button from "../button/button";

interface IGoogleSignOutParams {
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
  return (
    <Button
      size={Size.default}
      type={Type.secondary}
      btnText="signoutWithGoogle" btnIconName={Icons_32px.google_2}
      onClick={() => revokeGsi()}
    ></Button>
    // <button className="g_id_signout" onClick={() => revokeGsi()}>
    //   SignOut
    // </button>
  );
};

export default GoogleSignOut;
