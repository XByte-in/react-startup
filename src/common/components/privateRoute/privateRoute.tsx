import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { removeGoogleUserInfo } from "../google/googleUserInfoSlice";
import { AppDispatch, RootState } from "../../store/store";

import { updateString } from "./privateRouteInfoSlice";

const PrivateRoute = (props: any) => {
  console.log(props);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const userEmail = useSelector(
    (state: RootState) => state.googleUserInfo.email
  );
  const redirectHash = useSelector(
    (state: RootState) => state.privateRouteInfo.value
  );
  const hash = window.location.hash;
  const redirectRoute = window.location.hash.substring(2);
  console.log("em", userEmail);
  useEffect(() => {
    if (hash && !hash.includes("signIn")) {
      dispatch(updateString(redirectRoute));
    }
  }, []);

  useEffect(() => {
    if (!userEmail) {
      dispatch(removeGoogleUserInfo());
      navigate("/signIn");
    }
  }, [redirectHash]);

  return userEmail ? props.children : <Navigate to="/signIn" />;
};

export default PrivateRoute;
