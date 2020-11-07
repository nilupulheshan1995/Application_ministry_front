import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./mainPages/home";
import Player from "./mainPages/player";
import AdminDashboard from "./admin/adminDash";
import NotFound from "./mainPages/notFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/player" component={Player}></Route>
        <Route path="/admin" component={AdminDashboard}></Route>
        <Route path="/notFound" component={NotFound}></Route>
        <Redirect from="/" exact to="/home"></Redirect>
        <Redirect to="/notFound"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
