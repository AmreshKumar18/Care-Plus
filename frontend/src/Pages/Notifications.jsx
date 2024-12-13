import React, { useEffect, useState } from "react";
import { UserData } from "../Context/UserContext.jsx";
import toast from "react-hot-toast";
import axios from "axios";

const Notifications = () => {
  const { user } = UserData();
  const [notification, setNotification] = useState([]);
  const getAllNotification = async (req, res) => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api//user/notification/",
        {
          headers: { token: user.token },
        }
      );
      if (res) {
        console.log(res.data.notifications);
        setNotification(res.data.notifications);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllNotification();
  }, []);
  return (
    <>
      <div className="notification_sec">
        <h1 className=" text-center bg-indigo-400">All Notifications</h1>
        <div className="notifications mt-4">
          {/* <div className="divider"></div> */}
          {notification && notification.length > 0 ? (
            notification
              .slice()
              .reverse()
              .map((item) => (
                <div key={item._id}>
                  <h3>{item.title}</h3>
                  <p>{item.message}</p>
                  <div className="divider"></div>
                </div>
              ))
          ) : (
            <>
              <p className=" m-auto my-3">Loading...</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Notifications;
