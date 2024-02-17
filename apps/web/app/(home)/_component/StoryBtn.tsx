"use client";
import React, { useState } from "react";
import { like, likeFilled, dm } from "public";
import styles from "./StoryBtn.module.css";
import Image from "next/image";

function StoryBtn() {
  const [liked, setLiked] = useState<boolean>(false);
  const handeClickLikeBtn = () => {
    setLiked((prev) => !prev);
  };
  const handleClickDmBtn = () => {};
  return (
    <div>
      <button onClick={handeClickLikeBtn} className={styles.clickableBtn}>
        <Image
          src={liked ? likeFilled : like}
          alt="좋아요"
          width={30}
          height={30}
        />
      </button>
      <button onClick={handleClickDmBtn} className={styles.clickableBtn}>
        <Image src={dm} alt="디엠" width={30} height={30} />
      </button>
    </div>
  );
}

export default StoryBtn;
