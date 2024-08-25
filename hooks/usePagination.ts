import { ICountryItem } from "@/types";
import { useState, useEffect } from "react";
import { useAppContext } from "@/hooks";
import { itemsPerPage } from "@/context/AppContext";
import { getQueryParams } from "@/utils";

export const usePagination = () => {
  const { filteredCountries } = useAppContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentItems, setCurrentItems] = useState<ICountryItem[]>([]);
  const pagesCount = Math.ceil(filteredCountries.length / itemsPerPage) || 1;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newCurrentItems = filteredCountries.slice(startIndex, endIndex);
    setCurrentItems(newCurrentItems);
  }, [filteredCountries, currentPage]);

  useEffect(() => {
    if (currentPage > pagesCount) {
      setCurrentPage(1);
    }
  }, [pagesCount]);

  return {
    currentPage,
    currentItems,
    pagesCount,
    setCurrentPage,
  };
};
