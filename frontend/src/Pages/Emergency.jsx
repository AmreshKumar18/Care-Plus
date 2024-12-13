import React, { useEffect, useState } from "react";
import EmergencyCard from "../Components/EmergencyCard";
import { UserData } from "../Context/UserContext";

const Emergency = () => {
  const { hospitals } = UserData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location", error);
        }
      );
    }
  }, []);

  //
  const filterHospitals = () => {
    const filtered = hospitals.filter((hospitals) => {
      const isEmergency = hospitals.isemergency === true;
      const matchesSearchQuery =
        hospitals.h_name?.toLowerCase().includes(searchQuery) ||
        hospitals.h_location?.toLowerCase().includes(searchQuery);
      return isEmergency && matchesSearchQuery;
    });
    // console.log("Filtered hospitals:", filtered);
    setFilteredHospitals(filtered);
  };

  useEffect(() => {
    filterHospitals();
    window.scrollTo(0, 0);
  }, [hospitals, searchQuery]);

  //
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  return (
    <>
      <div className="container mt-24">
        <div className="mb-10 m-auto w-1/2">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
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
        <div className="hospital_section flex flex-wrap gap-10 justify-between">
          {filteredHospitals && filteredHospitals.length > 0 ? (
            filteredHospitals.map((item) => (
              <EmergencyCard
                item={item}
                key={item.id}
                userLocation={userLocation}
              />
            ))
          ) : (
            <p>No Hospitals Found...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Emergency;
