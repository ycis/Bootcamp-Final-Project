import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import ChildForm from '../components/Forms/Child'


const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/youth-form" exact component={ChildForm} />
      <Route component={NoMatch} />
    </Switch>
  );
};