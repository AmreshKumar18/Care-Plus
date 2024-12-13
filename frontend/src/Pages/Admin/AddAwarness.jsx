import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { UserData } from "../../Context/UserContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import axios from "axios";

const AddAwarness = () => {
  const { user } = UserData();
  const [value, setValue] = useState("");
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],

    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const awarnessInfo = {
      title: data.title,
      heading: data.heading,
      published: data.published,
      written: data.written,
      description: data.description,
      image: data.image[0],
    };
    try {
      await axios.post(
        "http://localhost:4000/api/add-awarness-title",
        awarnessInfo,
        {
          headers: {
            token: user.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (data) {
        toast.success("Awarness Posted");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <div className="admin_container">
        <div className="editor_sec">
          <h1 className=" text-center mb-5">Awarness Details</h1>
          <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <div className="equipment_sec_form">
              <label>Title:</label>
              <input type="text" {...register("title", { required: true })} />
              <label>Heading:</label>
              <input type="text" {...register("heading", { required: true })} />
              <label>Published By:</label>
              <input
                type="text"
                {...register("published", { required: true })}
              />
              <label>Written By:</label>
              <input type="text" {...register("written", { required: true })} />
              <label>Upload Image:</label>
              <input
                type="file"
                name="image"
                {...register("image", { required: true })}
              />
            </div>

            <div className="editor">
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <ReactQuill theme="snow" modules={modules} {...field} />
                )}
                rules={{ required: true }}
              />
            </div>
            <div className="text-center">
              <button className="btn mt-5">Add Awarness</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAwarness;
