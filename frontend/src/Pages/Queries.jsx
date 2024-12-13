import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Queries = () => {
  const [complaint, setComplaint] = useState(null);

  const getAllComplaints = async (req, res) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/all-complaints"
      );
      setComplaint(response.data.complaints);
      // console.log(response.data.complaints);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    // http://localhost:4000/api/all-complaints
    getAllComplaints();
  });
  return (
    <>
      <div className="admin_container">
        <div className="tablefixed">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Issues</th>
                <th>Contact No.</th>
                <th>Details</th>
                <th>Proof</th>
                <th>Action</th>
              </tr>
            </thead>
            {complaint && complaint.length > 0 ? (
              complaint.map((item) => (
                <>
                  <tbody>
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.fullname}</td>
                      <td>{item.reg_issues}</td>
                      <td>{item.mob_no}</td>
                      <td>{item.describe_issues}</td>
                      <td>{item.image}</td>
                    </tr>
                  </tbody>
                </>
              ))
            ) : (
              <p>No Complaint Yet!!</p>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Queries;
