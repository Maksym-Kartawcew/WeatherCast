"use client";
import React, { useEffect, useState } from "react";
import { getActivity } from "../services/api/activity-api";
import Link from "next/link";
import {
  ActivitySection,
  ActivityTitle,
  ActivityInformation,
  ActivityItem,
  NoWeather,
  HomeButton,
} from "./Components.styled";
import { MdOutlineSportsTennis } from "react-icons/md";
import { VscReactions } from "react-icons/vsc";
import { HiOutlineArrowsExpand } from "react-icons/hi";

const ActivityPage = () => {
  const [activity, setActivity] = useState(null);
  const [weatherKnown, setWeatherKnown] = useState(true);

  useEffect(() => {
    const weatherCondition = localStorage.getItem("weatherCondition");

    if (!weatherCondition) {
      setWeatherKnown(false);
      return;
    }

    const indoorWeatherConditions = ["rain", "clouds", "snow", "mist"];
    const indoorActivities = ["diy", "cooking", "music"];
    const otherActivities = [
      "education",
      "recreational",
      "social",
      "charity",
      "relaxation",
      "busywork",
    ];

    let activityType = indoorWeatherConditions.some((condition) =>
      weatherCondition.toLowerCase().includes(condition)
    )
      ? indoorActivities[Math.floor(Math.random() * indoorActivities.length)]
      : otherActivities[Math.floor(Math.random() * otherActivities.length)];

    const fetchActivity = async () => {
      const activityData = await getActivity(activityType);
      setActivity(activityData);
    };

    fetchActivity();
  }, []);

  if (!weatherKnown) {
    return (
      <NoWeather>
        <h3> The weather is unknown, go back to get weather.</h3>
        <Link href="/weather">
          <HomeButton type="button">Go to Weather Page</HomeButton>
        </Link>
      </NoWeather>
    );
  }

  if (!activity) {
    return <ActivityItem>Loading recommended activity...</ActivityItem>;
  }

  return (
    <ActivitySection>
      <div>
        <MdOutlineSportsTennis fill="yellow" size="250px" />
      </div>
      <ActivityInformation>
        <ActivityTitle>Recommended Activity</ActivityTitle>
        <ActivityItem>
          <VscReactions fill="white" size="50px" />
          Activity: {activity.activity}
        </ActivityItem>
        <ActivityItem>
          <HiOutlineArrowsExpand fill="white" size="50px" />
          Type: {activity.type}
        </ActivityItem>
      </ActivityInformation>
    </ActivitySection>
  );
};

export default ActivityPage;
