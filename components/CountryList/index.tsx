
import { ICountryItem } from "@/types";
import { CountryItem, CountryLoader } from "@/components";
import styles from './CountryList.module.scss';

type Props = {
  error:any;
  loading:boolean;
  countries: ICountryItem[];
  currentItems:ICountryItem[];
}

export const CountryList = ({error,loading,countries,currentItems}:Props) => {
  const renderCountries = () => {
    if (error) {
      return "No matched countries :(";
    }
    if (loading) {
      return Array(20)
        .fill(null)
        .map((_, index) => <CountryLoader key={index} />);
    }
    if (countries.length > 0) {
      return currentItems.map((country, index) => (
        <CountryItem
          key={index}
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
