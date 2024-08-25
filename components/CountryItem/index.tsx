import { FC, memo } from "react";
import Image from "next/image";
import styles from "./CountryItem.module.scss";
import Link from "next/link";

type Props = {
  imageSrc: string;
  population: number;
  name: string;
  region: string;
  capital: string;
  cca3:string;
};

export const CountryItem: FC<Props> = memo(
  ({ imageSrc, population, name, region, capital,cca3 }) => {
    return (
      <Link href={`/details/${cca3}`}>
        <div className={styles.countryItem}>
          <div className={styles.image}>
            <Image src={imageSrc} width={264} height={160} alt="" />
          </div>
          <div className={styles.info}>
            <h4 className={styles.title}>{name}</h4>
            <p>
              <span>Population:</span> {population.toLocaleString()}
            </p>
            <p>
              <span>Region:</span> {region}
            </p>
            <p>
              <span>Capital:</span> {capital}
            </p>
          </div>
        </div>
      </Link>
    );
  }
);

CountryItem.displayName = "CountryItem";