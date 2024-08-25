import { ICountryItem } from "@/types";
import { useState, useEffect } from "react";

interface UsePaginationProps<T> {
  items: ICountryItem[];
  itemsPerPage: number;
  currentPage?: number;
}

export const usePagination = <T>({
  items,
  itemsPerPage,
}: UsePaginationProps<ICountryItem[]>) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentItems, setCurrentItems] = useState<ICountryItem[]>([]);

  const pagesCount = Math.ceil(items.length / itemsPerPage) || 1;

  console.log(currentPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(items.slice(startIndex, endIndex));
  }, [items, currentPage, itemsPerPage]);

  return {
    currentPage,
    currentItems,
    pagesCount,
    setCurrentPage,
  };
};
