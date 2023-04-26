import React, { useState } from "react";
import { Link } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import "./AdminSignIn.css";

function AdminSignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
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
            <h5>Username</h5>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
  
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
  
            <button className="login__signInButton" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
}

export default AdminSignIn