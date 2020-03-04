import { combineReducers } from "redux";
import usersReducer from "./usersReducers/usersReducer";

const rootReducer = combineReducers({
  user: usersReducer
});

export default rootReducer;
