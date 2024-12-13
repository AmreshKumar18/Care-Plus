import React, { useEffect } from "react";
import { UserData } from "../../Context/UserContext";
import { useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";
import { TimePicker } from "@hilla/react-components/TimePicker.js";

const UpdateAppointment = () => {
  // http://localhost:4000/api/edit-appointment/66ed0fbf1fbdf47d8d38671a
  const { user } = UserData(); // Assuming UserContext provides user info
  // console.log(user);
  const { id } = useParams();
  const today = new Date();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  // appointment profile fetch

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/edit-appointment/${id}`,
          { headers: { token: user.token } }
        );
        const { data } = response;
        console.log(data);

        // Set form values with fetched data
        setValue("fullname", data.appointment.fullname);
        setValue("mob_no", data.appointment.mob_no);
        setValue("dignosis", data.appointment.dignosis);
        setValue("gender", data.appointment.gender);
        setValue("detailed_dignosis", data.appointment.detailed_dignosis);
        const appointmentDate = new Date(data.appointment.appointment_date);
        setValue("appointment_date", appointmentDate);
        setValue("appointment_time", data.appointment.appointment_time);
        setValue("status", data.appointment.status);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch profile");
      }
    };
    fetchAppointment();
  }, [id, user.token, setValue]);

  //  appointment profile update
  const onSubmit = async (formData) => {
    try {
      await axios.put(
        `http://localhost:4000/api/edit-appointment/${id}`,
        formData,
        { headers: { token: user.token } }
      );
      toast.success("Appointment updated successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <>
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
          <label for="status">Status:</label>
          <select
            id="status"
            {...register("status", { required: true })}
            className="appointment_input"
          >
            <option>Choose Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Alloted">Alloted</option>
            <option value="Cancelled">Cancelled</option>
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
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Detailed diagnosis:</label>
          <textarea
            className="appointment_input"
            placeholder="describe"
            {...register("detailed_dignosis", { required: true })}
          ></textarea>
          <br />
          <div className=" text-center">
            <button className="btn">Update Appointment</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateAppointment;
