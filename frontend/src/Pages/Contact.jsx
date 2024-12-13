import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import contact from "../assets/contact.jpg";
import { UserData } from "../Context/UserContext";

const Contact = () => {
  const { user } = UserData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const contactInfo = {
      fullname: data.fullname,
      mob_no: data.mob_no,
      issues: data.issues,
      description: data.description,
    };

    await axios
      .post("http://localhost:4000/api/contact-form", contactInfo, {
        headers: {
          token: user.token,
        },
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          toast.success("Submit Successfully");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" container mt-20">
        <img src={contact} alt="" className=" opacity-75" />
      </div>
      <div className=" container contact_card_sec mt-20 flex justify-between">
        <div className="contact_card">
          <div className=" contact_icon">
            <FaLocationDot size={28} />
          </div>
          <h1 className=" font-bold text-xl my-4">Office Address</h1>
          <p>NH-05 Chandigarh-Ludhiana Highway, Mohali, Punjab (INDIA)</p>
        </div>
        <div className="contact_card">
          <div className=" contact_icon">
            <FaRegAddressBook size={28} />
          </div>
          <h1 className=" font-bold text-xl my-4">Office Mail</h1>
          <p>careplus@gmail.com</p>
          <p>careplus@gmail.com</p>
        </div>
        <div className="contact_card">
          <div className=" contact_icon">
            <IoCallOutline size={28} />
          </div>
          <h1 className=" font-bold text-xl my-4">Phone Number</h1>
          <p>+91 9873459232</p>
          <p>+91 9833872420</p>
        </div>
        <div className="contact_card">
          <div className=" contact_icon">
            <TbWorld size={28} />
          </div>
          <h1 className=" font-bold text-xl my-4">Website Address</h1>
          <p>NH-05 Chandigarh-Ludhiana Highway, Mohali, Punjab (INDIA)</p>
        </div>
      </div>
      {/* contact form */}
      <div className="contact_section container mt-24 flex justify-between">
        {/* contact form left */}
        <div className="left_contact_section w-1/2 ">
          <h1 className=" text-4xl font-semibold">Get In Touch With Us</h1>
          <p>
            If you can't find an answer to your questions, please don't hesitate
            to contact us
          </p>
          <h1 className=" text-2xl font-semibold mt-5">Phone</h1>
          <p>
            <i class="fa-solid fa-headset"></i> +91 9873459232
          </p>
          <p>
            <i class="fa-solid fa-headset"></i> +91 9873459232
          </p>
          <h1 className=" text-2xl font-semibold mt-5">Emergency</h1>
          <p>
            <i class="fa-solid fa-headset"></i> +91 9873459232
          </p>
          <p>
            <i class="fa-solid fa-headset"></i> +91 9873459232
          </p>
          <h1 className=" text-2xl font-semibold mt-5">Email</h1>
          <p>
            <i class="fa-regular fa-envelope"></i> careplus@gmail.com
          </p>
        </div>

        {/* contact form right */}
        <div className="right_contact_section w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
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
              maxlength="10"
              pattern="[6789][0-9]{9}"
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
              {...register("issues", { required: true })}
            />{" "}
            <br />
            <label htmlFor="mobno">Describe Issues:</label>
            <textarea
              name="describe"
              placeholder="describe issue"
              className="input input-bordered w-full mb-5"
              {...register("description", { required: true })}
            ></textarea>
            <br />
            <div className=" text-center mt-5">
              <button className=" btn2 button border-none">Submit</button>
            </div>
          </form>
        </div>
      </div>

      {/* google map */}
      <div className="container mt-24 mb-20">
        {" "}
        <iframe
          className=" w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27427.414457915205!2d76.57881599999999!3d30.762598399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1718690740580!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
