import React, { useEffect, useState } from "react";
import weather from "../assets/weather.png";
import axios from "axios";

const WeatherCard = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [locationKey, setLocationKey] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const accuWeatherApiKey = "kKwSr81acv2Gx4uAE95dpo2bJ5T27YOv";

  const getCurrentGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return "Good Morning!";
    } else if (currentHour < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (error) => {
            setErrorMessage("Unable to retrieve your location.");
          }
        );
      } else {
        setErrorMessage("Geolocation is not supported by your browser.");
      }
    };

    getUserLocation();
  }, []);

  // Fetch the location key from AccuWeather API based on the latitude and longitude
  useEffect(() => {
    if (location.lat && location.lon) {
      const locationUrl = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accuWeatherApiKey}&q=${location.lat},${location.lon}`;

      axios
        .get(locationUrl)
        .then((response) => {
          setLocationKey(response.data.Key); // Save the location key
        })
        .catch((error) => {
          setErrorMessage("Unable to fetch location data.");
        });
    }
  }, [location, accuWeatherApiKey]);

  // Fetch weather data using the location key from AccuWeather API
  useEffect(() => {
    if (locationKey) {
      const weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${accuWeatherApiKey}`;

      axios
        .get(weatherUrl)
        .then((response) => {
          // setWeatherData(response.data[0]); // Save weather data
          // console.log(response.data[0]);
        })
        .catch((error) => {
          setErrorMessage("Unable to fetch weather data.");
        });
    }
  }, [locationKey, accuWeatherApiKey]);

  const getIconUrl = (iconNumber) => {
    const formattedIconNumber = iconNumber.toString().padStart(2, "0"); // Ensure 2-digit icon number
    return `https://developer.accuweather.com/sites/default/files/${formattedIconNumber}-s.png`; // Use AccuWeather's icon URL format
  };

  return (
    <>
      <div className="weather_sec">
        <div className="weather_details">
          <h3>Hello, {getCurrentGreeting()}</h3>
          <h6 className=" mb-2">Welcome Home!</h6>
          {weatherData ? (
            <div>
              <div className=" flex gap-2 items-center mb-3">
                <i class="fa-light fa-temperature-high fa-2xl"></i>
                <h5>{weatherData.Temperature.Metric.Value}°C</h5>{" "}
                <h6>Outdoor temperature</h6>
              </div>
              <div className=" flex items-center">
                {weatherData.WeatherIcon && (
                  <img
                    src={getIconUrl(weatherData.WeatherIcon)}
                    alt="Weather Icon"
                  />
                )}
                <h4>{weatherData.WeatherText}</h4>
              </div>
            </div>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
        <div className="weather_img">
          <img src={weather} alt="" />
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
