import axios from "axios";
const API_KEY = "ae2c485fd3ae14d37d300ed95d4e980a"; 

export const getWeatherByCity = async (city ) => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data by city:", error);
    return null;
  }
};

export const getWeatherByGeoLocation = async (lat, lon) => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: lon,
          appid: API_KEY,
          units: "metric",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data by geolocation:", error);
    return null;
  }
};