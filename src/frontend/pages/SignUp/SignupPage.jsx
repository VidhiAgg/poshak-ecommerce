import React, { useContext, useState } from "react";
import "./signup.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignupPage = () => {
  const { signUp, loginData } = useContext(AuthContext);
  const [validateError, setValidateError] = useState();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  })
  const emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const validateInput = (input, re)=> re.test(input)

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    //blank check
    if(!signUpData.email.trim() || !signUpData.firstName.trim() || !signUpData.lastName.trim() || 
    !signUpData.password.trim() || !signUpData.confirmPassword.trim()){
      setValidateError("Fields can't be blank. Please fill the complete data")
      return;
    }
    if(!validateInput(signUpData.email,emailRegex)){
      setValidateError("Please enter correct e-mail.");
      return;
    }

    if(signUpData.password !== signUpData.confirmPassword){
      setValidateError("Password does not match.");
      return;
    }

    signUp(signUpData.email.trim(), signUpData.firstName.trim(),
    signUpData.lastName.trim(), signUpData.password.trim());

  };


  const isAPIError = loginData.isError &&  <p>{loginData.errorMessage}</p>;
  const dataValidateError  = validateError && <p>{validateError}</p>
  
  
  const showIcon = showPassword.password ?
  <AiFillEyeInvisible onClick ={()=> 
    setShowPassword({...showPassword, password: false})
  }/> :
  
  <AiFillEye onClick={()=> setShowPassword({...showPassword,password: true})}/>
  return (
    <div className="signup-container">
      <div>
        <h1>Sign up</h1>
        <h3>Hii! You are just a click away from becomin our family</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              {" "}
              Enter your Email* <br />
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={signUpData.email}
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label htmlFor="firstName">
              {" "}
              Enter your first Name* <br />
              <input
                id="firstName"
                type="text"
                value={signUpData.firstName}
                placeholder="First Name"
                onChange={(e) =>
                  setSignUpData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              {" "}
              Enter your last Name* <br />
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                value={signUpData.lastName}
                onChange={(e) =>
                  setSignUpData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
              />
            </label>
          </div>

          <div>
            <label htmlFor="password">
              {" "}
              Enter your pssword* <br />
              <input
                id="password"
                value={signUpData.password}
                type={showPassword.password ?"password" : "text"}
                placeholder="Password"
                onChange={(e) =>
                  setSignUpData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </label>
            {showIcon}
          </div>
          <div>
            <label htmlFor="confirm-password">
              {" "}
              Confirm your password* <br />
              <input
                id="confirm-password"
                value={signUpData.confirmPassword}
                type={showPassword.password ?"password" : "text"}
                placeholder="Re-enter your password"
                onChange={(e) =>
                  setSignUpData((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }

              />
              {showIcon}
            </label>
          </div>
          <button type="submit">Sign in</button>
        </form>
        <div>
        {isAPIError}
        </div>
        <div>
        {dataValidateError}
        </div>
      
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
