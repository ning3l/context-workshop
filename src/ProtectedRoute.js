import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
  // check if a valid token is present
  const { isToken } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isToken ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    ></Route>
  );
}
