import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/Posts";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
