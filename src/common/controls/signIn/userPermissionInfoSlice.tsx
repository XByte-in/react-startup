/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';
export interface IUserPermissionsInfoState {
  permissions: { [key: string]: number };
}
const initialState: IUserPermissionsInfoState = {
  permissions: {},
};
export const userPermissionsInfoSlice = createSlice({
  name: 'userPermissionsInfo',
  initialState,
  reducers: {
    setUserPermissionsInfo: (state, action) => {
      state.permissions = { ...action.payload.permissions };
    },
    removeUserPermissionsInfo: state => {
      state.permissions = {};
    },
  },
});

export const { setUserPermissionsInfo, removeUserPermissionsInfo } =
  userPermissionsInfoSlice.actions;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserPermissionsInfo = (state: any) => state.userPermissionsInfo;

export default userPermissionsInfoSlice.reducer;
