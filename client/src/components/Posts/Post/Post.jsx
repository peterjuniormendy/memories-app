import React, { useState } from "react";
import { HiMiniTrash, HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import moment from "moment";
import LikeIcon from "../../../assets/LikeIcon";

const Post = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  const bgColor = isLike ? "#00f" : "#fff";
  return (
    <div className="w-full rounded-md shadow-lg">
      <div className="relative h-48 bg-blue-100">
        <img
          src={post.selectedFile}
          alt=""
          className="w-full h-full object-cover rounded-t-md "
        />
        <HiOutlineEllipsisHorizontal className="absolute top-1 end-4 text-white text-4xl cursor-pointer" />
      </div>
      <div className="pt-2 pb-4 px-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-slate-800 text-xl font-bold capitalize">
            {post.creator}
          </h2>
          <p className="text-slate-500 text-base">
            {moment(post.createdAt).fromNow()}
          </p>
        </div>

        <h2 className="text-slate-700 text-lg font-bold capitalize">
          {post.title}
        </h2>
        <p className="text-slate-600">{post.message}</p>
        <p
          className="text-slate-400 text-base mb-5 break-words
        "
        >
          {post.tags.map((tag) => (
            <span className="pr-2">{`#${tag}`}</span>
          ))}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <div
              onClick={() => setIsLike(!isLike)}
              className="inline-block pr-2"
            >
              <LikeIcon bg={bgColor} />
            </div>
            <span className="text-lg text-slate-500">{post.likeCount}</span>
          </div>
          <HiMiniTrash className="text-2xl text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Post;
