import { useState, useContext } from "react";
import "./LogedUser.css";
// import firebase from "../../config/firebase";
import { AuthContext } from "../../Context/AuthProvider";
function LogedUser() {
  const [linkedin, setLinkedin] = useState("");
  const [aboutme, setAboutme] = useState("");
  const { logOut, user } = useContext(AuthContext);
  const handleSubmit = () => {
    console.log("entered");
    // try {
    //   const usersRef = firebase.database().ref('users');

    //   const data = {
    //     linkedin,
    //     email: user.email,
    //     img_url: user.photoURL,
    //     name: user.displayName,
    //     aboutme,
    //   };

    //   usersRef.push(data);
    //   console.log('Data successfully pushed to Firebase:', data);
    // } catch (error) {
    //   console.error('Error pushing data to Firebase:', error.message);
    // }
  };
  return (
    <div className="userDetails">
      <h3>User Data:</h3>
      <p>Email: {user.email}</p>
      <p>Hello {user.displayName}</p>
      {/* <p>UID: {user.uid}</p> */}
      {/* <p>Photo URL: {user.photoURL}</p> */}
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
          <label for="email">Linked in id</label>
          <input
            name="email"
            type="text"
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="textarea">Talk about me?</label>
          <textarea
            required=""
            cols="50"
            rows="10"
            name="textarea"
            onChange={(e) => setAboutme(e.target.value)}
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="form-submit-btn"
        >
          Post
        </button>
      </div>
      <button onClick={logOut} className="logout__btn">
        Logout
      </button>
    </div>
  );
}

export default LogedUser;
