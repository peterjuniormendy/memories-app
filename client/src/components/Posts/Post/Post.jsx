import React, { useState } from "react";
import { HiMiniTrash, HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import moment from "moment";
import LikeIcon from "../../../assets/LikeIcon";
import { deletePost, getAllPost, likePost } from "../../../controllers/post";
import { useDispatch } from "react-redux";
import { FcLike } from "react-icons/fc";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  const deletePostHandler = async (id) => {
    const data = await deletePost(id, dispatch);
    data?.status == 200 && getAllPost(dispatch);
  };

  const likePostHandler = async (id) => {
    const data = await likePost(id);
    data?.status == 200 && getAllPost(dispatch);
  };

  return (
    <div className="w-full rounded-md shadow-lg">
      <div className="relative h-48 bg-blue-100 rounded-t-md">
        <img
          src={post.selectedFile}
          alt=""
          className="w-full h-full object-cover rounded-t-md "
        />
        <HiOutlineEllipsisHorizontal
          className="absolute top-1 end-4 text-white text-4xl cursor-pointer"
          onClick={() => setCurrentId(post._id)}
        />
      </div>
      <div className="pt-2 pb-4 px-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-slate-600 text-lg font-bold capitalize truncate">
            {post.creator}
          </h2>
          <p className="text-slate-400 text-base text-nowrap">
            {moment(post.createdAt).fromNow()}
          </p>
        </div>

        <h2 className="text-slate-500 text-base font-semibold capitalize">
          {post.title}
        </h2>
        <p className="text-slate-400 truncate">{post.message}</p>
        <p
          className="text-slate-500 text-base mb-5 break-words
        "
        >
          {post?.tags?.map((tag, index) => (
            <span key={index} className="pr-2">{`#${tag}`}</span>
          ))}
        </p>
        <div className="flex justify-between items-baseline">
          <div className="flex items-center">
            <FcLike
              className="text-4xl pr-2"
              onClick={() => likePostHandler(post._id)}
            />

            <span className="text-xl text-slate-500">{post.likeCount}</span>
          </div>
          <HiMiniTrash
            className="text-2xl text-red-600"
            onClick={() => deletePostHandler(post._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
