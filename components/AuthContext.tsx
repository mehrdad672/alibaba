import React, { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};
type authContextType = {
  isFiltered: boolean;
  minVal: number;
  maxVal: number;
  filteredMin: number;
  filteredMax: number;
  minTimeChange: (value: number) => void;
  maxTimeChange: (value: number) => void;
  minFilterChange: (value: number) => void;
  maxFilterChange: (value: number) => void;
};
const authContextDefaultValues: authContextType = {
  isFiltered: false,
  minVal: 0,
  maxVal: 34,
  filteredMin: 0,
  filteredMax: 34,
  minTimeChange: (value: number) => {},
  maxTimeChange: (value: number) => {},
  minFilterChange: (value: number) => {},
  maxFilterChange: (value: number) => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [minVal, setMinVal] = useState<number>(0);
  const [maxVal, setMaxVal] = useState<number>(34);
  const [filteredMin, setFilteredMin] = useState<number>(0);
  const [filteredMax, setFilteredMax] = useState<number>(34);
  const minTimeChange = (mintime: number) => {
    setMinVal(mintime);
  };
  const maxTimeChange = (maxtime: number) => {
    setMaxVal(maxtime);
  };
  const maxFilterChange = (maxtime: number) => {
    setFilteredMax(maxtime);
  };
  const minFilterChange = (mintime: number) => {
    setFilteredMin(mintime);
  };

  const value = {
    isFiltered,
    minVal,
    maxVal,
    filteredMax,
    filteredMin,
    maxTimeChange,
    minTimeChange,
    maxFilterChange,
    minFilterChange,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
