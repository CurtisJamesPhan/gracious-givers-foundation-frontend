import axios from "axios";
import {
  USER_REGISTRATION,
  USER_LOGIN,
  LOGIN_ERROR,
  REGISTRATION_ERROR,
  SET_CURRENT_USER,
  GETTING_MY_PROFILE_ERROR,
  GET_MY_PROFILE,
  USER_LOGOUT
} from "../actionTypes";
import { API_URL } from "../../../config/urls";

export const userRegister = (user) => {
  console.log();
  return (dispatch) => {
    axios
      .post(`${API_URL}/auth/local/register `, {
        username: user.username,
        email: user.email,
        password: user.password,
        bio: user.bio,
        position: user.position
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User data", response.data.jwt);
        // Destructure the authenticated user and send it to the store

        //Grab the id and token and save to localstorage
        const { jwt } = response.data;
        // Destructure the authenticated user and send it to the store

        const { id, username, email, createdAt } = response.data.user;
        const userData = {
          id,
          username,
          email,
          createdAt,
          jwt
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
      type: USER_LOGOUT
    });
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    axios
      .post(`${API_URL}/auth/local`, {
        identifier: user.identifier,
        password: user.password
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User data", response.data.jwt);
        // Destructure the authenticated user and send it to the store

        //Grab the id and token and save to localstorage
        const { jwt } = response.data;
        const { id, username, email, created_at } = response.data.user;
        const userData = {
          id,
          username,
          email,
          created_at,
          jwt
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

export const setCurrentUser = () => {
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
      url: `${API_URL}/users/me`
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
