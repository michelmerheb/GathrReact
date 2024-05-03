import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import postReducer from "./Slices/PostsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
