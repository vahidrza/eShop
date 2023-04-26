import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import "./Login.css";
import { auth } from "../../Firebase";

function Login() {
  const navigate = useNavigate ();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if(auth) {
            navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
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

          <button className="login__signInButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>By signing-in you agree to the eShop Website Conditions</p>

        <button className="login__registerButton" onClick={register}>
          Click here to Register
        </button>
      </div>
    </div>
  );
}

export default Login;
