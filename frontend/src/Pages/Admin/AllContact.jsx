import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllContact = () => {
  const [contact, setContact] = useState(null);
  const getAllContact = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:4000/api/all-contact");
      setContact(response.data.contact);
      // console.log(response.data.contact);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    getAllContact();
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
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            {contact && contact.length > 0 ? (
              contact.map((item) => (
                <>
                  <tbody>
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.fullname}</td>
                      <td>{item.issues}</td>
                      <td>{item.mob_no}</td>
                      <td>{item.description}</td>
                      <td>{item.createdAt}</td>
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

export default AllContact;
