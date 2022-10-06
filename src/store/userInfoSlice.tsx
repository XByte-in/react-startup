import { createSlice } from "@reduxjs/toolkit";
export interface UserInfoState {
  credential: string;
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
}
const initialState: UserInfoState = {
  credential: "",
  email: "",
  name: "",
  given_name: "",
  family_name: "",
  picture: "",
};
export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.credential = action.payload.credential;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.given_name = action.payload.name;
      state.family_name = action.payload.family_name;
      state.picture = action.payload.picture;
    },
    removeUseInfo: (state) => {
      state.credential = "";
      state.email = "";
      state.name = "";
      state.given_name = "";
      state.family_name = "";
      state.picture = "";
    },
  },
});

export const { setUserInfo, removeUseInfo } = userInfoSlice.actions;

export const getUserInfo = (state: any) => state.userInfo;

export default userInfoSlice.reducer;
