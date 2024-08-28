import * as api from "../api";

const getPost = async (dispatch) => {
  try {
    const data = await api.fetchPosts();
    console.log("data", data);
    dispatch(getPost(data));
  } catch (error) {
    console.log(error);
  }
};
