import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Scrape from "./components/Scrape";
import Jokes from "./components/Jokes";
import Login from './components/Login';

export default function App({jokeFacade,scrapeFacade,loginFacade}) {
  const [loggedIn, setLoggedIn] = useState(false);
  const noPermission = "";
  const [userPermission, setUserPermission] = useState(noPermission);

  const isUserAdmin = () => {
    return userPermission === "admin";
  };

  const isUserRegular = () => {
    return userPermission === "user";
  };

  const logout = () => { 
    loginFacade.logout();
    setLoggedIn(false);
    setUserPermission(noPermission);
  }

  const login = (user, pass) => {
    loginFacade.login(user,pass)
    .then(res =>{
      if(user.includes("user") && user.includes("admin")) {
        setUserPermission("admin");
      } else {
        setUserPermission(user);
      }
      setLoggedIn(true)
    });
  }


  return (
    <div>
      <Router>
        <Header
        loggedIn={loggedIn}
        isUserAdmin={isUserAdmin}
        isUserRegular={isUserRegular}
        />
        <MainSwitch
        jokeFacade={jokeFacade}
        scrapeFacade={scrapeFacade}
        loggedIn={loggedIn}
        login={login}
        logout={logout}
        isUserAdmin={isUserAdmin}
        isUserRegular={isUserRegular}
        />
      </Router>
    </div>
  );
}

const Header = ({loggedIn, isUserAdmin, isUserRegular}) => {
  return(  
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      {isUserAdmin() || isUserRegular() ? <li><NavLink activeClassName="active" to="/jokes">Jokes</NavLink></li> : ""}     
      {isUserAdmin() ? <li><NavLink activeClassName="active" to="/scrape">Scrape</NavLink></li> : ""}
      {!loggedIn ? <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
      : <li><NavLink activeClassName="active" to="/login">Logout</NavLink></li>}
    </ul>
  );
};

const MainSwitch = ({jokeFacade,scrapeFacade,loginFacade,loggedIn,login,logout,isUserAdmin,isUserRegular}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/jokes">
        <Jokes
        jokeFacade={jokeFacade}
        isUserAdmin={isUserAdmin}
        isUserRegular={isUserRegular}
        />
      </Route>
      <Route path="/scrape">
        <Scrape
        scrapeFacade={scrapeFacade}
        isUserAdmin={isUserAdmin}
        />
      </Route>
      <Route path="/login">
        <Login
        loginFacade={loginFacade}
        loggedIn={loggedIn}
        login={login}
        logout={logout}
        />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};