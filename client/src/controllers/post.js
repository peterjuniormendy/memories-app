import * as api from "../api";
import { addPost, getPosts } from "../slice/postSlice";

export const getAllPost = async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch(getPosts(data));
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (post, dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch(addPost(data));
  } catch (error) {
    console.log(error.response?.data?.message || error.message);
  }
};
