import { Borders, Container,BackBtn } from "@/components";
import Image from "next/image";
import styles from './DetailsPage.module.scss';
import { ICountryItem } from "@/types";
import { parseCurrency, parseLanguages } from "@/utils";

type Props = {
  params: {
    id: string;
  };
};

const DetailsPage = async ({ params }: Props) => {
  const { id } = params;
  const data:ICountryItem[] = await fetch(`https://restcountries.com/v3.1/alpha/${id}`).then((res) => res.json());
  const country = data[0];
  return (
  <Container styles={{marginTop: "clamp(30px,5.5vw,80px)"}}>
    <BackBtn/>
    <div className={styles.details}>
      <div className={styles.image}>
        <Image src={country.flags.png} width={560} height={400} alt="country image"/>
      </div>
      <div className={styles.info}>
        <h2>{country.name.common}</h2>
        <div className={styles.infoRow}>
          <div className={styles.infoCol}>
            <p><span>Native Name:</span> {country.nativeName || country.name.common}</p>
            <p><span>Population:</span> {country.population.toLocaleString()}</p>
            <p><span>Region:</span> {country.region}</p>
            <p><span>Sub Region:</span> {country.subregion}</p>
            <p><span>Capital:</span> {country.capital}</p>
          </div>
          <div className={styles.infoCol}>
            <p><span>Top Level Domain:</span> {country.tld}</p>
            <p><span>Currencies:</span> {parseCurrency(country.currencies)}</p>
            <p><span>Languages:</span> { parseLanguages(country.languages)}</p>
          </div>
        </div>
        <div className={styles.borders}>
          <p>Border Countries: </p>
          <Borders items={country.borders}/>
        </div>
      </div>
    </div>
  </Container>);
};

export default DetailsPage;
