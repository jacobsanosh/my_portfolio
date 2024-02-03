import React, { useState, useContext } from "react";
import "./LogedUser.css";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { AuthContext } from "../../Context/AuthProvider";
import { useNavigate } from 'react-router-dom';

function LogedUser() {
  const navigate = useNavigate();
  const [linkedin, setLinkedin] = useState("");
  const [aboutme, setAboutme] = useState("");
  const { logOut, user,setUser } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
    setUser(null)
    navigate('/login');
  };
  const handlePost = async () => {
    if (!linkedin || !aboutme) {
      console.log("invalid");
    } else {
      // console.log("Entered handleSubmit");
      try {
        const usersCollection = collection(db, "users");

        const data = {
          user_id:user.uid,
          linkedin,
          email: user.email,
          img_url: user.photoURL,
          name: user.displayName,
          aboutme,
          is_accept:false,
          is_admin:false
        };

        const docRef = await addDoc(usersCollection, data);
        // console.log("Document written ");
        setUser(null)
        logOut();
        navigate('/')
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div className="userDetails">
      <h3>Profile</h3>
      <p>Email: {user.email}</p>
      <p>Hello {user.displayName}</p>
      {user && user.photoURL && (
        <img
          src={user.photoURL}
          alt="User"
          className="user__img"
          referrerpolicy="no-referrer" 
        />
      )}

      <div className="form-container">
        <div className="form-group">
          <label htmlFor="email">Linked in id</label>{" "}
          {/* Corrected 'for' to 'htmlFor' */}
          <input
            name="email"
            id="email"
            type="text"
            onChange={(e) => setLinkedin(e.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Talk about me?</label>{" "}
          {/* Corrected 'for' to 'htmlFor' */}
          <textarea
            required
            cols="50"
            rows="10"
            id="textarea"
            name="textarea"
            maxlength="200"
            onChange={(e) => setAboutme(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handlePost} type="button" className="form-submit-btn">
          Post
        </button>
      </div>

      <button onClick={handleLogout} className="logout__btn">
        Logout
      </button>
    </div>
  );
}

export default LogedUser;
