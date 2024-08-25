"use client";
import { usePagination } from "@/hooks";
import CountriesService from "@/services/CountriesService";
import { ICountryItem } from "@/types";
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface AppContextType {
  countries: ICountryItem[];
  setCountries: Dispatch<SetStateAction<ICountryItem[]>>;
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
  filteredCountries: ICountryItem[];
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  error: any;
  loading: boolean;
}

export const AppContext = createContext<AppContextType>({
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
  const [countries, setCountries] = useState<ICountryItem[]>([]);
  const [selectValue, setSelectValue] = useState<string>("Filter by Region");
  const [filteredCountries, setFilteredCountries] = useState<ICountryItem[]>(
    []
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { setCurrentPage } = usePagination<ICountryItem>({
    items: filteredCountries,
    itemsPerPage,
  });

  useEffect(() => {
    const region = localStorage.getItem("region") || "Filter by Region";
    const name = localStorage.getItem("name") || "";
    setSelectValue(region);
    setInputValue(name);
  }, []);

  useEffect(() => {
    if (selectValue === "Filter by Region" || selectValue === "All") {
      const filteredCountries = countries.slice();
      setFilteredCountries(filteredCountries);
    } else {
      const filteredCountries = countries.filter((country) =>
        country.region.toLowerCase().includes(selectValue.toLowerCase())
      );
      setFilteredCountries(filteredCountries);
    }
  }, [selectValue, countries]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const countries = inputValue
          ? await CountriesService.searchCountriesByName(inputValue)
          : await CountriesService.fetchAllCountries();
        setCountries(countries);
        setCurrentPage(1);
        setError(null);
      } catch (err) {
        setError("Failed to load countries.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [inputValue]);

  return (
    <AppContext.Provider
      value={{
        countries,
        setCountries,
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

