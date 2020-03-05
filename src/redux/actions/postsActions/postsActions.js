import axios from "axios";
import { API_URL } from "../../../config/urls";
import { FETCH_ALL_POSTS } from "../actionTypes";
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
