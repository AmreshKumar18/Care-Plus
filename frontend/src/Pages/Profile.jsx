import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserData } from "../Context/UserContext";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  const { user } = UserData();
  const userId = user?.user?._id;
  console.log(userId);
  const [showModal, setShowModal] = useState(false);
  // console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const updatePasswordInfo = {
        email: data.email,
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      };
      const res = await axios.post(
        "http://localhost:4000/api/user/update-password",
        updatePasswordInfo,
        { headers: { token: user.token } }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" profile_card mt-24 flex m-auto w-2/3 gap-2">
        <div className="edit_icon tooltip" data-tip="edit profile">
          <Link to={`/update-profile/${userId}`}>
            <i class="fa-solid fa-user-pen fa-xl"></i>
          </Link>
        </div>
        <div className="left w-1/3 m-auto">
          <img
            className=" p-5"
            src={`http://localhost:4000/${user.user?.image}`}
            alt=""
          />
        </div>
        <div className="right w-2/3 p-5 m-auto">
          {user.user?.role === "admin" ? (
            <Link to="/admin/dashboard" className="badge badge-outline">
              Go To Admin Dashboard
            </Link>
          ) : user.user?.role === "doctor" ? (
            <Link to="/hospital/home" className="badge badge-outline">
              Go To Doctor Dashboard
            </Link>
          ) : (
            <p className="badge badge-outline">User</p>
          )}
          <p>
            <b>UID:</b> {user.user?._id.slice(-4)}
          </p>
          <p>
            <b>Name:</b> {user.user?.fullname}
          </p>
          <p>
            <b>Date Of Birth:</b> {user.user?.dob}
          </p>
          <p>
            <b>Email:</b> {user.user?.email}
          </p>
          <p>
            <b>Contact No:</b> {user.user?.mob_no}
          </p>
          <p>
            <b>Adhar No:</b> {user.user?.adhar_no}
          </p>
          <p>
            <b>Blood Group:</b> {user.user?.blood_group}
          </p>
          <h1 className=" text-center font-bold">Address</h1>
          <p>
            <b>Village:</b> {user.user?.village}
          </p>
          <p>
            <b>District:</b> {user.user?.district}
          </p>
          <p>
            <b>Pin Code:</b> {user.user?.pincode}
          </p>
          <div>
            <button className="btn2" onClick={() => setShowModal(true)}>
              Update Password
            </button>
            {showModal && (
              <>
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                      type="email"
                      placeholder="enter email..."
                      className="input input-bordered w-full"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                    <br />
                    <label htmlFor="password">Old Password:</label>
                    <br />
                    <input
                      type="password"
                      placeholder="enter password..."
                      className="input input-bordered w-full"
                      {...register("oldPassword", { required: true })}
                    />
                    {errors.oldPassword && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                    <br />
                    <label htmlFor="password">New Password:</label>
                    <br />
                    <input
                      type="password"
                      placeholder="enter password..."
                      className="input input-bordered w-full"
                      {...register("newPassword", { required: true })}
                    />
                    {errors.newPassword && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                    <br />

                    <button className="btn2">Update Password</button>
                    <button className="btn" onClick={() => setShowModal(false)}>
                      Close
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>

        {/* http://localhost:4000/api/user/update-password */}
      </div>
    </>
  );
};

export default Profile;
