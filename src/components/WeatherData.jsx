"use client";

import {
  HomeButton,
  WeatherInformation,
  WeatherItem,
  WeatherItems,
  WeatherMessage,
  WeatherToActivity,
} from "@/components/Components.styled";
import { FaTemperatureLow } from "react-icons/fa";
import { WiDayRainWind, WiHumidity, WiStrongWind } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { CgCompressV } from "react-icons/cg";
import Link from "next/link";
import { useWeather } from "@/hooks/useWeather";
import { links } from "@/config/links";
import { useCity } from "@/contexts/AppStateContext";

export const WeatherData = () => {
  const { isCitySet } = useCity();
  const { data: weather, isLoading, isError } = useWeather();

  if (isLoading) {
    return <WeatherMessage>Loading weather info...</WeatherMessage>;
  }

  if (isError) {
    return <WeatherMessage>City doesn't exist</WeatherMessage>;
  }

  if (!weather) {
    return null;
  }

  return (
    <WeatherInformation>
      <h3>
        Weather in {isCitySet ? weather.name : `your location: ${weather.name}`}
      </h3>
      <WeatherItems>
        <div>
          <WeatherItem>
            <FaTemperatureLow fill="white" size="40px" />
            Temperature: {weather.main.temp}°C
          </WeatherItem>
          <WeatherItem>
            <WiDayRainWind fill="white" size="40px" />
            Main weather: {weather.weather[0].main}
          </WeatherItem>
          <WeatherItem>
            <WiStrongWind fill="white" size="40px" />
            Wind speed: {weather.wind.speed} m/s
          </WeatherItem>
        </div>
        <div>
          <WeatherItem>
            <MdVisibility fill="white" size="40px" />
            Visibility: {weather.visibility / 1000} km
          </WeatherItem>
          <WeatherItem>
            <CgCompressV fill="white" size="40px" />
            Pressure: {weather.main.pressure} mbar
          </WeatherItem>
          <WeatherItem>
            <WiHumidity fill="white" size="40px" />
            Humidity: {weather.main.humidity} %
          </WeatherItem>
        </div>
      </WeatherItems>

      <WeatherToActivity>
        <h3>Looking for some activity in this weather?</h3>
        <Link href={links.activity.href}>
          <HomeButton type="button">Press here!</HomeButton>
        </Link>
      </WeatherToActivity>
    </WeatherInformation>
  );
};
