
"use client"
import { CountryItem, CountryLoader } from "@/components";
import styles from './CountryList.module.scss';
import { ICountryItem } from "@/types";

type Props = {
  error:any;
  loading:boolean;
  currentItems:ICountryItem[];
}

export const CountryList = ({error,loading,currentItems}:Props) => {

  const renderCountries = () => {
    if (error) {
      return "No matched countries :(";
    }
    if (loading) {
      return Array(20)
        .fill(null)
        .map((_, index) => <CountryLoader key={index} />);
    }
    if (currentItems.length > 0) {
      return currentItems.map((country) => (
        <CountryItem
          key={country.cca3}
          imageSrc={country.flags.png}
          population={country.population}
          name={country.name.common}
          region={country.region}
          capital={country.capital}
          cca3={country.cca3}
        />
      ));
    }
  };

  return (
    <div className={styles.countryList}>{renderCountries()}</div>
  )
}
