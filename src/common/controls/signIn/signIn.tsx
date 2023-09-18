import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import Environment from '../../../environment';
import GoogleSignIn from '../google/googleSignIn';
import {
  removeGoogleUserInfo,
  setGoogleUserInfo,
} from '../google/googleUserInfoSlice';
import TranslatedText from '../translatedText/translatedText';
import { RootState } from '../../store/store';

import './SignIn.scss';

const SignIn = () => {
  const domain_list = ['bluestacks.com', 'now.gg'];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [accessDenied, setAccessDenied] = useState(false);
  const userEmail = useSelector(
    (state: RootState) => state.googleUserInfo.email
  );

  const redirectHash = useSelector(
    (state: RootState) => state.privateRouteInfo.value
  );

  useEffect(() => {
    if (userEmail) {
      navigate('/');
    }
  }, []);
  useEffect(() => {
    if (userEmail && userEmail != '') {
      if (
        redirectHash &&
        redirectHash !== '' &&
        !redirectHash.includes('signIn')
      ) {
        navigate('/' + redirectHash);
      } else {
        navigate('/');
      }
    }
  }, [userEmail]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSignIn = (params: any) => {
    const domain = params.email.substring(params.email.lastIndexOf('@') + 1);
    if (!domain_list.includes(domain)) {
      if (!window.google) return;
      window.google.accounts.id.disableAutoSelect();
      window.google.accounts.id.revoke(params.email, () => {
        dispatch(removeGoogleUserInfo());
        setAccessDenied(true);
      });
    } else {
      dispatch(setGoogleUserInfo(params));
      navigate('/');
    }
  };

  return (
    <div className="signin-page">
      {
        <div className="signin-card-container">
          <div className="Sign-in-card" aria-label="sign-in card">
            <div className="title-header">
              <span className="env">{Environment.ENV}</span>
              <TranslatedText id="XBytes" />
            </div>
            <GoogleSignIn
              client_id={Environment.GOOGLE_CLIENT_ID}
              auto_select={true}
              cancel_on_tap_outside={true}
              itp_support={true}
              onSignIn={onSignIn}
            />
            <span aria-label="error-invalid-email" className="admins-label">
              *Use Bluestacks or now.gg email id to login
            </span>
            {accessDenied && (
              <span aria-label="error-access-denied" className="error-msg">
                You do not have access for admin portal
              </span>
            )}
          </div>
        </div>
      }
    </div>
  );
};
export default SignIn;
