import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { UserData } from "../../Context/UserContext";
import { useParams } from "react-router-dom";

const Doctors = () => {
  const { user } = UserData();
  const { id } = useParams();
  const [doctor, setDoctor] = useState([]);

  // http://localhost:4000/api/add-doctor/668ede7a8e65b2f74b887789

  const getAllDoctors = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/doctor/${id}`
      );
      console.log(response.data);
      setDoctor(response.data.doctors);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const doctorInfo = {
        image: data.image[0],
        d_name: data.d_name,
        d_age: data.d_age,
        d_gender: data.d_gender,
        d_specialist: data.d_specialist,
        d_contact: data.d_contact,
        d_email: data.d_email,
        d_experienced: data.d_experienced,
      };

      await axios.post(
        `http://localhost:4000/api/add-doctor/${id}`,
        doctorInfo,
        {
          headers: {
            token: user.token,
            "Content-Type": "multipart/form-data", // Add the token for authentication
          },
        }
      );
      if (data) {
        toast.success("Doctor Added Successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <>
      <div className="ambulance_sec ">
        <div className="ambulance_list">
          <h1 className=" text-center">Doctors List</h1>
          <div className="tablefixed">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Doctor's Name</th>
                  <th>Gender</th>
                  <th>Specialists</th>
                  <th>Mobile No</th>
                  <th>Email</th>
                  <th>Availablity</th>
                  <th>Action</th>
                </tr>
              </thead>
              {doctor && doctor.length > 0 ? (
                doctor.map((item) => (
                  <tbody>
                    <tr>
                      <td>{item._id.slice(-4)}</td>
                      <td>{item.d_name}</td>
                      <td>{item.d_gender}</td>
                      <td>{item.d_specialist}</td>
                      <td>{item.d_contact}</td>
                      <td>{item.d_email}</td>
                      <td>
                        {item.isAvailable === "false" ? (
                          <p>Not Available</p>
                        ) : (
                          <p>Available</p>
                        )}
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <p>No doctors found...</p>
              )}
            </table>
          </div>
        </div>
        <div className="ambulance_form_sec">
          <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <h1 className=" text-center text-indigo-400">Adding Doctor Form</h1>
            <div className="ambulance_form">
              <label>Doctor's Name:</label>
              <input type="text" {...register("d_name", { required: true })} />

              <label>Specialist Type:</label>
              <select
                className="ambulance_type"
                {...register("d_specialist", { required: true })}
              >
                <option>select specialist type</option>
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

              <label>Upload Doctor Image:</label>
              <input type="file" {...register("image", { required: true })} />

              <label>Mobile Number:</label>
              <input
                className="appointment_input"
                type="tel"
                name="phone"
                id="phone"
                maxlength="10"
                pattern="[6789][0-9]{9}"
                placeholder="Mobile Number"
                required="true"
                {...register("d_contact", { required: true })}
              ></input>

              <label>Email:</label>
              <input
                type="email"
                {...register("d_email", { required: true })}
              />

              <div className=" flex gap-5">
                <label>Age:</label>
                <input
                  type="Number"
                  {...register("d_age", { required: true })}
                />
                <div className=" flex gap-2 ">
                  <label>Gender:</label>
                  <input
                    type="radio"
                    id="male"
                    name="age"
                    value="male"
                    {...register("d_gender", { required: true })}
                  />
                  <label for="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="age"
                    value="female"
                    {...register("d_gender", { required: true })}
                  />
                  <label for="female">Female</label>
                  <input
                    type="radio"
                    id="other"
                    name="age"
                    value="other"
                    {...register("d_gender", { required: true })}
                  />
                  <label for="other">Others</label>
                </div>
                <label>Experiences:</label>
                <input
                  type="Number"
                  {...register("d_experienced", { required: true })}
                />
              </div>
              <div className=" text-center mt-5">
                <button className="btn">Add Doctor</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Doctors;
