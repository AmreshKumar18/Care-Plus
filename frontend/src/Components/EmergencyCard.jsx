import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emergency from "../assets/emergency.png";
import star from "../assets/star.png";
import location from "../assets/location.png";
import { FaDirections } from "react-icons/fa";

const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Radius of the Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const EmergencyCard = ({ item, userLocation }) => {
  // console.log(item.latitude);

  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (userLocation && item.latitude && item.longitude) {
      const dist = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        item.latitude,
        item.longitude
      );
      setDistance(dist.toFixed(2)); // Round to 2 decimal places
      console.log(dist.toFixed(2));
    }
  }, [userLocation, item]);
  const generateGoogleMapsUrl = () => {
    if (userLocation && item.latitude && item.longitude) {
      return `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${item.latitude},${item.longitude}`;
    }
    return "#"; // Fallback URL
  };

  return (
    <>
      <div className="card text-center w-96">
        <img
          src={`http://localhost:4000/${item.image}`}
          alt=""
          className="job__image p-3"
        />
        <div className=" flex justify-between items-center px-3">
          <p className="emergency_title text-xl font-bold mb-2">
            {item.h_name}
          </p>
          <img src={emergency} alt="" className=" h-10" />
        </div>
        <div className=" flex items-center gap-2 pl-3">
          <img src={star} alt="" className="w-4 h-4" />
          <p style={{ fontSize: 16 }}>
            {item.rating} <span> | </span>{" "}
            <span> {item.numReviews} Reviews</span>
          </p>
        </div>
        <div className=" flex items-center gap-2 pl-3">
          <img src={location} alt="" className="w-4 h-4" />
          <p style={{ fontSize: 16 }}>{item.h_location}</p>
        </div>
        <div className=" text-left pl-3">
          <p>{item.h_type}</p>
        </div>
        <div className=" text-left pl-3">
          <p>&#8377; {item.amount}</p>
        </div>
        <div className=" text-left pl-3">
          {distance && (
            // Make the distance clickable to open Google Maps
            <div className=" flex items-center gap-2">
              <FaDirections size={20} />
              <p className=" text-blue-400">
                <a
                  href={generateGoogleMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {distance} km away
                </a>
              </p>
            </div>
          )}
        </div>
        <Link to={`/hospitals-details/${item._id}`}>
          <button className="button btn border-none m-3">View Profile</button>
        </Link>
      </div>
    </>
  );
};

export default EmergencyCard;
