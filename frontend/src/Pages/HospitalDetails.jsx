import React, { useEffect, useState } from "react";
import Tab from "../Components/Tab";
import Lottie from "lottie-react";
import Loading from "../assets/Loading.json";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import about_image from "../assets/about_icon.png";
import star from "../assets/star.png";
import { TimePicker } from "@hilla/react-components/TimePicker.js";
import swal from "sweetalert";
import { FaDirections } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Feedback from "../Components/Feedback";
import { UserData } from "../Context/UserContext";

//
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Radius of the Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const HospitalDetails = () => {
  const { user } = UserData();
  const { id } = useParams();
  const navigate = useNavigate();
  const [hospitalDetails, setHospitalDetails] = useState([]);
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [ambulance, setAmbulance] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [distance, setDistance] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error fetching geolocation: ", error);
          toast.error("Could not fetch your location.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (userLocation && hospitalDetails.latitude && hospitalDetails.longitude) {
      const dist = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        hospitalDetails.latitude,
        hospitalDetails.longitude
      );
      setDistance(dist.toFixed(2)); // Round to 2 decimal places
    }
  }, [userLocation, hospitalDetails]);

  // Generate the Google Maps URL
  const generateGoogleMapsUrl = () => {
    if (userLocation && hospitalDetails.latitude && hospitalDetails.longitude) {
      return `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${hospitalDetails.latitude},${hospitalDetails.longitude}`;
    }
    return "#"; // Fallback URL
  };

  //
  const getAllHospitalDoctors = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/all-doctors/${id}`
      );
      setDoctorDetails(response.data.doctors);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllHospitalDoctors();
  }, []);

  // form handling
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const AppointmentInfo = {
      fullname: data.fullname,
      mob_no: data.mob_no,
      dignosis: data.dignosis,
      appointment_date: data.appointment_date,
      detailed_dignosis: data.detailed_dignosis,
      gender: data.gender,
      appointment_time: data.appointment_time,
    };
    console.log({ AppointmentInfo });
    await axios
      .post(
        `http://localhost:4000/api/patient-appointment/${id}`,
        AppointmentInfo,
        {
          headers: { token: user.token },
        }
      )
      .then(({ data }) => {
        if (data) {
          toast.success(data.message);
          navigate("/my-appointment");
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response?.data?.message);
        }
      });
  };

  //// Get today's date
  const today = new Date();

  // open razorpay
  // const handleOpenRazorpay = (data) => {
  //   const options = {
  //     key: "rzp_test_wuwRLI5y8uPj6L",
  //     amount: Number(data.amount),
  //     currency: data.currency,
  //     name: "Care Plus",
  //     description: "Test Transaction",
  //     image: "",
  //     order_id: data.id,
  //     handler: async (response) => {
  //       console.log("response", response);
  //       try {
  //         const res = await fetch("http://localhost:4000/api/payment/verify", {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             razorpay_order_id: response.razorpay_order_id,
  //             razorpay_payment_id: response.razorpay_payment_id,
  //             razorpay_signature: response.razorpay_signature,
  //           }),
  //         });

  //         const verifyData = await res.json();

  //         if (verifyData.message) {
  //           toast.success(verifyData.message);
  //           onSubmit(getValues());
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#f0da69",
  //     },
  //   };
  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };

  //
  // const handlePayment = async (amount) => {
  //   const info = { amount: amount };
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:4000/api/payment/order",
  //       info
  //     );
  //     handleOpenRazorpay(res.data.data);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  // function showAlert() {
  //   swal({
  //     title: "Are you sure?",
  //     text: "Once deleted, you will not be able to recover this imaginary file!",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       swal("Your Appointment is Successfully registered", {
  //         icon: "success",
  //       }).then(() => {
  //         // Navigate after the success message is shown
  //         navigate("/my-appointment");
  //       });
  //     }
  //   });
  // }

  const hospitalsDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/hospitals-details/${id}`
      );
      setHospitalDetails(res.data.hospitaldetails);
      // console.log(res.data.hospitaldetails);
      setDoctorDetails(res.data.hospitaldetails.doctors);
      setAmbulance(res.data.hospitaldetails.ambulances);
      setEquipment(res.data.hospitaldetails.equipment);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    hospitalsDetails();
  }, []);

  //
  if (loading) {
    return (
      <div className=" container mt-24 w-80 m-auto">
        <Lottie animationData={Loading} autoPlay />
      </div>
    ); // Display loading screen while loading
  }

  return (
    <>
      {/* section number 1 */}
      <div className="container mt-24">
        <div className="hospital_container flex justify-between gap-10">
          <div className="hospital_image m-auto">
            <img
              src={`http://localhost:4000/${hospitalDetails.image}`}
              alt=""
            />
          </div>
          <div className="hospital_details w-2/3 m-auto">
            <h2 className="font-bold">{hospitalDetails.h_name}</h2>
            <div className=" mb-2 flex items-center gap-2">
              <img src={star} alt="" className="w-4 h-4" />
              <p>
                {hospitalDetails.rating} <span>Average rating</span>{" "}
                <span> | </span>{" "}
                <span> {hospitalDetails.numReviews} Reviews</span>
              </p>
              <div className="badge badge-outline">
                {hospitalDetails.h_type}
              </div>
            </div>

            <p>
              <i class="fa-solid fa-location-dot"></i>{" "}
              {hospitalDetails.h_location}
            </p>

            <div className=" flex items-center gap-1">
              <h4 className=" font-bold mt-3">About</h4>
              <i class="fa-solid fa-circle-info"></i>
            </div>

            <p>{hospitalDetails.h_about}</p>

            <h4 className=" mt-4 mb-2">
              Appointment Fee: &#8377; {hospitalDetails.amount}
            </h4>
            {distance && (
              // Make the distance clickable to open Google Maps
              <div className=" flex items-center gap-2">
                <FaDirections size={20} />
                <p className=" text-blue-400">
                  <a
                    href={generateGoogleMapsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {distance} km away
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container my-20">
        <Tab
          doctorDetails={doctorDetails}
          ambulance={ambulance}
          equipment={equipment}
        />
      </div>
      <div className="appointment_form container flex">
        <div className="appointment_img w-1/2">
          <img className=" h-96 m-auto" src={about_image} alt="" />
        </div>
        <div className="sm:w-full m-auto px-5">
          <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <p className=" font-bold text-4xl text-center mb-7">
              Make an Appointment
            </p>
            <label>Patient Name:</label>
            <input
              className="appointment_input"
              type="text"
              placeholder="Patient Name"
              {...register("fullname", { required: true })}
            ></input>
            <label>Mobile Number:</label>
            <input
              className="appointment_input"
              type="tel"
              name="phone"
              id="phone"
              maxlength="10"
              pattern="[6789][0-9]{9}"
              placeholder="Mobile Number"
              {...register("mob_no", { required: true })}
            ></input>
            <label for="diagnosis">Select Diagnosis:</label>
            <select
              id="diagnosis"
              {...register("dignosis", { required: true })}
              className="appointment_input"
            >
              <option>Choose Diagnosis</option>
              <option value="cardiology">Cardiology</option>
              <option value="general-medicine">General Medicine</option>
              <option value="ent">ENT (Eye, Nose, Teeth)</option>
              <option value="nephrology">Nephrology</option>
              <option value="allergy">Allergy</option>
              <option value="breast-surgery">Breast Surgery</option>
              <option value="dentist">Dentist</option>
              <option value="gastroenterology">Gastroenterology</option>
              <option value="neurology">Neurology</option>
              <option value="endocrinology">Endocrinology</option>
            </select>
            <label for="gender">Gender:</label>
            <select
              id="gender"
              {...register("gender", { required: true })}
              className="appointment_input"
            >
              <option>Choose Gender</option>
              <option value="male">Male</option>
              <option value="female"> Female</option>
              <option value="other"> Other</option>
            </select>
            <label>Appointment date: </label> <br />
            <Controller
              control={control}
              name="appointment_date"
              render={({ field }) => (
                <DatePicker
                  placeholderText=" MM-DD-YYYY"
                  className="input input-bordered mb-5"
                  onChange={(date) => field.onChange(date)}
                  minDate={today}
                  selected={field.value}
                />
              )}
            />
            <br />
            <label>Select Appointment Time:</label>
            <br />
            <Controller
              name="appointment_time"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TimePicker
                  className=" bg-transparent"
                  placeholder="hh:mm"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />{" "}
            <h6 className=" mt-3 font-light">
              <span className=" text-red-600">*</span>Appointment time may be
              changed so, keep updates
            </h6>
            <br />
            <label htmlFor="">Detailed diagnosis:</label>
            <textarea
              className="appointment_input"
              placeholder="describe"
              {...register("detailed_dignosis", { required: true })}
            ></textarea>
            <br />
            <p>
              <span className=" text-red-600">*</span>
              Read carefully{" "}
              <span className=" text-indigo-400">
                <Link to="/cancellation-policy">Cancellation Policy</Link>
              </span>
            </p>
            <div className=" text-center">
              <button className="btn2">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
      <div className="feedback_sec">
        <Feedback />
      </div>
    </>
  );
};

export default HospitalDetails;
