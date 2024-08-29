import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../controllers/post.js";
import Post from "./Post/Post.jsx";

const Posts = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    getAllPost(dispatch);
  }, [dispatch]);

  console.log("post", post);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
