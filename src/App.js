import React from "react";
import Home from "./Home"
import About from "./About"
import Admin from "./Admin"
import Signin from "./Signin"
import Signup from "./Signup"
import Logout from "./Logout"
import { Link, Route, Switch } from "react-router-dom";

const App = () => {

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
            <Route path="/about" component={About} />
            <Route path="/admin" component={Admin} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={Home} />
      </Switch>
      {true && <Logout />}
    </div>
  );
};


export default App;
