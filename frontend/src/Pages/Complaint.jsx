import React, { useEffect } from "react";
import complaint from "../assets/complaint.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../Context/UserContext";

const Complaint = () => {
  const { user } = UserData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const contactInfo = {
        fullname: data.fullname,
        mob_no: data.mob_no,
        reg_issues: data.reg_issues,
        image: data.image[0],
        describe_issues: data.describe_issues,
      };

      await axios.post("http://localhost:4000/api/complaint", contactInfo, {
        headers: {
          token: user.token,
          "Content-Type": "multipart/form-data", // Add the token for authentication
        },
      });

      if (data) {
        console.log(data);
        toast.success("Submit Successfully");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" container mt-24 flex justify-between gap-10 mb-16">
        <div className=" sm:w-full m-auto px-5">
          <img src={complaint} alt="" />
        </div>
        <div className=" sm:w-full m-auto px-5">
          <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              placeholder="full name"
              className="input input-bordered w-full mb-5"
              {...register("fullname", { required: true })}
            />
            <br />
            <label htmlFor="mobno">Mobile Number:</label>
            <input
              type="tel"
              // maxlength="10"
              // pattern="[6789][0-9]{9}"
              placeholder="mobile number"
              className="input input-bordered w-full mb-5"
              {...register("mob_no", { required: true })}
            />{" "}
            <br />
            <label htmlFor="mobno">Regarding Issues:</label>
            <input
              type="text"
              placeholder="issuse type"
              className="input input-bordered w-full mb-5"
              {...register("reg_issues", { required: true })}
            />{" "}
            <br />
            <label htmlFor="mobno">Upload Proof:</label>
            <input
              type="file"
              className="file-input file-input-bordered w-full mb-5"
              {...register("image")}
            />{" "}
            <br />
            <label htmlFor="mobno">Describe Issues:</label>
            <textarea
              name="describe"
              placeholder="describe issue"
              className="input input-bordered w-full mb-5"
              {...register("describe_issues", { required: true })}
            ></textarea>
            <br />
            <div className=" text-center mt-5">
              <button className=" btn2 button border-none">Submit</button>
            </div>
          </form>
        </div>
        {/* <Pagination defaultCurrent={6} total={500} />; */}
      </div>
    </>
  );
};

export default Complaint;
