import { FETCH_ALL_POSTS, POST_CREATED } from "../../actions/actionTypes";

const postsReducers = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return [...action.payload];
    case POST_CREATED:
      return { ...action.payload };
    default:
      return state;
  }
};

export default postsReducers;
