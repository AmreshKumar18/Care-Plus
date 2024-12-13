import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { UserData } from "../../Context/UserContext";

const Users = () => {
  const { id } = useParams();

  const { user, users, numUsers } = UserData();
  // console.log(users);
  const [searchQuery, setSearchQuery] = useState("");
  const [allUser, setAllUser] = useState([]);
  const [updateUser, setUpdateUser] = useState({ users });

  const filteredUser = () => {
    const filtered = users.filter((users) =>
      users.email.toLowerCase().includes(searchQuery)
    );
    setAllUser(filtered);
  };

  useEffect(() => {
    filteredUser();
  }, [users, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  // http://localhost:4000/api/all-users
  // const [users, setUsers] = useState([]);
  // const [numUsers, setNumUsers] = useState(0);

  // const allUsers = async (req, res) => {
  //   const response = await axios.get("http://localhost:4000/api/all-users");
  //   console.log(response.data.allUsers);
  //   setUsers(response.data.allUsers);
  //   setNumUsers(response.data);
  //   try {
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };
  // useEffect(() => {
  //   allUsers();
  // });

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/user/${id}`,
        {
          headers: {
            token: user.token,
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        // Update the job list after deleting the job
        setUpdateUser(updateUser.filter((users) => users._id !== id));
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <div className="admin_container">
        <div className=" my-5 m-auto w-full md:w-1/2">
          <label className="input input-bordered flex items-center gap-2 mx-10">
            <input
              type="text"
              className="grow"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by email, number..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <p>Total Users: {numUsers.numUsers}</p>
        <div className="tablefixed">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>D.O.B</th>
                <th>Aadhar No.</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            {allUser && allUser.length > 0 ? (
              allUser.map((item) => (
                <>
                  <tbody>
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.fullname}</td>
                      <td>{item.email}</td>
                      <td>{item.mob_no}</td>
                      <td>{item.dob}</td>
                      <td>{item.adhar_no}</td>
                      <td>{item.role}</td>
                      <td>
                        <div className=" flex justify-between">
                          <div
                            className="tooltip text-pink-500"
                            data-tip="add hospital"
                          >
                            <i class="fa-solid fa-circle-plus"></i>
                          </div>
                          <div
                            className="tooltip text-green-500"
                            data-tip="edit"
                          >
                            <Link to={`/admin/update-user-profile/${item._id}`}>
                              <i class="fa-solid fa-pen-to-square"></i>
                            </Link>
                          </div>
                          <div
                            className="tooltip text-red-500"
                            data-tip="delete"
                          >
                            <Link onClick={() => handleDelete(item._id)}>
                              <i class="fa-solid fa-trash-can"></i>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))
            ) : (
              <p>No Users Yet!!</p>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
