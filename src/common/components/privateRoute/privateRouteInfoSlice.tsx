

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PrivateRouteInfoState {
  value: string;
}

const initialState: PrivateRouteInfoState = {
  value: '',
};

const privateRouteInfoSlice = createSlice({
  name: 'privateRouteInfo',
  initialState,
  reducers: {
    updateString: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateString } = privateRouteInfoSlice.actions;

export default privateRouteInfoSlice.reducer;

