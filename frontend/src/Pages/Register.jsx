import React, { useEffect } from "react";
// import { DatePicker } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../Context/UserContext";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Register = () => {
  const { registerUser } = UserData();
  const navigate = useNavigate();

  const { register, handleSubmit, control } = useForm();
  const onSubmit = async (data) => {
    await registerUser(
      data.image,
      data.fullname,
      data.dob,
      data.mob_no,
      data.adhar_no,
      data.blood_group,
      data.email,
      data.password,
      data.village,
      data.district,
      data.pincode,
      data.answer
    );
    navigate("/login");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" container">
        <div className="login__card  m-auto mt-24 ">
          <h1 className=" text-center mb-2">Register an Account !!</h1>
          <p className=" text-center mb-5">
            Please sign up for book Appointment
          </p>
          <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="image">Profile Photo:</label> <br />
            <input
              type="file"
              name="image"
              {...register("image", { required: "Full name is required" })}
            />{" "}
            <br />
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              placeholder="full name"
              className="input input-bordered w-full mb-5"
              {...register("fullname", { required: "Full name is required" })}
            />
            <br />
            <label htmlFor="dob">Date of Birth:</label> <br />
            <Controller
              control={control}
              name="dob"
              rules={{ required: "Date of birth is required" }}
              render={({ field }) => (
                <DatePicker
                  placeholderText=" MM-DD-YYYY"
                  className="input input-bordered mb-5"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
              )}
            />
            {/* <DatePicker
              className=" h-12 w-full mb-5"
              placeholder="year-month-date"
              
              {...register("dob", { required: "Date of birth is required" })}
            />{" "} */}
            <br />
            <label htmlFor="mobno">Mobile Number:</label>
            <input
              type="tel"
              maxlength="10"
              pattern="[6789][0-9]{9}"
              placeholder="Mobile number"
              className="input input-bordered w-full mb-5"
              {...register("mob_no", {
                required: "Mobile number is required",
              })}
            />{" "}
            <br />
            <label htmlFor="adharno">Adhar Number:</label>
            <input
              type="tel"
              // maxlength="12"
              // pattern="[6789][0-9]{9}"
              placeholder="adhar number"
              className="input input-bordered w-full mb-5"
              {...register("adhar_no", {
                required: "Adhar number is required",
              })}
            />{" "}
            <br />
            <label htmlFor="bloodgrp">Blood Group:</label>
            <select
              className="select select-bordered w-full"
              {...register("blood_group", {
                required: "Blood group is required",
              })}
            >
              <option disabled selected>
                Select Blood group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <p className=" text-center text-xl font-semibold my-5 ">Address</p>
            <label htmlFor="email">Village :</label>
            <input
              type="text"
              placeholder="village"
              className="input input-bordered w-full mb-5"
              {...register("village", { required: "Village is required" })}
            />{" "}
            <br />
            <label htmlFor="district">District :</label>
            <input
              type="text"
              placeholder="district"
              className="input input-bordered w-full mb-5"
              {...register("district", { required: "Village is required" })}
            />{" "}
            <br />
            <label htmlFor="pincode">Pin code :</label>
            <input
              type="tel"
              // maxlength="6"
              // pattern="[6789][0-9]{9}"
              placeholder="pin code"
              className="input input-bordered w-full mb-5"
              {...register("pincode", { required: "Village is required" })}
            />{" "}
            <br />
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full mb-5"
              {...register("email", { required: "Password is required" })}
            />{" "}
            <br />
            <label htmlFor="password">Password :</label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered w-full mb-5"
              {...register("password", { required: "Password is required" })}
            />{" "}
            <br />
            <label htmlFor="password">What is Your favourite color? :</label>
            <input
              type="text"
              className="input input-bordered w-full mb-5"
              {...register("answer", { required: "Answer is required" })}
            />{" "}
            <p>
              Already have an account??
              <Link to="/login" className=" text-blue-500">
                {" "}
                Login Here
              </Link>
            </p>
            <div className=" text-center mt-5">
              <button className=" btn button border-none">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
