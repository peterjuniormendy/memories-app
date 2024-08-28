import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    getPosts(state) {
      return state;
    },
    addPost(state, action) {
      state.push({
        ...action.payload,
      });
    },
  },
});

export const { getPosts, addPost } = postSlice.actions;
export default postSlice.reducer;
