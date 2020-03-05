import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import UserRegistration from "./Components/Users/UserRegistration";
import Login from "./Components/Users/Login";
import { fetchAllPosts } from "./redux/actions/postsActions/postsActions";
import { connect } from "react-redux";
import CreatePostForm from "./Components/Posts/CreatePostForm";
import { getMyProfile } from "./redux/actions/usersAuth/userAuthActions";

const App = (props) => {
  const { fetchAllPosts, getMyProfile } = props;
  useEffect(() => {
    fetchAllPosts();
    fetchMe();
  }, []);

  const fetchMe = () => {
    axios
      .get("http://localhost:1337/users/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTgzMzkzOTUxLCJleHAiOjE1ODU5ODU5NTF9.hK8x_rlqLImEl7eYA8QcNwIJuPgmFTJz9i7aYRkAcsU "
        }
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Gracious Givers App</h1>
      <UserRegistration />

      <CreatePostForm />
      <Login />
    </div>
  );
};

const actions = {
  fetchAllPosts,
  getMyProfile
};

export default connect(null, actions)(App);
