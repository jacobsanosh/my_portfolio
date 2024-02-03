import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./UserAdmin.css";
import { collection, query, where, getDocs, setDoc, deleteDoc, doc } from "firebase/firestore";


import { db } from "../../config/firebase";
import accpet from "../../assets/svg/accept.svg";
import decline from "../../assets/svg/decline.svg";
function UserAdmin() {
  const [userData, setUserData] = useState([]);
  async function fetchData() {
    const q = query(
      collection(db, "users"),
      where("is_accept", "==", false),
      where("is_admin", "==", false)
    );
    const userDataArray = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userDataArray.push({ id: doc.id, data: doc.data() });
    });
    setUserData(userDataArray);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const { user, logOut, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    setUser(null);
    navigate("/login");
  };
  const handleAccpet=async(id)=>{
    const userRef = doc(db, 'users', id);
    try {
        await setDoc(userRef, { is_accept: true }, { merge: true });
        console.log("saved")
        setUserData((prevUserData) => prevUserData.filter(user => user.id !== id));
      } catch (error) {
        
        console.error("Error accepting user:", error);
      }
  }
  const handleDecline=async(id)=>{
    console.log("on decline",id)
    

  try {
    // Delete the user document from Firestore
    await deleteDoc(doc(db, 'users', id));
    
    // Update state to remove the declined user
    setUserData((prevUserData) => prevUserData.filter(user => user.id !== id));
  } catch (error) {
    // Handle error
    console.error("Error declining user:", error);
  }
  }

  return (
    <div className="admin__page">
      <div className="admin__div">
        <h1>hello {user.email}</h1>
        
        <table class="about__table">
          <tr>
            <th>Linkedin</th>
            <th>About me</th>
            <th>Accept</th>
            <th>Decline</th>
          </tr>
          {userData.map((item) => (
            <tr key={item.id}>
              <td>{item.data.linkedin}</td>
              <td>{item.data.aboutme}</td>
              <td>
                <button onClick={(e)=>{handleAccpet(item.id)}}>
                  <img src={accpet} alt="" srcset="" />
                </button>
              </td>
              <td>
                <button onClick={(e)=>{handleDecline(item.id)}}>
                  <img  src={decline} alt="" srcset="" />
                </button>
              </td>
            </tr>
          ))}
        </table>
        <button onClick={handleLogout} className="login__submit-btn">
          Sign out
        </button>
      </div>
    </div>
  );
}

export default UserAdmin;
