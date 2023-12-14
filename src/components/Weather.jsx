"use client";
import React, { useState } from "react";
import {
  getWeatherByCity,
  getWeatherByGeoLocation,
} from "../services/api/weather-api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  WeatherSection,
  WeatherInput,
  WeatherByCityBox,
  WeatherInformation,
  WeatherItem,
} from "./Components.styled";
import styles from "./Components.module.css";
import { IoMdPartlySunny } from "react-icons/io";
import { WiStrongWind } from "react-icons/wi";
import { WiDayRainWind } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { FaTemperatureLow } from "react-icons/fa";
import { CgCompressV } from "react-icons/cg";

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeatherDataByCity = async () => {
    try {
      const data = await getWeatherByCity(city);
      if (data && data.weather) {
        localStorage.removeItem("weatherCondition");
        localStorage.setItem("weatherCondition", data.weather[0].main);
        setWeather(data);
      } else {
        toast.error("Location not found. Please enter a valid city.");
        setWeather(null);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("An error occurred while fetching weather data.");
      setWeather(null);
    }
  };

  const fetchWeatherDataByGeoLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const data = await getWeatherByGeoLocation(
          position.coords.latitude,
          position.coords.longitude
        );
        localStorage.removeItem("weatherCondition");
        localStorage.setItem("weatherCondition", data.weather[0].main);
        setWeather(data);
      },
      (error) => {
        console.error("Error getting location", error);
      }
    );
  };

  return (
    <>
      <WeatherSection>
        <div>
          <WeatherByCityBox>
            <WeatherInput
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter city name"
            />
            <button
              onClick={fetchWeatherDataByCity}
              disabled={!city.trim()}
              className={styles.weatherbutton}
            >
              Get Weather by City
            </button>
            <button
              onClick={fetchWeatherDataByGeoLocation}
              className={styles.weatherbutton}
            >
              Get Weather by Your Location
            </button>
          </WeatherByCityBox>
        </div>
        <div>
          <IoMdPartlySunny fill="yellow" size="300px" />
        </div>
      </WeatherSection>

      {weather && (
        <WeatherInformation>
          <h1>Weather in {weather.name || "your location"}</h1>
          <WeatherItem>
            <FaTemperatureLow fill="white" size="50px" />
            Temperature: {weather.main.temp}°C
          </WeatherItem>
          <WeatherItem>
            <WiDayRainWind fill="white" size="50px" />
            Main weather: {weather.weather[0].main}
          </WeatherItem>
          <WeatherItem>
            <WiStrongWind fill="white" size="50px" />
            Wind speed: {weather.wind.speed} m/s
          </WeatherItem>
          <WeatherItem>
            <MdVisibility fill="white" size="50px" />
            Visibility: {weather.visibility / 1000} km
          </WeatherItem>
          <WeatherItem>
            <CgCompressV fill="white" size="50px" />
            Visibility: {weather.main.pressure} mbar
          </WeatherItem>
        </WeatherInformation>
      )}
      <ToastContainer />
    </>
  );
};

export default WeatherComponent;
