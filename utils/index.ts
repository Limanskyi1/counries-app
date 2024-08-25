import { Currency, Languages } from "@/types";

export const parseCurrency = (currencyObj: Currency): string => {
  const currencyCode = Object.keys(currencyObj)[0];
  const currency = currencyObj[currencyCode];
  return `${currency.name} (${currency.symbol})`;
};

export const parseLanguages = (languages: Languages): string => {
  return Object.values(languages).join(", ");
};
