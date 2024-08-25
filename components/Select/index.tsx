"use client";
import Image from "next/image";
import styles from "./Select.module.scss";
import { FC, useRef, useState } from "react";
import { useAppContext,useQueryParams ,useOutsideClick, useThemeContext} from "@/hooks";
const regions = ["Africa", "America", "Asia", "Europe", "Oceania", "All"];

export const Select:FC = () => {
  const { theme } = useThemeContext();
  const { updateQueryParams } = useQueryParams();
  const {selectValue,setSelectValue} = useAppContext();
  const selectRef = useRef(null);
  useOutsideClick(selectRef,() => closeSelect());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };
  const closeSelect = () => {
    setIsOpen(false);
  }
  const onClickRegion = (region: string) => {
    setSelectValue(region);
    setIsOpen(false);

    if(region === "All"){
      updateQueryParams({region:""})
      return
    } 
    updateQueryParams({region:region});
  };

  return (
    <div ref={selectRef} className={`${styles.select} ${isOpen ? styles.openSelect : ""}`} onClick={toggleSelect}>
      <div className={styles.selectedValue}>
        <p>{selectValue}</p>
        <Image src={theme === "light"? "/arrow.svg" : "/arrow-white.svg"} width={12} height={12} alt="icon arrow" />
      </div>
      <ul className={styles.menu}>
          {regions.map((item) => (
            <li key={item} onClick={() => onClickRegion(item)}>
              {item}
            </li>
          ))}
        </ul>
    </div>
  );
};
