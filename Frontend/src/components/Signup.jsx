import React from "react";
import "./Signupcss.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/Authprovider";
import { Link } from "react-router-dom";

function Signup() {
  const [authUser, setAuthUser] = useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watch the password and confirm password fields
  const password = watch("Password", "");
  const confirmPassword = watch("ConfirmPassword", "");

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.Username, // Ensure this matches your server's field names
      email: data.Email,
      password: data.Password,
      confirmPassword: data.ConfirmPassword,
    };

    // console.log(userInfo);

    await axios
      .post("/api/user/signup", userInfo)
      .then((response) => {
        if (response.data) {
          alert("Signup Successful");
        }
        localStorage.setItem("ChatApp",JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          alert("Error: " + error.response.data.error);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="ring">
        <i style={{ "--clr": "#00ff0a" }}></i>
        <i style={{ "--clr": "#ff0057" }}></i>
        <i style={{ "--clr": "#fffd44" }}></i>
        <div className="login">
          <h2>Signup</h2>

          {/* Username */}
          <div className="inputBx">
            <input
              type="text"
              placeholder="Username"
              {...register("Username", { required: true })}
            />
            {errors.Username && (
              <span className="text-red-600 text-sm font-semibold">
                This field is required
              </span>
            )}
          </div>

          {/* Email */}
          <div className="inputBx">
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true })}
            />
            {errors.Email && (
              <span className="text-red-600 text-sm font-semibold">
                This field is required
              </span>
            )}
          </div>

          {/* Password */}
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

          {/* Confirm Password */}
          <div className="inputBx">
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("ConfirmPassword", {
                required: "Please confirm your password",
                validate: validatePasswordMatch,
              })}
            />
            {errors.ConfirmPassword && (
              <span className="text-red-600 text-sm font-semibold">
                {errors.ConfirmPassword.message}
              </span>
            )}
          </div>

          <div className="inputBx">
            <input type="submit" value="Sign Up" />
          </div>

          <div className="links flex justify-between">
            <p style={{ color: "white", fontWeight: "bold" }}>
              Already a user?
            </p>
            <Link to="/login" className="text-white bg-green-500 px-4 py-3 cursor-pointer rounded-lg">
              Login
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
