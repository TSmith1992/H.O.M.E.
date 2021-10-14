import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function LoginTree({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signupTree">
        <Signup setCurrentUser={setCurrentUser} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default LoginTree;