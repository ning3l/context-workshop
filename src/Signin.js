import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {

const login = () => {
    console.log('logging in')
}

  return (
    <>
      <input
        type="text"
        name="login"
        placeholder="Login"
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
      />
      <button onClick={() => login()}>Login</button>
      <br />
      <Link to="/signup">Signup</Link>
    </>
  );
};

export default Signin;
