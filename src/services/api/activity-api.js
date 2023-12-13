import axios from "axios";

export const getActivity = async (type) => {
  try {
    const endpoint = type
      ? `https://www.boredapi.com/api/activity?type=${type}`
      : "https://www.boredapi.com/api/activity";
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching activity data:", error);
    return null;
  }
};