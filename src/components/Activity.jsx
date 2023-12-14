"use client"
import React, { useEffect, useState } from "react";
import { getActivity } from "../services/api/activity-api";
import Link from "next/link"; 


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
      <div>
        <p>The weather is unknown, go back to get weather.</p>
        <Link href="/weather">Go to Weather Page</Link>
      </div>
    );
  }

  if (!activity) {
    return <div>Loading recommended activity...</div>;
  }

  return (
    <div>
      <h1>Recommended Activity</h1>
      <p>Activity: {activity.activity}</p>
      <p>Type: {activity.type}</p>
    </div>
  );
};

export default ActivityPage;
