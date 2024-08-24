import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Icon from '../../icon/icon';
import GoogleSignOut from '../googleSignOut';
import { removeGoogleUserInfo } from '../googleUserInfoSlice';

import './googleProfile.scss';

import type { RootState } from '../../../store/store';

const GoogleProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const googleUserInfo = useSelector(
    (state: RootState) => state.googleUserInfo
  );
  return (
    <div className="profile">
      <Icon
        className="profile-logo"
        iconSrc={googleUserInfo.picture}
        alt="profile"
        iconDimension="5rem"
      />
      <div className="profile-info">
        <span className="user-name">{googleUserInfo.name}</span>
        <span className="user-email">{googleUserInfo.email}</span>
      </div>
      <GoogleSignOut
        className="profile-logout"
        onSignOut={() => {
          dispatch(removeGoogleUserInfo());
          navigate('/signIn');
        }}
      />
    </div>
  );
};

export default GoogleProfile;
