"use client";
import { useThemeContext } from "@/hooks";
import { Container } from "../Container";
import styles from "./Header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Header = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeContext();

  const createLogo = () => {
    if (pathname === "/") {
      return <div className={styles.logo}>Where in the world?</div>;
    }
    return (
      <Link href="/">
        <div className={styles.logo}>Where in the world?</div>
      </Link>
    );
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrap}>
          {createLogo()}
          <div className={styles.themeToggle} onClick={toggleTheme}>
            <Image src="/moon.svg" width={20} height={20} alt="moon icon"/>
            <p>{theme === "light" ? "Light Mode" : "Dark Mode"}</p>
          </div>
        </div>
      </Container>
    </header>
  );
};


