import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Admin from "./Admin";
import Signin from "./Signin";
import Signup from "./Signup";
import Logout from "./Logout";
import { Link, Route, Switch } from "react-router-dom";
import CompanyContext from "./contexts/CompanyContext";
import AuthContext from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Cookies from "js-cookie";
import { TranslationProvider } from "./contexts/TranslationContext";
import SwitchLang from "./SwitchLang";

const App = () => {
  const [infos, setInfos] = useState({
    name: "Bwok",
    numCustomers: "10000",
  });
  const [isToken, setIsToken] = useState(false);
  const [langSelection, setLangSelection] = useState("eng");

  useEffect(() => {
    let token = Cookies.get("Bwok-auth-token");
    if (!token) return;
    setIsToken(true);
  }, []);

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
      <CompanyContext.Provider value={{ infos, setInfos }}>
        <AuthContext.Provider value={{ isToken, setIsToken }}>
          <TranslationProvider
            langSelection={langSelection}
            setLangSelection={setLangSelection}
          >
            <Switch>
              <Route path="/about" component={About} />
              <ProtectedRoute path="/admin" component={Admin} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route exact path="/" component={Home} />
            </Switch>
            <SwitchLang />
            <Logout />
          </TranslationProvider>
        </AuthContext.Provider>
      </CompanyContext.Provider>
      {/* {true && (
        <AuthContext.Provider value={{ isToken, setIsToken }}>
          <TranslationProvider
            langSelection={langSelection}
            setLangSelection={setLangSelection}
          >
            
          </TranslationProvider>
        </AuthContext.Provider>
      )} */}
    </div>
  );
};

export default App;
