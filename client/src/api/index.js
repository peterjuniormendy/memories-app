import axios from "axios";

const url = "https://memories-app-1uju.onrender.com/post";

const headers = {
  "Content-Type": "application/json",
};

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost, { headers });

export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/like-post`);
