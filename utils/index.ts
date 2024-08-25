import { Currency, Languages } from "@/types";
import queryString from 'query-string';

export const parseCurrency = (currencyObj: Currency): string => {
  const currencyCode = Object.keys(currencyObj)[0];
  const currency = currencyObj[currencyCode];
  return `${currency.name} (${currency.symbol})`;
};

export const parseLanguages = (languages: Languages): string => {
  return Object.values(languages).join(", ");
};

export const getQueryParams = (): { [key: string]: any } => {
  if (typeof window !== 'undefined') {
    const queryStringParams = window.location.search;
    const parsedParams = queryString.parse(queryStringParams);
    return parsedParams;
  }
  return {};
};