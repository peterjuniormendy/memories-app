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
  },
});

export const { getPosts, addPost } = postSlice.actions;
export default postSlice.reducer;
