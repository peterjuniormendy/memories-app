import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPost = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No post with this id" });

  // update the post
  try {
    await PostMessage.findByIdAndUpdate(
      _id,
      { ...post, _id },
      {
        new: true,
      }
    );
    res.status(200).json({ messageg: "Post updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No post with this id ");
    }
    await PostMessage.findByIdAndDelete(_id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ massage: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;
  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ message: "No post with this id" });
  }
  try {
    const post = await PostMessage.findById(_id);
    await PostMessage.findByIdAndUpdate(
      _id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
    res.status(200).json({ message: "Post liked successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
