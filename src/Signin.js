import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuth } from "./contexts/AuthContext";

const Signin = () => {
  const { isToken } = useAuth();
  console.log("value", isToken);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const login = () => {
    console.log("logging in", loginData);
    console.log(isToken);
    axios
      .post("https://wbs-simple-auth.herokuapp.com/auth/login", {
        username: "ben",
        password: "chicken",
      })
      .then((data) => {
        let token = data.headers["x-authorization-token"];
        if (token) {
          console.log("user is being logged in...");
          Cookies.set("Bwok-auth-token", token);
          //setIsToken(true);
        }
      })
      .catch((err) => {
        console.log("Please enter valid credentials", err);
      });
  };

  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button onClick={() => login()}>Login</button>
      <br />
      <Link to="/signup">Signup</Link>
    </>
  );
};

export default Signin;
