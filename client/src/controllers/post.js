import * as api from "../api";
import { addPost, getPosts, patchPost } from "../slice/postSlice";

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

export const updatePost = async (id, post, dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch(patchPost(data));
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    const data = await api.deletePost(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (id) => {
  try {
    const data = await api.likePost(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
