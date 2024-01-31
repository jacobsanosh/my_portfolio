import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Create the AuthContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
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

  const signIn = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const Login=async(email,password)=>{
    try{
        await signInWithEmailAndPassword(email,password)
    }
    catch (err) {
        console.error(err);
      }
  }
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

  // Define the context value
  const authValue = {
    signIn,
    signInWithGoogle,
    logOut,
    user,
    Login
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

// PropTypes for the AuthProvider component
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export the AuthProvider component
export default AuthProvider;
