import { USER_REGISTRATION } from "../actionTypes";

export const userRegister = (user) => {
  return (dispatch) => {
    //destrucure form values
    const { username, email, password } = user;
    const userData = {
      username,
      email,
      password
    };
    //make async request

    axios
      .post(`${API_URL}/auth/local/register`, {
        username: user.email,
        email: user.email,
        password: user.password
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Destructure the authenticated user and send it to the store
        const { _id, username, email, createdAt } = response.data.user;
        const userData = {
          _id,
          username,
          email,
          createdAt
        };
        localStorage.setItem("user", JSON.stringify(userData));
        dispatch({
          type: "USER_REGISTERED",
          payload: userData
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR_REGISTERING",
          payload: {
            message: error
          }
        });
      });
  };
};
