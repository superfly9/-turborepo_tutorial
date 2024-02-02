import React, { forwardRef } from "react";
import styles from "./SkeletonImage.module.css";

interface Props {
  length?: number;
  gridRepeat?: 1 | 2 | 3 | 4 | 5;
}

function SkeletonImage({ length, gridRepeat }: Props) {
  const count = length || 1;
  const repeat = gridRepeat || 1;
  return (
    <div className={`${styles.container} ${styles[`grid_${repeat}`]}`}>
      {Array(count)
        .fill(true)
        .map((_, idx) => (
          <div key={`skeleton_${idx}`} className={styles.skeleton} />
        ))}
    </div>
  );
}

export default forwardRef(SkeletonImage);
