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
            <div className="flex flex-col lg:flex-row h-screen">
              {/* Drawer for mobile and tablet views */}
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle hidden lg:block"
              />
              <div className="drawer-content flex flex-col lg:hidden">
                {/* Drawer Button for smaller screens */}
                <label
                  htmlFor="my-drawer-2"
                  aria-label="open sidebar"
                  className="btn btn-ghost absolute top-4 left-4 lg:hidden"
                >
                  Open Menu
                </label>
                <Right />
              </div>
              <div className="drawer-side lg:w-1/3 bg-black text-gray-300">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu w-full min-h-full lg:pt-4">
                  <Left />
                </ul>
              </div>
              <div className="hidden lg:flex lg:flex-grow">
                <Right />
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
