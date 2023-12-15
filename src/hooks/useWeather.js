import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useCity } from "@/contexts/AppStateContext";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const useWeather = () => {
  const { city, isCitySet } = useCity();
  const weatherByCurrentLocation = useWeatherByGeoLocation();
  const weatherByCity = useWeatherByCity();

  return isCitySet ? weatherByCity : weatherByCurrentLocation;
};

export const getWeatherCondition = (data) => data?.weather[0].main ?? null;

export const useWeatherByCity = () => {
  const { city } = useCity();
  return useQuery({
    queryKey: ["weatherByCity", city],
    enabled: city !== "",
    queryFn: async () => {
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
    },
  });
};

export const useWeatherByGeoLocation = () => {
  const [userLocation, setUserLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting location", error);
      }
    );
  }, []);

  return useQuery({
    queryKey: ["weatherByGeoLocation", userLocation.lat, userLocation.lon],
    enabled: userLocation.lat !== null && userLocation.lon !== null,
    queryFn: async () => {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: userLocation.lat,
            lon: userLocation.lon,
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      return response.data;
    },
  });
};
