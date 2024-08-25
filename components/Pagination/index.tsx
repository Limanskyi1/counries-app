import { FC } from "react";
import styles from './Pagination.module.scss';
type Props = {
    pagesCount: number
    currentPage: number
    onPageChange:(page: number) => void
}
export const Pagination:FC<Props> = ({pagesCount,currentPage,onPageChange}) => {

  if(pagesCount === 1){
    return null;
  }

  return (
    <div className={styles.pagination}>
        {
        Array(pagesCount).fill(null).map((_,index) => (
            <span key={index} style={currentPage === (index + 1) ? {
                background:  "var(--title-color)",
                color: "var(--white)",
            } : {}} onClick={() => onPageChange(index + 1)}>{index + 1}</span>
        ))}
    </div>
  )
}
