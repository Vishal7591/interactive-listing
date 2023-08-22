/* eslint-disable global-require */
/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slice/productSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;