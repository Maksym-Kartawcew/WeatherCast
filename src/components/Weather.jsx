"use client";
import React, { useState } from "react";
import {
  getWeatherByCity,
  getWeatherByGeoLocation,
} from "../services/api/weather-api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        // City found, update weather data
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
        // Clear the previous weather condition
        localStorage.removeItem("weatherCondition");
        // Save the new weather condition
        localStorage.setItem("weatherCondition", data.weather[0].main);
        setWeather(data);
      },
      (error) => {
        console.error("Error getting location", error);
      }
    );
  };

  return (
    <div>
      <ToastContainer />
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeatherDataByCity} disabled={!city.trim()}>
        Get Weather by City
      </button>

      <button onClick={fetchWeatherDataByGeoLocation}>
        Get Weather by Your Location
      </button>
      {weather && (
        <div>
          <h1>Weather in {weather.name || "your location"}</h1>
          <p>Main weather: {weather.weather[0].main}</p>
          <p>Wind speed: {weather.wind.speed} m/s</p>
          <p>Visibility: {weather.visibility / 1000} km</p>
          <p>Temperature: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
