import React from "react";
import "./Logincss.css"; // Importing the external CSS file
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/Authprovider";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate(); // Add navigate hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.Email,
      password: data.Password,
    };

    try {
      console.log("Sending login request with:", userInfo); // Log request data

      const response = await axios.post("/api/user/login", userInfo);

      console.log("Server response:", response.data); // Log server response

      if (response.data) {
        console.log("User logged in successfully");

        // Check if response contains user data or token
        console.log("User data:", response.data);

        alert("Login Successful");
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
        navigate("/"); // Redirect to home or dashboard
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data); // Log error response
        alert("Error: " + error.response.data.error);
      } else {
        console.error("Unexpected error:", error); // Log unexpected error
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="ring">
        <i style={{ "--clr": "#00ff0a" }}></i>
        <i style={{ "--clr": "#ff0057" }}></i>
        <i style={{ "--clr": "#fffd44" }}></i>
        <div className="login">
          <h2>Login</h2>

          <div className="inputBx">
            <input
              type="email"
              placeholder="Email"
              {...register("Email", { required: "Email is required" })}
            />
            {errors.Email && (
              <span className="text-red-600 text-sm font-semibold">
                {errors.Email.message}
              </span>
            )}
          </div>

          <div className="inputBx">
            <input
              type="password"
              placeholder="Password"
              {...register("Password", { required: "Password is required" })}
            />
            {errors.Password && (
              <span className="text-red-600 text-sm font-semibold">
                {errors.Password.message}
              </span>
            )}
          </div>

          <div className="inputBx">
            <input type="submit" value="Login" />
          </div>

          <div className="links flex justify-between">
            <p style={{ color: "white", fontWeight: "bold" }}>New user?</p>

            <Link to="/signup" className="text-white bg-green-500 px-4 py-3 cursor-pointer rounded-lg" 
              href="/signup"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
