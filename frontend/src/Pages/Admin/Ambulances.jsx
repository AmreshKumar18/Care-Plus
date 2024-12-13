import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CgUnavailable } from "react-icons/cg";
import { GrView } from "react-icons/gr";
import axios from "axios";
import { UserData } from "../../Context/UserContext";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Ambulances = () => {
  const { user } = UserData();
  const { id } = useParams();
  const [ambulance, setAmbulance] = useState([]);
  // http://localhost:4000/api/add-ambulance/668ede7a8e65b2f74b887789
  //  http://localhost:4000/api/ambulance/66e40a9d8931b6759f35109c

  const getAllAmbulance = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/ambulance/${id}`
      );
      console.log(response.data.ambulance);
      setAmbulance(response.data.ambulance);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllAmbulance();
  }, []);

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const ambulanceInfo = {
      ambulance_age: data.ambulance_age,
      ambulance_contact: data.ambulance_contact,
      ambulance_exp: data.ambulance_exp,
      ambulance_gender: data.ambulance_gender,
      ambulance_number: data.ambulance_number,
      ambulance_type: data.ambulance_type,
      driver_name: data.driver_name,
      price: data.price,
      image: data.image[0],
    };
    try {
      await axios.post(
        `http://localhost:4000/api/add-ambulance/${id}`,
        ambulanceInfo,
        {
          headers: {
            token: user.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (data) {
        toast.success("Ambulance is Added Successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <>
      <div className="ambulance_sec">
        <div className="ambulance_list">
          <h1 className=" text-center">Ambulance List</h1>
          <div className="tablefixed">
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Ambulance Number</th>
                  <th>Driver's Name</th>
                  <th>Mobile No</th>
                  <th>Types</th>
                  <th>Charges</th>
                  <th>Action</th>
                </tr>
              </thead>
              {ambulance && ambulance.length > 0 ? (
                ambulance.map((item) => (
                  <tbody>
                    <tr>
                      <td>{item._id.slice(-4)}</td>
                      <td>{item.ambulance_number}</td>
                      <td>{item.driver_name}</td>
                      <td>{item.ambulance_contact}</td>
                      <td>{item.ambulance_type}</td>
                      <td>&#8377; {item.price}</td>
                      <td>
                        <div className=" action_icon">
                          <MdCancel size={22} color="Red" />
                          <IoIosCheckmarkCircle size={22} color="green" />
                          <CgUnavailable size={22} color="blue" />
                          <GrView size={20} />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <>
                  <p>ambulance not found..</p>
                </>
              )}
            </table>
          </div>
        </div>
        <div className="ambulance_form_sec">
          <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <h1 className=" text-center text-indigo-400">
              Adding Ambulance Form
            </h1>
            <div className="ambulance_form">
              <label>Ambulance Type:</label>
              <select
                className="ambulance_type"
                {...register("ambulance_type", { required: true })}
              >
                <option>select ambulance type</option>
                <option value="Basic Life Support">Basic Life Support</option>
                <option value="Patient Life Support">
                  Patient Life Support
                </option>
                <option value="Advanced Life Support">
                  Advanced Life Support
                </option>
              </select>
              <label>Upload Ambulance Image:</label>
              <input type="file" {...register("image", { required: true })} />
              <label>Price (per Hrs.)</label>
              <input
                type="Number"
                placeholder="200"
                {...register("price", { required: true })}
              />

              <label>Ambulance Number:</label>
              <input
                type="text"
                placeholder="BR04-4438"
                {...register("ambulance_number", { required: true })}
              />

              <label>Driver's Name:</label>
              <input
                type="text"
                {...register("driver_name", { required: true })}
              />

              <label>Mobile Number:</label>
              <input
                className="appointment_input"
                type="tel"
                name="phone"
                id="phone"
                maxlength="10"
                pattern="[6789][0-9]{9}"
                placeholder="Mobile Number"
                {...register("ambulance_contact", { required: true })}
              ></input>
              <div className=" flex gap-5">
                <label>Age:</label>
                <input
                  type="Number"
                  {...register("ambulance_age", { required: true })}
                />
                <div className=" flex gap-2 ">
                  <label>Gender:</label>
                  <input
                    type="radio"
                    id="male"
                    name="age"
                    value="male"
                    {...register("ambulance_gender", { required: true })}
                  />
                  <label for="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="age"
                    value="female"
                    {...register("ambulance_gender", { required: true })}
                  />
                  <label for="female">Female</label>
                  <input
                    type="radio"
                    id="other"
                    name="age"
                    value="other"
                    {...register("ambulance_gender", { required: true })}
                  />
                  <label for="other">Others</label>
                </div>
                <label>Experiences:</label>
                <input
                  type="Number"
                  {...register("ambulance_exp", { required: true })}
                />
              </div>
              <div className=" text-center mt-5">
                <button className="btn">Add Ambulance</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Ambulances;
