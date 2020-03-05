import { combineReducers } from "redux";
import usersReducer from "./usersReducers/usersReducer";
import postsReducers from "./postsReducers/postsReducers";

const rootReducer = combineReducers({
  user: usersReducer,
  posts: postsReducers
});

export default rootReducer;
