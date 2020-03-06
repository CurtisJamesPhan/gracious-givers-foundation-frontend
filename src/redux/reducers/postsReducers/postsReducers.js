import {
  FETCH_ALL_POSTS,
  POST_CREATED,
  SEARCH_FOR_POST,
  DELETE_POST
} from "../../actions/actionTypes";

const postsReducers = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return [...action.payload];
    case SEARCH_FOR_POST:
      return [...action.payload];
    case POST_CREATED:
    case DELETE_POST:
      return state;
    default:
      return state;
  }
};

export default postsReducers;
