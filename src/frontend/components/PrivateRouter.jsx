import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext/AuthContext';

export function  PrivateRouter ({children}) {
    const location = useLocation();
    const {loginData} = useContext(AuthContext);

  return loginData.isLoggedIn ? (
    children
  ) : (<Navigate to ="/login" state={{ from: location.pathname }} replace/>)
}

