import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';

import Utils from '../../utils';

interface IGoogleSignInParam {
  client_id: string;
  auto_select: boolean;
  cancel_on_tap_outside: boolean;
  itp_support: boolean;
  onSignIn: (param: object) => void;
}

const GoogleSignIn = (props: IGoogleSignInParam) => {
  const script_id = 'google-client-script';
  const script_url = 'https://accounts.google.com/gsi/client';
  const [gsiInitialized, seGsiInitialized] = useState(false);

  window.onGoogleLibraryLoad = () => {
    seGsiInitialized(true);
    window.google.accounts.id.prompt();
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGoogleSignIn = (res: any) => {
    if (!res.clientId || !res.credential) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded_credential: any = jwt_decode(res.credential);
    const credential = {
      credential: res.credential,
      email: decoded_credential.email,
      name: decoded_credential.name,
      given_name: decoded_credential.given_name,
      family_name: decoded_credential.family_name,
      picture: decoded_credential.picture,
    };
    props.onSignIn(credential);
    Utils.unloadScript(script_id);
  };
  const initializeGsi = () => {
    if (!window.google || gsiInitialized) return;
    window.google.accounts.id.initialize({
      client_id: props.client_id,
      auto_select: props.auto_select,
      cancel_on_tap_outside: props.cancel_on_tap_outside,
      itp_support: props.itp_support,
      context: 'signin',
      callback: handleGoogleSignIn,
    });
    window.google.accounts.id.renderButton(
      document.getElementById('googleSignInDiv'),
      {
        type: 'standard',
        theme: 'filled_blue',
        size: 'large',
        shape: 'pill',
        text: 'continue_with',
      }
    );
    window.google.accounts.id.prompt(); // also display the One Tap dialog
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onScriptError = (error: any) => console.log(error);
  const signInInit = () => {
    Utils.loadScript(
      'script',
      script_id,
      script_url,
      initializeGsi,
      onScriptError
    );
  };
  useEffect(() => signInInit(), []);
  return <div id="googleSignInDiv" />;
};
export default GoogleSignIn;
