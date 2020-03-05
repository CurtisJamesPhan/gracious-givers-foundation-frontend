import axios from "axios";
import {
  USER_REGISTRATION,
  USER_LOGIN,
  LOGIN_ERROR,
  REGISTRATION_ERROR,
  SET_CURRENT_USER,
  GETTING_MY_PROFILE_ERROR,
  GET_MY_PROFILE
} from "../actionTypes";
import { API_URL } from "../../../config/urls";

export const userRegister = (user) => {
  console.log();
  return (dispatch) => {
    axios
      .post("http://localhost:1337/auth/local/register ", {
        username: user.username,
        email: user.email,
        password: user.password,
        bio: user.bio,
        position: user.position
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Destructure the authenticated user and send it to the store
        const {
          _id,
          username,
          email,
          createdAt,
          position,
          bio
        } = response.data.user;
        const userData = {
          _id,
          username,
          email,
          createdAt,
          position,
          bio
        };
        localStorage.setItem("user", JSON.stringify(userData));
        dispatch({
          type: USER_REGISTRATION,
          payload: userData
        });
      })
      .catch((error) => {
        dispatch({
          type: REGISTRATION_ERROR,
          payload: error
        });
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem("user");
    dispatch({
      type: "USER_LOGOUT"
    });
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: user.identifier,
        password: user.password
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        // Destructure the authenticated user and send it to the store
        const { id, username, email, created_at } = response.data.user;
        const userData = {
          id,
          username,
          email,
          created_at
        };
        console.log(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        dispatch({
          type: USER_LOGIN,
          payload: userData
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: "Email/password incorrect"
        });
        console.log("Email/password incorrect");
      });
  };
};

export const setCurrentUser = (userAuth) => {
  return async (dispatch) => {
    const userAuth = JSON.parse(localStorage.getItem("user"));
    dispatch({
      type: SET_CURRENT_USER,
      payload: userAuth
    });
  };
};

export const getMyProfile = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "http://localhost:1337/users/me"
    })
      .then((res) => {
        dispatch({
          type: GET_MY_PROFILE,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: GETTING_MY_PROFILE_ERROR,
          payload: err
        });
      });
  };
};
