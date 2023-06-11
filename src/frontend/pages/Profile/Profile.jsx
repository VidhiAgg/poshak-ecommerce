import React, { useContext } from 'react'
import "./profile.css"

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
const Profile = () => {

  const {loginData,signOut} = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className='profile-container'>
      {console.log(loginData)}
<h1>Profile</h1>
<button>Manage Address</button>
{loginData?.isLoggedIn && <button onClick={()=>signOut()}>Sign Out</button>}

{!loginData?.isLoggedIn && 
<div>
  <button onClick={()=>navigate("/login")}>Login In </button>
  </div>
}


    </div>

  )
}

export default Profile