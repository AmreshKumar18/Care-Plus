import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserData } from "../../Context/UserContext";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

const AddHospital = () => {
  const { user, hospitals } = UserData();
  const [hospitalList, setHospitalList] = useState(hospitals);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterHospital, setFilterHospital] = useState([]);

  const filteredHospitals = () => {
    const filter = hospitals.filter(
      (hospitals) =>
        hospitals.h_name && hospitals.h_name.toLowerCase().includes(searchQuery)
    );
    setFilterHospital(filter);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  useEffect(() => {
    filteredHospitals();
  }, [hospitals, searchQuery]);

  // console.log(hospitals);
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/hospital/${id}`,
        {
          headers: {
            token: user.token, // Add the token for authentication
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        // Update the job list after deleting the job
        setHospitalList(
          hospitalList.filter((hospitals) => hospitals._id !== id)
        );
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error deleting job");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const hospitalInfo = {
      h_name: data.h_name,
      h_type: data.type,
      h_location: data.location,
      h_about: data.about,
      amount: data.amount,
      isemergency: data.emergency,
      latitude: data.latitude,
      longitude: data.longitude,
      image: data.image[0],
    };

    await axios
      .post("http://localhost:4000/api/hospital/new", hospitalInfo, {
        headers: { token: user.token, "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => {
        if (data) {
          toast.success("Hospital Created Successfully");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  // http://localhost:4000/api/hospital/new
  return (
    <>
      <div className="add_hospital_sec">
        <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
          <h1 className=" text-center">Create Hospital!!</h1>
          <label>Upload Hospital Image:</label>
          <input
            type="file"
            name="image"
            {...register("image", { required: true })}
          />

          <label>Hospital Name:</label>
          <input
            type="text"
            placeholder="name"
            {...register("h_name", { required: true })}
          />
          <label>Hospital Type:</label>
          <select name="type" {...register("type", { required: true })}>
            <option>Select Hospital Type</option>
            <option value="Private">Private</option>
            <option value="Government">Government</option>
            <option value="Semi">Semi</option>
          </select>
          <label>Hospital Location:</label>
          <input
            type="text"
            placeholder="location"
            {...register("location", { required: true })}
          />
          <label>About:</label>
          <input
            type="text"
            placeholder="about"
            {...register("about", { required: true })}
          />
          <label>Appointment Charges:</label>
          <input
            type="Number"
            placeholder="charges"
            {...register("amount", { required: true })}
          />
          <label>Emergency Type:</label>
          <select
            name="emergency"
            {...register("emergency", { required: true })}
          >
            <option>Emergency Type</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <label>Hospital Latitude:</label>
          <input
            type="text"
            placeholder="latitude"
            {...register("latitude", { required: true })}
          />
          <label>Hospital Longitude:</label>
          <input
            type="text"
            placeholder="longitude"
            {...register("longitude", { required: true })}
          />
          <div className=" text-center">
            <button type="submit" className="btn">
              Add Hospital
            </button>
          </div>
        </form>
        <div className="all_hospital">
          <div className=" my-10 m-auto w-full md:w-1/2">
            <label className="input input-bordered flex items-center gap-2 mx-10">
              <input
                type="text"
                className="grow"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search by email, number..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          {filterHospital.map((item) => (
            <div key={item._id} className="my_appointment_card">
              <div className=" flex">
                <div>
                  <img src={`http://localhost:4000/${item.image}`} alt="" />
                </div>

                <div className=" flex flex-col justify-evenly ml-4">
                  <h4>{item.h_name}</h4>
                  <p>{item.h_location}</p>
                  <p>{item.dignosis}</p>
                  <p>{item.appointment_date}</p>
                  <p>&#8377; {item.amount}</p>
                  <h5>{item.status}</h5>
                </div>
              </div>
              <div className=" flex flex-col ">
                <Link to={`/admin/doctors/${item._id}`}>
                  <button className="btn2 m-auto">Add Doctor</button>
                </Link>
                <Link to={`/admin/ambulances/${item._id}`}>
                  <button className=" btn1 m-auto">Add Ambulance</button>
                </Link>
                <Link to={`/admin/equipments/${item._id}`}>
                  <button className="btn2 m-auto">Add Equipment</button>
                </Link>

                <button
                  className="delete_icon "
                  onClick={() => handleDelete(item._id)}
                >
                  <MdOutlineDelete size={25} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddHospital;
