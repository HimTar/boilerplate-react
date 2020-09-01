import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Home from "./components/homepage/home";
import Login from "./components/login/login";
import Register from "./components/login/register";
import Dashbord from "./components/dashbord/dashbord";
import Admin from "./components/admin";
import PrivateRoute from "./hocs/privateRoutes";
import UnPrivateRoute from "./hocs/unprivateroute";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <UnPrivateRoute path="/login" component={Login} />
      <UnPrivateRoute path="/register" component={Register} />
      <PrivateRoute
        path="/dashbord"
        roles={["admin", "user"]}
        component={Dashbord}
      />
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
    </Router>
  );
}

export default App;
