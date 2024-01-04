"use client";
import Image from "next/image";
import React from "react";
import { like, home, search, upload, profile } from "app/public";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <Image
        src={home}
        className={`${styles.pointer} ${styles.camera}`}
        alt="홈이동 버튼"
        width={30}
        height={30}
      />
      <Image src={search} alt="검색 버튼" width={30} height={30} />
      <Image
        src={upload}
        className={`${styles.pointer} ${styles.dm}`}
        alt="게시물 업로드 버튼"
        width={30}
        height={30}
      />
      <Image
        src={like}
        className={`${styles.pointer} ${styles.dm}`}
        alt="좋아요 버튼"
        width={30}
        height={30}
      />
      <Image
        src={profile}
        className={`${styles.pointer} ${styles.dm}`}
        alt="프로필 버튼"
        width={30}
        height={30}
      />
    </div>
  );
}

export default Footer;
