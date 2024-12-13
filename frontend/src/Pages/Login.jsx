import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../Context/UserContext";
import login from "../assets/login.png";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = UserData();
  const onSubmit = async (data) => {
    await loginUser(data.email, data.password);
    navigate("/");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" container flex mt-24">
        <div className=" w-1/2 login_image m-auto">
          <img src={login} alt="" />
        </div>

        <div className="login_sec text-center w-1/2 m-auto my-24">
          <h1 className=" text-center text-3xl font-bold mb-2 ">Log In Here</h1>
          <p>Please login to book Appointment</p>
          <form className="login_form m-10" onSubmit={handleSubmit(onSubmit)}>
            <div className=" text-left mb-8">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                placeholder="enter email..."
                className="input input-bordered w-full"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
              <br />
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                placeholder="enter password..."
                className="input input-bordered w-full"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
              <br />
              <h6 className=" my-1">
                Are you want to Forgot Password??{" "}
                <Link to="/reset-password" className=" text-blue-500">
                  Forgot password
                </Link>
              </h6>
            </div>
            <button className="btn2 mb-3" type="submit">
              Login Now
            </button>
            <div>
              <p className=" text-left">
                New User?{" "}
                <Link to="/register" className=" text-blue-500">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
