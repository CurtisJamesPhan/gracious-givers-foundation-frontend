import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../redux/actions/usersAuth/userAuthActions";
import { connect } from "react-redux";

const defaultValues = {
  username: "",
  password: ""
};

const Login = (props) => {
  const { loginUser } = props;

  const { register, handleSubmit } = useForm(defaultValues);
  //Submit Form
  const submitData = async (user) => {
    console.log(user);
    return await loginUser(user);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(submitData)}>
        <input
          autoComplete="false"
          type="text"
          placeholder="Username/Email"
          name="identifier"
          ref={register}
        />

        <input
          autoComplete="false"
          type="password"
          placeholder="Password"
          name="password"
          ref={register}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const actions = {
  loginUser
};
export default connect(null, actions)(Login);
