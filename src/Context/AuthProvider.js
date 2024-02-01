import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth, googleProvider, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        setUser(user);
        console.log(user);
        const q = query(collection(db, "users"), where("user_id", "==", user.uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          setUser(prevUser => ({
            ...prevUser,
            ...doc.data(),
          }));
          // console.log("new user data",user)
        });
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
  const Login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(email, password);
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

  // Define the context value
  const authValue = {
    signIn,
    signInWithGoogle,
    logOut,
    user,
    Login,
    setUser
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
