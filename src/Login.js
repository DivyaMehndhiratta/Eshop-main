import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import { Link } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {auth, firebaseInstance} from "./firebase-init"

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    // dynamically update without refreshing
    e.preventDefault();
    console.log(auth)
    auth
      .signInWithEmailAndPassword(firebaseInstance, email, password)
      .then((auth) => {
        navigate("/home");
      })
      //error
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(firebaseInstance, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/home");
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your eShop Account
        </button>
      </div>
    </div>
  );
}

export default Login;
