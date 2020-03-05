import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { userRegister } from "../../redux/actions/usersAuth/userAuthActions";
import { connect } from "react-redux";
import { createPost } from "../../redux/actions/posts/postsActions";

const defaultValues = {
  title: "",
  content: ""
};

const CreatePostForm = (props) => {
  const { createPost } = props;

  const { register, handleSubmit } = useForm();
  //Submit Form
  const submitData = async (post) => {
    createPost(post);
    console.log(post);
  };
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
  createPost
};
export default connect(null, actions)(CreatePostForm);
