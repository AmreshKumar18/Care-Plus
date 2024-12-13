import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { UserData } from "../../Context/UserContext";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Career = () => {
  const { user, jobs } = UserData();
  console.log(jobs);
  const [jobList, setJobList] = useState(jobs);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/job/${id}`,
        {
          headers: {
            token: user.token, // Add the token for authentication
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        // Update the job list after deleting the job
        setJobList(jobList.filter((jobs) => jobs._id !== id));
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error deleting job");
    }
  };

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
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Sanitize or handle HTML string data correctly
    const JobInfo = {
      image: data.image[0],
      title: data.title,
      company: data.company,
      no_of_vacancy: data.no_of_vacancy,
      about: data.about, // Ensure it is always a string
      requirements: data.requirements, // Ensure it is always a string
      responsibilities: data.responsibilities, // Ensure it is always a string
      hiring_process: data.hiring_process,
      stipend: data.stipend,
      duration: data.duration,
      location: data.location,
      exp: data.exp,
      start_date: data.start_date,
      end_date: data.end_date,
    };

    await axios
      .post("http://localhost:4000/api/jobs", JobInfo, {
        headers: { token: user.token, "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => {
        if (data) {
          toast.success("job Created");
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error during job posting");
        }
      });
  };

  return (
    <>
      <div className="job_form_sec">
        <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
          <h1 className=" text-center">Jobs Form</h1>
          <div className="ambulance_form">
            <label>Upload Image:</label>
            <input
              type="file"
              name="image"
              {...register("image", { required: true })}
            />
            <label>Title for Post:</label>
            <input type="text" {...register("title", { required: true })} />
            <label>Company's Name:</label>
            <input type="text" {...register("company", { required: true })} />
            <label>No. of Posts:</label>
            <input
              type="Number"
              placeholder="200"
              {...register("no_of_vacancy", { required: true })}
            />
            <label>About:</label>
            <div className="editor">
              <Controller
                name="about"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <ReactQuill theme="snow" modules={modules} {...field} />
                )}
                rules={{ required: true }}
              />
            </div>
            <label>Requirements:</label>
            <div className="editor">
              <Controller
                name="requirements"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <ReactQuill theme="snow" modules={modules} {...field} />
                )}
                rules={{ required: true }}
              />
            </div>
            <label>Responsibilities:</label>
            <div className="editor">
              <Controller
                name="responsibilities"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <ReactQuill theme="snow" modules={modules} {...field} />
                )}
                rules={{ required: true }}
              />
            </div>
            <label>Hiring Process:</label>
            <input
              type="text"
              {...register("hiring_process", { required: true })}
            />
            <label>Duration:</label>
            <input type="text" {...register("duration", { required: true })} />
            <div className=" flex gap-5">
              <label>Stipend:</label>
              <input
                type="Number"
                {...register("stipend", { required: true })}
              />
              <label>Location:</label>
              <input
                type="text"
                {...register("location", { required: true })}
              />
              <label>Experiences:</label>
              <input type="Number" {...register("exp", { required: true })} />
            </div>
            <label>Starting Process:</label>
            <Controller
              control={control}
              name="start_date"
              rules={{ required: "Start date is required" }}
              render={({ field }) => (
                <DatePicker
                  placeholderText="MM-DD-YYYY"
                  className="input input-bordered mb-5"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
              )}
            />
            {errors.start_date && <p>This field is required</p>}
            <label>Ending Process:</label>
            <Controller
              control={control}
              name="end_date"
              rules={{ required: "End date is required" }}
              render={({ field }) => (
                <DatePicker
                  placeholderText="MM-DD-YYYY"
                  className="input input-bordered mb-5"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
              )}
            />
            {errors.end_date && <p>This field is required</p>}
            <div className=" text-center mt-5">
              <button className="btn">Post Job</button>
            </div>
          </div>
        </form>
        <div className=" mt-10">
          <p>Total Active Jobs: {jobs.length}</p>
          <div className="tablefixed">
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Post Name</th>
                  <th>Company</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>total Posts</th>
                  <th>Action</th>
                </tr>
              </thead>
              {jobs && jobs.length > 0 ? (
                jobs.map((item) => (
                  <tbody>
                    <tr>
                      <td>{item._id.slice(-4)}</td>
                      <td>{item.title}</td>
                      <td>{item.company}</td>
                      <td>{item.start_date}</td>
                      <td>{item.end_date}</td>
                      <td>{item.no_of_vacancy}</td>
                      <td>
                        <div className=" action_icon">
                          <button
                            className="delete_icon"
                            onClick={() => handleDelete(item._id)}
                          >
                            <MdOutlineDelete />
                          </button>
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
      </div>
    </>
  );
};

export default Career;
