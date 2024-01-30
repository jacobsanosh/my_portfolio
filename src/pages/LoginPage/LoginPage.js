import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import "./LoginPage.css";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // No user is signed in
        setUser(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="login__page__div">
      <div className="login__form-control" >
        <p className="login__title">Login</p>
        <div className="login__input-field">
          <input  className="login__input" type="text" onChange={(e) => setEmail(e.target.value)}/>
          <label className="login__label" for="input">
            Enter Email
          </label>
        </div>
        <div class="login__input-field">
          <input className="login__input" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <label className="login__label" for="input">
            Enter Password
          </label>
        </div>
  
        <button onClick={signIn} className="login__submit-btn">Sign In</button>
        <button onClick={signInWithGoogle} className="login__submit-btn">Sign In</button>
        <button onClick={logOut} className="login__submit-btn">Sign In</button>
      </div>
      {user && (
        <div>
          <h3>User Data:</h3>
          <p>Email: {user.email}</p>
          <p>Display Name: {user.displayName}</p>
          <p>UID: {user.uid}</p>
          <p>Photo URL: {user.photoURL}</p>
        </div>
      )}
    </div>

    
  );
}

export default LoginPage;
