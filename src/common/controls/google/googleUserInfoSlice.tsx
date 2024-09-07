/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';
export interface IGoogleUserInfoState {
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
}
const initialState: IGoogleUserInfoState = {
  email: '',
  name: '',
  given_name: '',
  family_name: '',
  picture: '',
};
export const GoogleUserInfoSlice = createSlice({
  name: 'googleUserInfo',
  initialState,
  reducers: {
    setGoogleUserInfo: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.given_name = action.payload.name;
      state.family_name = action.payload.family_name;
      state.picture = action.payload.picture;
    },
    removeGoogleUserInfo: state => {
      state.email = '';
      state.name = '';
      state.given_name = '';
      state.family_name = '';
      state.picture = '';
    },
  },
});

export const { setGoogleUserInfo, removeGoogleUserInfo } =
  GoogleUserInfoSlice.actions;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getGoogleUserInfo = (state: any) => state.googleUserInfo;

export default GoogleUserInfoSlice.reducer;
