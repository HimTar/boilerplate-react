import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import Message from "./message/message";
import { AuthContext } from "../../context/authContext";
import avatar from "../../icons/avatar.png";
import "./style.css";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    console.log(authContext);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setisAuthenticated(isAuthenticated);
        props.history.push("/dashbord");
      } else {
        setMessage(message);
      }
    });
  };

  return (
    <div className="loginbox">
      <img src={avatar} className="avatar" alt="avatar" />

      <h1>Login</h1>

      <form onSubmit={onSubmit}>
        <p>Username</p>
        <input
          type="text"
          name="username"
          onChange={onChange}
          placeholder="Enter Username"
          required
        />

        <p>Password</p>
        <input
          type="password"
          name="password"
          onChange={onChange}
          placeholder="Enter Password"
          required
        />

        <input type="submit" value="Login" />

        {/* <a href="#">Lost your password?</a> */}
        <br />

        <Link to="/register">Don't have an account?</Link>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Login;
