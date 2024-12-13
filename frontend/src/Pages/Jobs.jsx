import React, { useEffect } from "react";
import image from "../assets/news2.jpg";
import Jobcard from "../Components/Jobcard";
import { UserData } from "../Context/UserContext";

const Jobs = () => {
  const { jobs } = UserData();
  // console.log(jobs);
  // console.log(jobs);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" container mt-24">
        <div className="job_section flex justify-between gap-16">
          <div className="left_job_section w-1/3">
            <img src={image} alt="" className="job__image" />
          </div>
          <div className="right_job_section w-2/3 m-auto">
            <p className=" text-4xl font-bold mb-5">
              Join Our Journey to Excellence
            </p>
            <p>
              Synonymous with unparalleled healthcare, we are on the lookout for
              qualified professionals to nurture our mission of providing world
              class health care at affordable cost. We have been able to provide
              quality healthcare at affordable cost because of our people team
              of qualified doctors, nurses, paramedics and other office staff.
              We invest in our people, to bring out their best, to enable them
              to grow in their career and pursue their aspirations. We believe
              that work is part of a meaningful life. We also recognise that our
              employees are individuals with their own personal needs. Please
              click on below icons to view existing positions in various
              categories and apply online. Alternatively, you may send your CV
              to jobs@hopeviewhospital.com or call +91-495-2778317 to speak to
              an HR executive.
            </p>
          </div>
        </div>
      </div>

      {/* jobs card */}
      <div className=" container mt-20">
        <p className=" text-center text-5xl font-semibold mb-10">Openings</p>
        <div className="job_section_card mb-20">
          {jobs && jobs.length > 0 ? (
            jobs.map((item, id) => <Jobcard item={item} key={id} />)
          ) : (
            <p>No Job Yet!!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;
