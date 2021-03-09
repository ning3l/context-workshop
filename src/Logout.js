import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Cookies from "js-cookie";

const Logout = () => {
  const { isToken, setIsToken } = useAuth();
  const history = useHistory();

  console.log("TOKEN from logout", isToken);

  return (
    <>
      <br />
      <button
        style={{ marginTop: "2em" }}
        onClick={() => {
          // delete the cookie
          Cookies.remove("Bwok-auth-token");
          // reset the auth context
          setIsToken(false);
          // redirect to signin
          history.push("/signin");
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
