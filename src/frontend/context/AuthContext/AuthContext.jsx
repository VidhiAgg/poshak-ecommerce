import React, { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const loginStorageToken = JSON.parse(localStorage.getItem("token"));
  const loginStorageUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const location = useLocation();

  const [loginData, setLoginData] = useState({
    token: loginStorageToken?.token,
    userInfo: loginStorageUser?.user,
    isLoggedIn: loginStorageUser ? true : false,
    isError: loginStorageUser ? false : true,
    errorMessage: null,
  });

  async function signUp(email, firstName, lastName, password) {
    try {
      const payload = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      };
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      if(response.status === 201){
      const  { createdUser, encodedToken} = await response.json();
      toast.success("You have been successfully sign up");
      setLoginData({
        token: encodedToken,
        userInfo: createdUser,
        isLoggedIn: true,
        isError: false,
        errorMessage: null,
      });
      localStorage.setItem("token", JSON.stringify({ token: encodedToken }));
      localStorage.setItem("user", JSON.stringify({ user: createdUser }));
      //navigate
      console.log(location?.state?.from);
      console.log(location?.state?.from?.pathname)
      if (location?.state?.from) {
        navigate(location?.state?.from?.pathname);
      } else {
        navigate("/");
      }

      }else{
        setLoginData({
          ...loginData,
          isError: true,
          errorMessage: "Unprocessable Entity. Email Already Exists."
        });
        toast.error("Unprocessable Entity. Email Already Exists.");
      }

    } catch (error) {
      const err = error.response.data.errors[0];
      setLoginData({
        ...loginData,
        isError: true,
        errorMessage: err.includes("Email Already Exists.")
          ? "Account Already exists."
          : err,
      });
      toast.error("Unable to Sign up.");
    }
  }

  async function loginUser(email, password) {
    try {
      const credentials = {
        email: email,
        password: password,
      };
      const response  = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
      if(response.status === 200){
        const {foundUser, encodedToken} = await response.json()
        console.log(foundUser, encodedToken);
  
        setLoginData({
          token: encodedToken,
          userInfo: foundUser,
          isLoggedIn: true,
          isError: false,
          errorMessage: null,
        });
        toast.success("Login successfull!");
        console.log(location);
        console.log(location?.state?.from);
        console.log(location?.state?.from?.pathname)
        localStorage.setItem("token", JSON.stringify({ token: encodedToken }));
        localStorage.setItem("user", JSON.stringify({ user: foundUser }));

        
      }else{
        setLoginData({
          ...loginData,
          isError: true,
          errorMessage: "API error",
        });
        toast.error("Something is wrong! Please try after sometime");
      }
      
      //navigate
      
    } catch (error) {
      setLoginData({
        ...loginData,
        isError: true,
        errorMessage: "Invalid details",
      });
      toast.error("Invalid Credentials");
    }
  }

  function signOut() {
    setLoginData({
      token: null,
      userInfo: null,
      isLoggedIn: false,
      isError: false,
      errorMessage: null,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout Successfully");
    if (location?.state?.from) {
      navigate(location?.state?.from?.pathname);
    } else {
      navigate("/");
    }
  }

  return (
    <AuthContext.Provider value={{ loginUser, loginData, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
