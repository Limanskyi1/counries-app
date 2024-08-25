"use client"
import { ChangeEvent, FC } from 'react';
import styles from './InputSearch.module.scss';
import Image from 'next/image';
import { useAppContext, useQueryParams, useThemeContext } from '@/hooks';

export const InputSearch:FC = () => {
  const {theme} = useThemeContext();
  const { updateQueryParams } = useQueryParams();
  const { inputValue, setInputValue } =
  useAppContext();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    updateQueryParams({ name: newValue });
    if (newValue.length >= 1) {
      localStorage.setItem("name", newValue);
    } else {
      localStorage.removeItem("name");
    }
  };
  const resetInput = () => {
    setInputValue("");
    updateQueryParams({ name: "" });
    localStorage.removeItem("name");
  }

  return (
    <div className={styles.inputSearch}>
        <Image src={theme === "light" ? "/search.svg":"/search2.svg"} width={18} height={18} alt='search icon'/>
        <input value={inputValue} onChange={onChangeInput} placeholder='Search for a country…' type="text" />
        {inputValue.length >= 1 && <Image onClick={resetInput} src={theme === "light" ? "/close.svg":"/close2.svg"} width={18} height={18} alt='close icon'/>}     
    </div>
  )
}
