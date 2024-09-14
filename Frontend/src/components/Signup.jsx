import React from "react";
import './Signupcss.css' // Import the external CSS file

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
          <p style={{color:"white", fontWeight: "bold" }}>Already a user?</p>
          <a className="text-white bg-green-500 px-4 py-3 cursor-pointer rounded-lg">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
