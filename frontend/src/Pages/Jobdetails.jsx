import React, { useEffect, useState } from "react";
import support from "../assets/support.png";
import { SlCalender } from "react-icons/sl";
import { GrUserExpert } from "react-icons/gr";
import { TbReportMoney } from "react-icons/tb";
import { FcProcess } from "react-icons/fc";
import { GiDuration } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Jobdetails = () => {
  const [singleJob, setSingleJob] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const getSingleJob = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/job-details/${id}`
      );
      setSingleJob(res.data.jobDetails);
      console.log(res.data.jobDetails);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    getSingleJob();
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (!singleJob) {
  //   return <p>Loading...</p>;
  // }

  const htmlAbout = singleJob.about || "";
  const htmlRequirement = singleJob.requirements || "";
  const htmlResponsibility = singleJob.responsibilities || "";

  // <div dangerouslySetInnerHTML={{ __html: htmlAbout }} />
  return (
    <>
      <div className=" container mt-24 mb-16">
        <div className=" job_title_card flex justify-between items-center">
          <div className=" flex gap-10 items-center">
            <img className="company_img h-32" src={support} alt="" />
            <div>
              <p className=" font-bold text-2xl mb-3">{singleJob.title}</p>
              <p className=" mb-1">{singleJob.company}</p>
              <p className=" mb-1">
                No. of Vaccancy: {singleJob.no_of_vacancy}
              </p>
              <p>{singleJob.info?.location}</p>
            </div>
          </div>

          <div>
            <button className=" btn" onClick={() => setShowModal(true)}>
              Apply
            </button>
          </div>
        </div>
        {showModal && (
          <>
            <div className="form_apply">
              <p className=" text-center text-2xl font-bold">
                Apply for {singleJob.title}
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="fullname">Full Name:</label>
                <br />
                <input
                  type="text"
                  placeholder="enter full name..."
                  className="input input-bordered w-full"
                  {...register("fullname", { required: true })}
                />{" "}
                <br />
                {errors.fullname && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="email"
                  placeholder="enter email..."
                  className="input input-bordered w-full"
                  {...register("email", { required: true })}
                />{" "}
                <br />
                {errors.email && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
                <br />
                <label htmlFor="mobno">Mobile Number:</label>
                <input
                  type="tel"
                  maxlength="10"
                  pattern="[6789][0-9]{9}"
                  placeholder="Mobile number"
                  className="input input-bordered w-full mb-5"
                  {...register("mob_no", {
                    required: "Mobile number is required",
                  })}
                />{" "}
                <br />
                {errors.mob_no && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
                <label>Upload Resume:</label> <br />
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                />
              </form>
              <div className=" text-center gap-3 mt-3">
                <button className="btn">Submit</button>
                <button className="btn" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </>
        )}

        {/*  */}
        <div className="job_info flex justify-between mb-10">
          <div className="date_sec flex justify-between items-center text-center">
            <div>
              <p>
                <b>Application Start Date</b>
              </p>
              <p>{singleJob.start_date} 2024</p>
            </div>
            <div>
              <SlCalender size={32} />
            </div>
          </div>
          <div className="date_sec flex justify-between items-center text-center">
            <div>
              <p>
                <b>Application End Date</b>
              </p>
              <p>{singleJob.end_date} 2024</p>
            </div>
            <div>
              <SlCalender size={32} />
            </div>
          </div>
          <div className="date_sec flex justify-between items-center text-center">
            <div>
              <p>
                <b>Hiring Process</b>
              </p>
              <p>{singleJob.hiring_process}</p>
            </div>
            <div>
              <FcProcess size={32} />
            </div>
          </div>
        </div>

        {/* job description */}

        <div className="job_description_sec">
          <p className="title_border">Job Description</p>
          <div>
            <h1>About</h1>

            <div dangerouslySetInnerHTML={{ __html: htmlAbout }} />

            <h1>Requirements</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlRequirement }} />

            <h1>Responsibility</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlResponsibility }} />
          </div>
        </div>
        {/* more information */}
        <h1 className=" text-center my-8">More Information:</h1>
        <div className="job_info flex justify-between">
          <div className="date_sec flex justify-between items-center text-center">
            <div>
              <p>
                <b>Minimum Experience</b>
              </p>
              <p>{singleJob.exp} Years</p>
            </div>
            <div>
              <GrUserExpert size={32} />
            </div>
          </div>
          <div className="date_sec flex justify-between items-center text-center">
            <div>
              <p>
                <b>Duration</b>
              </p>
              <p>Full Time</p>
            </div>
            <div>
              <GiDuration size={32} />
            </div>
          </div>
          <div className="date_sec flex justify-between items-center text-center">
            <div>
              <p>
                <b>Package</b>
              </p>
              <p>{singleJob.stipend}</p>
            </div>
            <div>
              <TbReportMoney size={32} />
            </div>
          </div>
          <div className="date_sec flex justify-between items-center text-center">
            <div>
              <p>
                <b>Location</b>
              </p>
              <p>{singleJob.location}</p>
            </div>
            <div>
              <CiLocationOn size={32} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobdetails;
