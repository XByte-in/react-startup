import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from '../../common/controls/privateRoute/privateRoute';
import SignIn from '../../common/controls/signIn/signIn';
import Home from '../../home/home';

import type { RootState } from '../../common/store/store';
const TestSignin = () => {
  const googleUserInfo = useSelector(
    (state: RootState) => state.googleUserInfo
  );
  return (
    <>
      {googleUserInfo && <span>{googleUserInfo.email}</span>}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default TestSignin;
