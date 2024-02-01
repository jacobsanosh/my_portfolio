import React, { useState, useContext, useEffect } from "react";
import "./LoginPage.css";
import { AuthContext } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, signInWithGoogle, logOut, user, Login } =
    useContext(AuthContext);
    const navigate = useNavigate();
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
  useEffect(() => {
    if (user) {
      console.log("user loged sucessfully",user);
      navigate("/user");
    }
  }, [user]);
  return (
    <div className="login__page__div">
        <div className="login__form-control">
          <p className="login__title">Login</p>
          <div className="login__input-field">
            <input
              className="login__input"
              type="text"
              id="inputemail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="login__label" for="inputemail">
              Enter Email
            </label>
          </div>
          <div class="login__input-field">
            <input
              className="login__input"
              type="password"
              id="input"
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

    </div>
  );
}

export default LoginPage;
