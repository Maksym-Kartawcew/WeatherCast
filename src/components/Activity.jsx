"use client";
import React from "react";
import Link from "next/link";
import {
  ActivitySection,
  ActivityTitle,
  ActivityInformation,
  ActivityItem,
  NoWeather,
  HomeButton,
  SectionIcon,
} from "./Components.styled";
import { MdOutlineSportsTennis } from "react-icons/md";
import { VscReactions } from "react-icons/vsc";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { useActivity } from "@/hooks/useActivity";
import { getWeatherCondition, useWeather } from "@/hooks/useWeather";
import { links } from "@/config/links";
import { useCity } from "@/contexts/AppStateContext";

export const RandomActivityComponent = () => {
  const { data: weather } = useWeather();
  const { isCitySet, city } = useCity();
  const { data, isLoading } = useActivity();

  if (!data) {
    return (
      <NoWeather>
        <h3>The weather is unknown, go back to get weather.</h3>
        <Link href={links.weather.href}>
          <HomeButton type="button">Go to Weather Page</HomeButton>
        </Link>
      </NoWeather>
    );
  }

  if (isLoading) {
    return <ActivityItem>Loading recommended activity...</ActivityItem>;
  }

  return (
    <ActivitySection>
      <SectionIcon>
        <MdOutlineSportsTennis fill="yellow" size="250px" />
      </SectionIcon>
      <ActivityInformation>
        <ActivityTitle>
          Recommended Activity for: {getWeatherCondition(weather)}
        </ActivityTitle>
        <ActivityItem>
          {isCitySet ? `City: ${city}` : "For your current location"}
        </ActivityItem>
        <ActivityItem>
          <VscReactions fill="white" size="40px" />
          Activity: {data.activity}
        </ActivityItem>
        <ActivityItem>
          <HiOutlineArrowsExpand fill="white" size="40px" />
          Type: {data.type}
        </ActivityItem>
      </ActivityInformation>
    </ActivitySection>
  );
};

