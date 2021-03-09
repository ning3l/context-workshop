import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Admin from "./Admin";
import Signin from "./Signin";
import Signup from "./Signup";
import Logout from "./Logout";
import { Link, Route, Switch } from "react-router-dom";
import CompanyContext from "./contexts/CompanyContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const [infos, setInfos] = useState({
    name: "Bwok",
    numCustomers: "10000",
  });

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
      <Switch>
        <CompanyContext.Provider value={{ infos, setInfos }}>
          <AuthProvider>
            <Route path="/about" component={About} />
            <ProtectedRoute path="/admin" component={Admin} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={Home} />
          </AuthProvider>
        </CompanyContext.Provider>
      </Switch>
      {true && (
        <AuthProvider>
          <Logout />
        </AuthProvider>
      )}
    </div>
  );
};

export default App;
