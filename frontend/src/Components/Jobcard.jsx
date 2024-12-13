import React from "react";
import { Link } from "react-router-dom";

const Jobcard = ({ item }) => {
  return (
    <>
      <div className="card text-center w-80">
        <img
          src={`http://localhost:4000/${item.image}`}
          alt=""
          className="job__image p-3"
        />
        <p className=" text-xl font-semibold mb-2">{item.title}</p>
        <p>{item.no_of_vacancy} Openings</p>
        <Link to={`/job-details/${item._id}`}>
          <button className="button btn border-none m-3">Apply Now</button>
        </Link>
      </div>
    </>
  );
};

export default Jobcard;
