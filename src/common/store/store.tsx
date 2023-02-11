import { configureStore } from "@reduxjs/toolkit";
import googleUserInfoReducer from "../components/google/googleUserInfoSlice";

export const store = configureStore({
  reducer: { googleUserInfo: googleUserInfoReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
