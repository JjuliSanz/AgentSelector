"use client";
import React, { createContext, useContext, useState } from "react";
import { agents } from "@/constants/Agents";
import { maps } from "@/constants/Maps";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);
  const [selectedMap, setSelectedMap] = useState(maps[0]);

  return (
    <StateContext.Provider
      value={{ selectedAgent, setSelectedAgent, selectedMap, setSelectedMap }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
