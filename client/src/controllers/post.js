import * as api from "../api";
import { addPost, getPosts } from "../slice/postSlice";

export const getPost = async (dispatch) => {
  try {
    const data = await api.fetchPosts();
    console.log("data", data);
    dispatch(getPosts(data));
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (post, dispatch) => {
  try {
    const data = await api.createPost(post);
    console.log("data", data);
    dispatch(addPost(data));
  } catch (error) {
    console.log(error);
  }
};
