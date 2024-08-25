"use client"
import { useState, useCallback, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import CountriesService from "@/services/CountriesService";
import { ICountryItem } from "@/types";

export const useCountries = (inputValue: string) => {
  const [countries, setCountries] = useState<ICountryItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCountries = useCallback(async (query: string) => {
    try {
      setLoading(true);
      const countries = query
        ? await CountriesService.searchCountriesByName(query)
        : await CountriesService.fetchAllCountries();
      setCountries(countries);
      setError(null);
    } catch (err) {
      setError("Failed to load countries.");
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetchCountries = useDebouncedCallback(fetchCountries, 500); 

  useEffect(() => {
    debouncedFetchCountries(inputValue);
  }, [inputValue, debouncedFetchCountries]);

  return { countries, error, loading };
};
