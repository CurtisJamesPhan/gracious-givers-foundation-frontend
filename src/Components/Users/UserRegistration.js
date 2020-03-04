import React from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
  bio: "",
  position: ""
};

const UserRegistration = () => {
  const { register, handleSubmit } = useForm(defaultValues);
  //Submit Form
  const submitData = (user) => {
    console.log(user);
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
