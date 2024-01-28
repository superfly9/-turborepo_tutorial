import React from "react";
import styles from "./SkeletonImage.module.css";

interface Props {
  length: number;
}

function SkeletonImage({ length }: Props) {
  const count = length;
  return (
    <div className={styles.container}>
      {Array(count)
        .fill(true)
        .map((_, idx) => (
          <div key={`skeleton_${idx}`} className={styles.skeleton} />
        ))}
    </div>
  );
}

export default SkeletonImage;
