import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import Environment from '../../../environment';
import { RootState } from '../../store/store';
import GoogleSignIn from '../google/googleSignIn';
import {
  removeGoogleUserInfo,
  setGoogleUserInfo,
} from '../google/googleUserInfoSlice';
import TranslatedText from '../translatedText/translatedText';
import { setUserPermissionInfo } from './userPermissionInfoSlice';

import './SignIn.scss';
import { SampleAdmins } from '../../../dashboard/exampleData';

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
      dispatch(setUserPermissionInfo(SampleAdmins[0].permissions));
      navigate('/');
      // AdminApiService.verify()
      //   .then(response => {
      //     if (
      //       (response =
      //         null ||
      //         response.data == null ||
      //         response.data.permissions == null)
      //     ) {
      //       dispatch(removeGoogleUserInfo());
      //       setAccessDenied(true);
      //       return;
      //     }
      //     const permissions = {
      //       admins: 2,
      //       boots: 1,
      //       xyz: 0,
      //       docks1: 1,
      //       docks2: 0,
      //     };
      //     const hasPermission = Object.values(permissions).some(
      //       permission => permission > 0
      //     );
      //     if (!hasPermission) {
      //       dispatch(removeGoogleUserInfo());
      //       setAccessDenied(true);
      //       return;
      //     }
      //     dispatch(setGoogleUserInfo);
      //     dispatch(setUserPermissionsInfo(permissions));
      //     navigate('/');
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card-container">
        <div className="signin-card">
          <div className="title-header">
            <span className="env">{Environment.ENV}</span>
            <span className="company-name">
              <TranslatedText id="companyName" />
            </span>
          </div>
          <GoogleSignIn
            client_id={Environment.GOOGLE_CLIENT_ID}
            auto_select={true}
            cancel_on_tap_outside={true}
            itp_support={true}
            onSignIn={onSignIn}
          />
          <span className="login-info">
            *Use Bluestacks or now.gg email id to login
          </span>
          {accessDenied && (
            <span className="error-msg">
              You do not have access for admin portal
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default SignIn;
