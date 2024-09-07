/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';
export interface IUserPermissionInfoState {
  permission: { [key: string]: number };
}
const initialState: IUserPermissionInfoState = {
  permission: {},
};
export const UserPermissionInfoSlice = createSlice({
  name: 'userPermissionInfo',
  initialState,
  reducers: {
    setUserPermissionInfo: (state, action) => {
      state.permission = { ...action.payload };
    },
    removeUserPermissionInfo: state => {
      state.permission = {};
    },
  },
});

export const { setUserPermissionInfo, removeUserPermissionInfo } =
  UserPermissionInfoSlice.actions;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserPermissionInfo = (state: any) => state.userPermissionInfo;

export default UserPermissionInfoSlice.reducer;
