import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

import type { RootState } from '../../store/store';
interface IGoogleSignOutParams {
  className?: string;
  onSignOut: (param: object) => void;
}
const GoogleSignOut = (props: IGoogleSignOutParams) => {
  const googleUserEMail = useSelector(
    (state: RootState) => state.googleUserInfo.email
  );
  const revokeGsi = () => {
    if (!window.google) return;
    window.google.accounts.id.disableAutoSelect();
    window.google.accounts.id.revoke(googleUserEMail, (done: object) => {
      props.onSignOut(done);
    });
  };
  return (
    <div className="g_id_signout" onClick={() => revokeGsi()}>
      <FontAwesomeIcon icon={faRightFromBracket} size="2xl" />
    </div>
  );
};

export default GoogleSignOut;
