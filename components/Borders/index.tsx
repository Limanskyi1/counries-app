import styles from "./Borders.module.scss";
import Link from "next/link";
type Props = {
  items: string[];
};

export const Borders = ({ items }: Props) => {

  if(!items || items.length < 1){
    return <p>No borders :(</p>
  }


  return items.map((item) => (
    <Link href={`/details/${item}`}>
      <span className={styles.border}>{item}</span>
    </Link>
  ));
};
