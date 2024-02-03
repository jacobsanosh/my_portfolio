import React, { useContext,useEffect } from 'react';
import './UserPage.css';
import { AuthContext } from "../../Context/AuthProvider";
import { LogedUser, UserAdmin } from '../../Components';
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const navigate = useNavigate();
  const { user} = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  

  if(user){
    return (
        <div>
          {user && user.is_admin ? (
            <UserAdmin/>
          ) : (
            <LogedUser />
          )}
        </div>
      );
  }
  
}

export default UserPage;
