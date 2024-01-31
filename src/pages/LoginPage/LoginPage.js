import React, { useState, useContext } from "react";
import "./LoginPage.css";
import { AuthContext } from "../../Context/AuthProvider";
import { LogedUser } from "../../Components";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, signInWithGoogle, logOut, user, Login } =
    useContext(AuthContext);
  const handleLogin = async () => {
    try {
      await Login(email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSignup = async () => {
    try {
      await signIn(email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login__page__div">
      {user ? (
        <LogedUser/>
      ) : (
        <div className="login__form-control">
          <p className="login__title">Login</p>
          <div className="login__input-field">
            <input
              className="login__input"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="login__label" for="input">
              Enter Email
            </label>
          </div>
          <div class="login__input-field">
            <input
              className="login__input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="login__label" for="input">
              Enter Password
            </label>
          </div>

          <button onClick={handleLogin} className="login__submit-btn">
            Login
          </button>
          <button onClick={handleSignup} className="login__submit-btn">
            Create new Account
          </button>
          <button
            onClick={handleSignInWithGoogle}
            className="login__submit-btn"
          >
            Googl login
          </button>
          <button onClick={handleLogOut} className="login__submit-btn">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
