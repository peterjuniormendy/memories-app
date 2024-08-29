import axios from "axios";

const url = "http://localhost:5000/posts";

const headers = {
  "Content-Type": "application/json",
};

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost, { headers });
