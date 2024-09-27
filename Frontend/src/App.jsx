import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";  // Ensure Navigate is imported
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./context/Authprovider";

function App() {
  const [authUser] = useAuth();  // Assuming useAuth returns an array with authUser

  console.log(authUser);  // Debugging: Check what value authUser has
  
  return (
    <Routes>
      <Route 
        path="/" 
        element={authUser ? (
          <div className="home" style={{ display: 'flex', height: '100vh', width: '100vw' }}>
            <div style={{ flexBasis: "30%", backgroundColor: "red", color: "#D1D5DB" }}>
              <Left />
            </div>
            <div style={{ flexBasis: "70%", backgroundColor: "green", color: "#D1D5DB" }}>
              <Right />
            </div>
          </div>
        ) : (
          <Navigate to="/login" />  // Redirect to login if not authenticated
        )}
      />
      
      <Route 
        path="/login" 
        element={authUser ? <Navigate to="/" /> : <Login />}  // Redirect if logged in
      />
      
      <Route 
        path="/signup" 
        element={authUser ? <Navigate to="/" /> : <Signup />}  // Redirect if logged in
      />
    </Routes>
  );
}

export default App;
