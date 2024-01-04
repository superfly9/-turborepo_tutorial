"use client";
import Image from "next/image";
import React from "react";
import { camera, companyLogo, dm } from "../../public";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.wrapper}>
      <Image
        src={camera}
        className={`${styles.pointer} ${styles.camera}`}
        alt="업로드"
        width={30}
        height={30}
      />
      <Image src={companyLogo} alt="인스타그램 회사" width={130} height={30} />
      <Image
        src={dm}
        className={`${styles.pointer} ${styles.dm}`}
        alt="디엠"
        width={30}
        height={30}
      />
    </div>
  );
}

export default Header;
