import React from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { UserData } from "../Context/UserContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

const Feedback = () => {
  // const { feedback } = UserData();
  const { id } = useParams();
  const { isAuth, user } = UserData();
  // console.log(user.token);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const feedback = {
      rating: data.rating,
      comment: data.comment,
    };
    // await feedback(data.rating, data.comment);
    if (isAuth) {
      await axios
        .post(`http://localhost:4000/api/review/${id}`, feedback, {
          headers: { token: user.token },
        })
        .then(({ data }) => {
          if (data) {
            console.log(data);
            toast.success("You feedback Submit Successfully");
          }
        })
        .catch((error) => {
          if (error.response) {
            toast.error("error during rating");
          }
        });
    } else {
      toast.error("Please Login...");
    }
  };

  // function feedbackSubmit() {
  //   swal(
  //     "Thank You for your valuable feedback!",
  //     "You clicked the button!",
  //     "success"
  //   );
  // }
  return (
    <>
      <div className="feedback">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className=" text-center">Give feedback!</h1>
          <p className=" text-center">
            Your thoughts are valuable in helping improve our Hospitals.
          </p>

          <div className="star_rating">
            <p>Rate this Hospital:</p>
            <select className="rating" {...register("rating")}>
              <option disabled selected>
                Choose Star
              </option>
              <option value="5">5 Star</option>
              <option value="4">4 Star</option>
              <option value="3">3 Star</option>
              <option value="2">2 Star</option>
              <option value="1">1 Star</option>
            </select>
            <p>Your opinion matter us!</p>
            <textarea
              rows="4"
              cols="50"
              className="review w-full"
              placeholder="Let us know what's on your Mind"
              {...register("comment")}
            ></textarea>
          </div>
          <div className=" text-center mt-5">
            <button className=" btn2">Rate Now</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Feedback;
