import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { userRegister } from "../../redux/actions/usersAuth/userAuthActions";
import { connect } from "react-redux";

const defaultValues = {
  username: "",
  email: "",
  password: "",
  bio: "",
  position: ""
};

const UserRegistration = (props) => {
  const { userRegister } = props;

  const { register, handleSubmit } = useForm();
  //Submit Form
  const submitData = async (user) => {
    await userRegister(user);
  };
  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit(submitData)}>
        <input
          autoComplete="false"
          type="text"
          placeholder="Username"
          name="username"
          ref={register({ required: true })}
        />
        <input
          autoComplete="false"
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true })}
        />

        <input
          autoComplete="false"
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />

        <input
          autoComplete="false"
          type="text"
          placeholder="Bio"
          name="bio"
          ref={register({ required: true })}
        />

        <input
          autoComplete="false"
          type="text"
          placeholder="Position"
          name="position"
          ref={register({ required: true })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const actions = {
  userRegister
};
export default connect(null, actions)(UserRegistration);
