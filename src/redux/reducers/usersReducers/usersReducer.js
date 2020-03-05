import {
  USER_REGISTRATION,
  USER_LOGIN,
  SET_CURRENT_USER,
  GET_MY_PROFILE
} from "../../actions/actionTypes";

const initialState = {
  currentUser: null,
  users: [],
  myProfile: null
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
    case GET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;
