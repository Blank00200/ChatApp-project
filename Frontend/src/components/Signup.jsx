import React from "react";
import './Signupcss.css';

function Signup() {
  return (
    <div className="ring">
      <i style={{ '--clr': '#00ff0a' }}></i>
      <i style={{ '--clr': '#ff0057' }}></i>
      <i style={{ '--clr': '#fffd44' }}></i>
      <div className="login">
        <h2>Signup</h2>
        <div className="inputBx">
          <input type="text" placeholder="Username" />
        </div>
        <div className="inputBx">
          <input type="text" placeholder="Email" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Password" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Sign Up" />
        </div>
        <div className="links flex justify-between">
          <p style={{color:"white" }}>Already a user? <span className="text-blue-500 underline cursor-pointer ml-1" >Login</span></p>
          <a className="text-white bg-green-500 px-4 py-3 cursor-pointer rounded-lg">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
