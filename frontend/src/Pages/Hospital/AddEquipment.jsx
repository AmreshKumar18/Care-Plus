import React from "react";
import { useForm } from "react-hook-form";
import { UserData } from "../../Context/UserContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const AddEquipment = () => {
  const { user } = UserData();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const equipmentInfo = {
        image: data.image[0],
        title: data.title,
      };

      await axios.post(
        `http://localhost:4000/api/add-equipment/${id}`,
        equipmentInfo,
        {
          headers: {
            token: user.token,
            "Content-Type": "multipart/form-data", // Add the token for authentication
          },
        }
      );
      if (data) {
        toast.success("Equipment Added Successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <div className="equipment_sec">
        <div>
          <h1 className=" text-center">Add Equipment Form</h1>
        </div>
        <div>
          <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <div className="equipment_sec_form">
              <label>Equipment Image:</label>
              <input type="file" {...register("image", { required: true })} />
              <label>Name Of Eqipment:</label>
              <input type="text" {...register("title", { required: true })} />
            </div>
            <div>
              <button className="btn">Add Equipment</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEquipment;
