import { useState, useEffect } from "react";
import { ICountryItem } from "@/types";

export const useFilteredCountries = (countries: ICountryItem[], selectValue: string) => {
  const [filteredCountries, setFilteredCountries] = useState<ICountryItem[]>([]);

  useEffect(() => {
    if (selectValue === "Filter by Region" || selectValue === "All") {
      setFilteredCountries(countries.slice());
    } else {
      const filtered = countries.filter((country) =>
        country.region.toLowerCase().includes(selectValue.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [selectValue, countries]);

  return filteredCountries;
};
