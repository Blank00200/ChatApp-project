import React from "react";
import './Logincss.css'; // Importing the external CSS file

function Login() {
      return (
        <div className="ring">
          <i style={{ '--clr': '#00ff0a' }}></i>
          <i style={{ '--clr': '#ff0057' }}></i>
          <i style={{ '--clr': '#fffd44' }}></i>
          <div className="login">
            <h2>Login</h2>
            <div className="inputBx">
              <input type="text" placeholder="Email" />
            </div>
            <div className="inputBx">
              <input type="password" placeholder="Password" />
            </div>
            <div className="inputBx">
              <input type="submit" value="Sign in" />
            </div>
            <div className="links flex justify-between">
              <p style={{color:"white" }}>New user? <span className="text-blue-500 underline cursor-pointer ml-1" >Signup</span></p>
              <a className="text-white bg-green-500 px-4 py-3 cursor-pointer rounded-lg">Signup</a>
            </div>
          </div>
        </div>   
  );
}

export default Login;
