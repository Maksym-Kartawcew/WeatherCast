import React from "react";

const AppState = React.createContext(null);
export const AppStateContextProvider = AppState.Provider;

const useAppStateContext = () => React.useContext(AppState);

export const useCity = () => {
  const appState = useAppStateContext();
  return {
    city: appState.city,
    setCity: appState.setCity,
    isCitySet: appState.city !== "",
  };
};
