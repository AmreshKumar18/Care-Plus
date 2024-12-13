import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserData } from "../Context/UserContext";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user } = UserData(); // Assuming UserContext provides user info
  console.log(user);
  const { id } = useParams(); // Get the user ID from URL parameters
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Fetch the current user profile data
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/user-profile/${id}`,
          { headers: { token: user.token } }
        );
        const { data } = response;

        // Set form values with fetched data
        setValue("fullname", data.user.fullname);
        setValue("email", data.user.email);
        setValue("mob_no", data.user.mob_no);
        setValue("adhar_no", data.user.adhar_no);
        setValue("blood_group", data.user.blood_group);
        setValue("address_village", data.user.village);
        setValue("address_district", data.user.district);
        setValue("address_pincode", data.user.pincode);
        // setValue("image", data.user.image[0]);
        setValue("answer", data.user.answer);
        setValue("role", data.user.role);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch profile");
      }
    };

    fetchProfile();
  }, [id, user.token, setValue]);

  const onSubmit = async (formData) => {
    try {
      await axios.put(
        `http://localhost:4000/api/edit-user-profile/${id}`,
        formData,
        {
          headers: { token: user.token },
        }
      );
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <>
      <div className="update_profile_container mt-24">
        <h2 className=" text-center">Update Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            {/* <label htmlFor="image">Profile Photo:</label> <br />
            <input
              type="file"
              name="image"
              {...register("image", { required: "Full name is required" })}
            />{" "}
            <br /> */}
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              id="fullname"
              placeholder="Full Name"
              className="input input-bordered w-full"
              {...register("fullname", { required: "Full name is required" })}
            />
            {errors.fullname && (
              <p className="text-red-500">{errors.fullname.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="mob_no">Mobile Number:</label>
            <input
              type="tel"
              id="mob_no"
              placeholder="Mobile Number"
              className="input input-bordered w-full"
              {...register("mob_no", { required: "Mobile number is required" })}
            />
            {errors.mob_no && (
              <p className="text-red-500">{errors.mob_no.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="adhar_no">Aadhaar Number:</label>
            <input
              type="tel"
              id="adhar_no"
              placeholder="Aadhaar Number"
              className="input input-bordered w-full"
              {...register("adhar_no")}
            />
          </div>
          <div>
            <label htmlFor="blood_group">Blood Group:</label>
            <select
              id="blood_group"
              className="select select-bordered w-full"
              {...register("blood_group")}
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div>
            <label htmlFor="address_village">Village:</label>
            <input
              type="text"
              id="address_village"
              placeholder="Village"
              className="input input-bordered w-full"
              {...register("address_village")}
            />
          </div>
          <div>
            <label htmlFor="address_district">District:</label>
            <input
              type="text"
              id="address_district"
              placeholder="District"
              className="input input-bordered w-full"
              {...register("address_district")}
            />
          </div>
          <div>
            <label htmlFor="address_pincode">Pin Code:</label>
            <input
              type="text"
              id="address_pincode"
              placeholder="Pin Code"
              className="input input-bordered w-full"
              {...register("address_pincode")}
            />
          </div>
          <label htmlFor="password">What is Your favourite color? :</label>
          <input
            type="text"
            className="input input-bordered w-full mb-5"
            {...register("answer", { required: "Answer is required" })}
          />{" "}
          {user.user.role === "admin" ? (
            <div>
              <label htmlFor="role">Role:</label>
              <select
                id="role"
                className="select select-bordered w-full"
                {...register("role")}
              >
                <option value="" disabled>
                  Select role
                </option>
                <option value="admin">admin</option>
                <option value="user">user</option>
                <option value="doctor">doctor</option>
              </select>
            </div>
          ) : (
            ""
          )}
          <div className="text-center mt-5">
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
