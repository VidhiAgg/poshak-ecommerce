import React, { useContext } from 'react'
import "./profile.css"

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
const Profile = () => {

  const {loginData,signOut} = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className='profile-container'>
     
<h1>Profile</h1>
<div className='profile-details'>
  <h1>Welcome, {loginData.userInfo.firstName}{" "} {loginData.userInfo.lastName}</h1>
<button onClick={()=>navigate("/address")}>Manage Address</button>
{loginData?.isLoggedIn && <button onClick={()=>signOut()}>Sign Out</button>}

{!loginData?.isLoggedIn && 
<div>
  <button onClick={()=>navigate("/login")}>Login In </button>
  </div>
}
</div>



    </div>

  )
}

export default Profile