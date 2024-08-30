import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../controllers/post.js";
import CustomLoader from "../../generic/CustomLoader.jsx";
import Post from "./Post/Post.jsx";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);

  useEffect(() => {
    getAllPost(dispatch);
  }, [dispatch]);

  console.log("post", posts);

  return (
    <>
      {!posts.length ? (
        <CustomLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 xl:grid-col-3 gap-4 items-stretch">
          {posts.map((post) => (
            <div key={post._id} className="">
              <Post post={post} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
