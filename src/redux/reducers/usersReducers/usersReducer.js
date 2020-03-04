import {
  USER_REGISTRATION,
  USER_LOGIN,
  SET_CURRENT_USER
} from "../../actions/actionTypes";

const initialState = {
  currentUser: null,
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTRATION:
    case USER_LOGIN:
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default usersReducer;
