import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "Posts",
  initialState: initialState,
  reducers: {
    fetchAll: (state, action) => {
      state.posts = action.payload;
    },
    createPost: (state, action) => {
      state.posts = [action.payload];
    },
    likePost: (state, action) => {
      state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
    deletePost: (state, action) => {
      state.posts.filter((post) => post._id !== action.payload);
    },
    updatePost: (state, action) => {
      state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
  },
});

export const { fetchAll, createPost, updatePost, deletePost, likePost } =
  postsSlice.actions;

export default postsSlice.reducer;
