import { USER_REGISTRATION } from "../../actions/actionTypes";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case USER_REGISTRATION:
      return state;
    default:
      return state;
  }
};

export default usersReducer;
