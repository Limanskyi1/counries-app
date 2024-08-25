"use client"
import { FC } from "react";
import styles from './Pagination.module.scss';
import { usePagination } from "@/hooks";

const activePageStyles = {
  background:  "var(--title-color)",
  color: "var(--white)",
}
type Props = {
  onPageChange:(page:number) => void;
  currentPage:number;
}

export const Pagination:FC<Props> = ({onPageChange,currentPage}) => {
  const {pagesCount} = usePagination();
  const pagination =  Array(pagesCount).fill(null);

  if(pagesCount === 1){
    return null;
  }
  
  return (
    <div className={styles.pagination}>
        {pagination.map((_,index) => (
            <span key={index} style={currentPage === (index + 1) ? activePageStyles : {}} 
                  onClick={() => onPageChange(index + 1)}>{index + 1}
            </span>
            ))
        }
    </div>
  )
}
