import React, { useContext } from 'react';
import './UserPage.css';
import { AuthContext } from '../../Context/AuthProvider';
import { LogedUser } from '../../Components';
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const navigate = useNavigate();
  const { user, logOut ,setUser} = useContext(AuthContext);

//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//     }
//   }, [user, navigate]);

  const handleLogout = () => {
    logOut();
    setUser(null)
    navigate('/login');
  };

  if(user){
    return (
        <div>
          {user && user.is_admin ? (
            <>
              <h1>hello admin sir</h1>
              <button onClick={handleLogout} className="login__submit-btn">
                Sign out
              </button>
            </>
          ) : (
            <LogedUser />
          )}
        </div>
      );
  }
  
}

export default UserPage;
