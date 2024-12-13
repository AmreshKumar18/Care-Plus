import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { UserData } from "../../Context/UserContext";

const Notification = () => {
  const { user } = UserData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // http://localhost:4000/api/add-notification

  const onSubmit = async (data) => {
    const notificationInfo = {
      title: data.title,
      message: data.message,
    };
    try {
      await axios.post(
        "http://localhost:4000/api/add-notification",
        notificationInfo,
        { headers: { token: user.token } }
      );
      if (data) {
        toast.success("Notification added to the Users");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <div className="equipment_sec">
        <h1 className=" text-center">Add Notification</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="equipment_sec_form">
            <label>Title:</label>
            <input type="text" {...register("title", { required: true })} />
            <label>Message:</label>
            <textarea
              name=""
              id=""
              cols={30}
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <div>
            <button className="btn">Add Notification</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Notification;
