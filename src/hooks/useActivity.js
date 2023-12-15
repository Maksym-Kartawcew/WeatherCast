import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  indoorActivities,
  indoorWeatherConditions,
  otherActivities,
} from "@/config/activitiesAndConditions";
import { getWeatherCondition, useWeather } from "@/hooks/useWeather";

const getActivityTypeByWeather = (weather) => {
  const weatherCondition = getWeatherCondition(weather);
  if (!weatherCondition) {
    return null;
  }

  return indoorWeatherConditions.some((condition) =>
    weatherCondition.toLowerCase().includes(condition)
  )
    ? indoorActivities[Math.floor(Math.random() * indoorActivities.length)]
    : otherActivities[Math.floor(Math.random() * otherActivities.length)];
};

export const useActivity = () => {
  const { data: weather } = useWeather();
  const type = getActivityTypeByWeather(weather);

  return useQuery({
    queryKey: ["activityByType", type],
    enabled: type !== null,
    queryFn: () =>
      axios
        .get("https://www.boredapi.com/api/activity", {
          params: {
            type,
          },
        })
        .then((response) => response.data),
  });
};
