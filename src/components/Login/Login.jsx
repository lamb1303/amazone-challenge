import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          src={`http://pngimg.com/uploads/amazon/amazon_PNG11.png`}
        />
      </Link>
      <div className="login__container">
        <h1 className="login__title">Sign-in</h1>
        <form>
          <h5 className="login__inputs">E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5 className="login__inputs">Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
          <p className="login__inputs">
            By singin-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, out Cookies Notice and our
            Interest-Rased Ads Notice.
          </p>
          <button onClick={register} className="login_registerButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
