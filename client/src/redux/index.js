import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/Posts";

const store = configureStore({
  reducer: {
    postsReducer,
  },
});

export default store;
