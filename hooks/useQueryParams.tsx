"use client"
import { useRouter } from 'next/navigation';
import queryString from 'query-string';

export const useQueryParams = () => {
  const router = useRouter();
  const updateQueryParams = (newParams: { [key: string]: any }) => {
    if (typeof window !== 'undefined'){
      const parsedParams = queryString.parse(location.search);
      const updatedParams = {
        ...parsedParams,
        ...newParams,
      };
      const filteredParams = Object.fromEntries(
        Object.entries(updatedParams).filter(([_, value]) => value !== '' && value !== undefined && value !== null)
      );
      const queryStringified = queryString.stringify(filteredParams);
      router.push(`${location.pathname}?${queryStringified}`);
    }
  };
  const parsedParams = typeof window !== 'undefined' && queryString.parse(location.search);
  return { parsedParams, updateQueryParams };
};
