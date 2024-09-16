import React from "react";
import { Routes, Route } from "react-router-dom";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./context/Authprovider";

function App() {
  const [authUser] = useAuth();  // Only destructuring authUser as setAuthUser is not used here
  console.log(authUser);
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
          <Login />
        )}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
