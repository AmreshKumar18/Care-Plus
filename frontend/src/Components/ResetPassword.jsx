import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const resetInfo = {
        email: data.email,
        answer: data.answer,
        newPassword: data.newPassword,
      };
      const res = await axios.post(
        "http://localhost:4000/api/user/reset-password",
        resetInfo
      );
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className=" mt-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" text-left mb-8">
            <label htmlFor="email">Email:</label>

            <input
              type="email"
              placeholder="enter email..."
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>This field is required</span>
            )}

            <label htmlFor="password">Answer:</label>

            <input
              type="text"
              placeholder="enter answer..."
              className="input input-bordered w-full"
              {...register("answer", { required: true })}
            />
            {errors.answer && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
            <label htmlFor="password">Password:</label>

            <input
              type="password"
              placeholder="enter password..."
              className="input input-bordered w-full"
              {...register("newPassword", { required: true })}
            />
            {errors.newPassword && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>
          <div className=" text-center">
            <button type="submit" className="btn2">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
