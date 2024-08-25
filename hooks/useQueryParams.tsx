"use client"
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import queryString from 'query-string';

export const useQueryParams = () => {
  const router = useRouter();
  const [parsedParams, setParsedParams] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = queryString.parse(window.location.search);
      setParsedParams(params);
    }
  }, []);

  const updateQueryParams = useCallback((newParams: { [key: string]: any }) => {
    if (typeof window !== 'undefined') {
      const updatedParams = {
        ...parsedParams,
        ...newParams,
      };
      const filteredParams = Object.fromEntries(
        Object.entries(updatedParams).filter(([_, value]) => value !== '' && value !== undefined && value !== null)
      );
      const queryStringified = queryString.stringify(filteredParams);
      router.push(`${window.location.pathname}?${queryStringified}`);
    }
  }, [parsedParams, router]);

  return { parsedParams, updateQueryParams };
};
