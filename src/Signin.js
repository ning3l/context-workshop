import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import AuthContext from "./contexts/AuthContext";
import { useTranslation } from "./contexts/TranslationContext";

const Signin = () => {
  const { isToken, setIsToken } = useContext(AuthContext);
  const { lang } = useTranslation();
  const history = useHistory();

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

  // admin test credentials = ben | chicken
  const login = () => {
    console.log("logging user in...", loginData);
    axios
      .post("https://wbs-simple-auth.herokuapp.com/auth/login", loginData)
      .then((data) => {
        let token = data.headers["x-authorization-token"];
        if (token) {
          console.log("user is being logged in...");
          Cookies.set("Bwok-auth-token", token);
          setIsToken(true);
          history.push("/admin");
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
      <button onClick={() => login()}>{lang.buttons.login}</button>
      <br />
      <Link to="/signup">{lang.buttons.signup}</Link>
    </>
  );
};

export default Signin;
