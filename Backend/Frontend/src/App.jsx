import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Ensure Navigate is imported
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider.jsx";

function App() {
  const [authUser] = useAuth(); // Assuming useAuth returns an array with authUser

  console.log(authUser); // Debugging: Check what value authUser has

  return (
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            // <div className="flex h-screen">
            //   <Left />
            //   <Right />
            // </div>
            <div className="drawer lg:drawer-open">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center">
                <Right />
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu w-80 min-h-full bg-black text-base-content">
                  <Left />
                </ul>
              </div>
            </div>
          ) : (
            <Navigate to="/login" /> // Redirect to login if not authenticated
          )
        }
      />

      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />} // Redirect if logged in
      />

      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <Signup />} // Redirect if logged in
      />
    </Routes>
  );
}

export default App;
