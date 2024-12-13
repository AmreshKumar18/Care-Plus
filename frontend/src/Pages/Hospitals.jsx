import React, { useCallback, useEffect, useState } from "react";
import Hospitalcard from "../Components/Hospitalcard";
import { UserData } from "../Context/UserContext";

const Hospitals = () => {
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
  const filterHospitals = useCallback(() => {
    const filtered = hospitals.filter((hospital) => {
      const isEmergency = hospital.isemergency === false;
      const matchesSearchQuery =
        hospital.h_name?.toLowerCase().includes(searchQuery) ||
        hospital.h_location?.toLowerCase().includes(searchQuery);
      return isEmergency && matchesSearchQuery;
    });
    setFilteredHospitals(filtered);
  }, [hospitals, searchQuery]);

  useEffect(() => {
    filterHospitals();
  }, [filterHospitals]);

  //
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  //

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mt-24">
        {/* <div>
          {userLocation ? (
            <div>
              <p>{distance} kilometers</p>
            </div>
          ) : (
            <p>Getting your location...</p>
          )}
        </div> */}
        <div className=" mb-10 m-auto w-full md:w-1/2">
          <label className="input input-bordered flex items-center gap-2 mx-10">
            <input
              type="text"
              className="grow"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search Hospital's Name, Location..."
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
        {/* flex justify-between flex-wrap gap-10 */}
        <div className="hospital_section flex justify-between flex-wrap gap-10">
          {filteredHospitals && filteredHospitals.length > 0 ? (
            filteredHospitals.map((item) => (
              <Hospitalcard
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
export default Hospitals;
