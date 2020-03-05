import axios from "axios";
import { POST_CREATED, POST_CREATED_ERROR } from "../actionTypes";

export const createPost = (post) => {
  return (dispatch) => {
    const postData = {
      title: post.title,
      content: post.content
    };
    axios({
      method: "POST",
      url: "http://localhost:1337/posts",
      data: postData
    })
      .then((res) => {
        dispatch({
          type: POST_CREATED,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_CREATED_ERROR,
          payload: err
        });
        console.log(err);
      });
  };
};
