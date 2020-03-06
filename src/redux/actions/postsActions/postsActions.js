import axios from "axios";
import {
  POST_CREATED,
  POST_CREATED_ERROR,
  FETCH_ALL_POSTS,
  SEARCH_FOR_POST,
  DELETE_POST
} from "../actionTypes";
import { API_URL } from "../../../config/urls";

export const createPost = (post, jwt) => {
  return (dispatch) => {
    const postData = {
      title: post.title,
      content: post.content
    };
    axios({
      method: "POST",
      url: `${API_URL}/posts`,
      data: postData,
      headers: {
        authorization: `Bearer ${jwt}`
      }
    })
      .then((res) => {
        dispatch({
          type: POST_CREATED
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

export const fetchAllPosts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:1337/posts")
      .then((res) => {
        dispatch({
          type: FETCH_ALL_POSTS,
          payload: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const searchForPost = (title) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/posts?title_contains=${title}`
    })
      .then((res) => {
        dispatch({
          type: SEARCH_FOR_POST,
          payload: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deletePost = (projectID, token) => {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `${API_URL}/posts/${projectID}`,
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        dispatch({
          type: DELETE_POST
        });
      })
      .catch((err) => console.log(err));
  };
};
