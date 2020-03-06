import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { createPost } from "../../redux/actions/postsActions/postsActions";
import { fetchAllPosts } from "../../redux/actions/postsActions/postsActions";

const defaultValues = {
  title: "",
  content: ""
};

const CreatePostForm = (props) => {
  const { createPost, token, fetchAllPosts } = props;
  console.log(token);
  const { register, handleSubmit } = useForm(defaultValues);
  //Submit Form

  const userToken = token && token.jwt;

  const submitData = (post) => {
    createPost(post, userToken);
    props.history.push("/posts");
  };
  useEffect(() => {
    fetchAllPosts();
  }, []);
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit(submitData)}>
        <input
          autoComplete="false"
          type="text"
          placeholder="Title"
          name="title"
          ref={register({ required: true })}
        />
        <textarea
          autoComplete="false"
          type="text"
          placeholder="Post Content"
          name="content"
          ref={register({ required: true })}
        />

        <button type="submit">Create-Post</button>
      </form>
    </div>
  );
};
const actions = {
  createPost,
  fetchAllPosts
};

const mapStateToprops = (state) => {
  return {
    token: state.user.currentUser
  };
};
export default connect(mapStateToprops, actions)(CreatePostForm);
