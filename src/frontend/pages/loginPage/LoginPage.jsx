import React, { useContext, useEffect, useState } from "react";
import "./loginPage.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [loginCredetinals, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const { loginUser, loginData } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (!loginCredetinals.email.trim() || !loginCredetinals.password.trim()) {
      toast.error("Email or password cannot be blank");
      return;
    }
    loginUser(loginCredetinals.email, loginCredetinals.password);

   

  };
useEffect(()=>{
//   console.log(location);
//   console.log(location?.state?.from);
//   console.log(location?.state?.from?.pathname)
// if(loginData.isLoggedIn){
//   if (location?.state?.from) {
//     navigate(location?.state?.from?.pathname);
//   } else {
//     navigate("/");
//   }
// }
  

// },[loginData.isLoggedIn,location?.state?.from, navigate])


if (loginData.isLoggedIn) {
  navigate(location?.state?.from || "/", { replace: true });
}
}, [loginData.isLoggedIn, navigate, location]);

  return (
    <div className="login-container">
      {loginData.isLoggedIn && <h1>Is login </h1>}
      <div>
        <form className="login-main" onSubmit={handleSubmitClick}>
          <h1>Login</h1>
          <div className="login-input">
            <label>
              <input
                type="email"
                value={loginCredetinals.email}
                placeholder="Enter your registered email"
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredetinals,
                    email: e.target.value,
                  })
                }
              />
            </label>
          </div>
          <div className="login-input">
            <label>
              <input
                type="password"
                placeholder="Enter your password"
                value={loginCredetinals.password}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredetinals,
                    password: e.target.value,
                  })
                }
              />
            </label>
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>

          <div type="submit" className="login-button">
            <button
              onClick={() =>
                setLoginCredentials({
                  email: "adarshbalika@gmail.com",
                  password: "adarshbalika",
                })
              }
            >
              Login with Test Credentials
            </button>
          </div>
        </form>
        <div>
          <p>
            Don't have an account. <Link to="/signUp">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
