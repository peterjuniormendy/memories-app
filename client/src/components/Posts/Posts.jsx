import React, { useEffect } from "react";
import CustomLoader from "../../generic/CustomLoader.jsx";
import Post from "./Post/Post.jsx";

const Posts = ({ posts, setCurrentId }) => {
  return (
    <>
      {!posts.length ? (
        <CustomLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 xl:grid-col-3 gap-4 items-stretch">
          {posts.map((post) => (
            <div key={post._id}>
              <Post post={post} setCurrentId={setCurrentId} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
