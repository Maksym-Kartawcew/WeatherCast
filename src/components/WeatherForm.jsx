"use client";

import {
  SectionIcon,
  WeatherButton,
  WeatherByCityContainer,
  WeatherInput,
  WeatherSection,
} from "@/components/Components.styled";
import { IoMdPartlySunny } from "react-icons/io";
import { useCity } from "@/contexts/AppStateContext";

export const WeatherForm = () => {
  const { city, setCity } = useCity();
  return (
    <WeatherSection>
      <WeatherByCityContainer>
        <WeatherInput
          type="text"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
          autoFocus
          placeholder="Enter city name"
        />
        <WeatherButton onClick={() => setCity("")}>
          Get Weather by Your Location
        </WeatherButton>
      </WeatherByCityContainer>
      <SectionIcon>
        <IoMdPartlySunny fill="yellow" size="250px" />
      </SectionIcon>
    </WeatherSection>
  );
};
