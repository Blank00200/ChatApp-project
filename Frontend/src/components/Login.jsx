import React from "react";
import "./Logincss.css"; // Importing the external CSS file
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
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

    console.log(userInfo);

    try {
      const response = await axios.post("http://localhost:3000/user/login", userInfo);
      if (response.data) {
        alert("Login Successful");
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
      }
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data.error);
      } else {
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
            <a className="text-white bg-green-500 px-4 py-3 cursor-pointer rounded-lg">
              Signup
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
