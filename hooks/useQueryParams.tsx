import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import queryString from 'query-string';

export const useQueryParams = () => {
  const router = useRouter();
  const updateQueryParams = useCallback((newParams: { [key: string]: any }) => {
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
  }, [router]);
  const parsedParams = queryString.parse(location.search);
  return { parsedParams, updateQueryParams };
};
