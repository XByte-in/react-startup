import { configureStore } from "@reduxjs/toolkit";
import googleUserInfoReducer from "../components/google/googleUserInfoSlice";
import privateRouteInfoReducer from "../components/privateRoute/privateRouteInfoSlice";

export const store = configureStore({
  reducer: {
    googleUserInfo: googleUserInfoReducer,
    privateRouteInfo: privateRouteInfoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
