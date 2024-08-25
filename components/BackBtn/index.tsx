"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./BackBtn.module.scss";
import { useThemeContext } from "@/hooks";

export const BackBtn = () => {
  const {theme} = useThemeContext();
  const router = useRouter();
  return (
    <button className={styles.backBtn} onClick={() => router.back()}>
      <Image src={theme === "light" ? "/arrow2.svg" : "/arrow2-white.svg"} width={20} height={20} alt="arrow icon" />
      <span>Back</span>
    </button>
  );
};
