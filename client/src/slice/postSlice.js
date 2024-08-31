import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    getPosts(state, action) {
      state = action.payload;
      return state;
    },
    addPost(state, action) {
      return [...state, action.payload];
    },
    patchPost(state, action) {
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
  },
});

export const { getPosts, addPost, patchPost } = postSlice.actions;
export default postSlice.reducer;
