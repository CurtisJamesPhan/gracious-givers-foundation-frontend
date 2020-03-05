import React from "react";
import axios from "axios";

//You need jwt Token as a header and this can be as props or store /local storage

const updateUseRes = await axios({
  method: "PUT",
  url: "http://localhost:1337/users/:id",
  data: "FormData",
  headers: {
    Authorization: `Bearer ${jwt}`
  }
});

const UpdateUserProfile = () => {
  return <div></div>;
};

export default UpdateUserProfile;
