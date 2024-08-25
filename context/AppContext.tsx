"use client";
import { createContext, useState, ReactNode, useEffect } from "react";
import { getQueryParams } from "@/utils";
import { useCountries } from "@/hooks/useCountries";
import { useFilteredCountries } from "@/hooks/useFilteredCountries";
import { IAppContext } from "@/types";

export const AppContext = createContext<IAppContext>({
  countries: [],
  setCountries: () => {},
  selectValue: "",
  setSelectValue: () => {},
  filteredCountries: [],
  inputValue: "",
  setInputValue: () => {},
  error: null,
  loading: false,
});

type AppProviderProps = {
  children: ReactNode;
};

export const itemsPerPage = 16;

export const AppProvider = ({ children }: AppProviderProps) => {
  const [selectValue, setSelectValue] = useState<string>("Filter by Region");
  const [inputValue, setInputValue] = useState<string>("");
  const { countries , error, loading } = useCountries(inputValue);
  const filteredCountries = useFilteredCountries(countries, selectValue);

  useEffect(() => {
    const { name, region } = getQueryParams();
    if (name) setInputValue(name);
    if (region) setSelectValue(region);
  }, []);

  return (
    <AppContext.Provider
      value={{
        countries,
        setCountries: () => {},
        selectValue,
        setSelectValue,
        filteredCountries,
        inputValue,
        setInputValue,
        error,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
