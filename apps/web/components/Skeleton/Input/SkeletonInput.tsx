import React from "react";
import styles from "./SkeletonInput.module.css";

interface Props {
  size?: "sm" | "md" | "lg" | "max";
}

function SkeletonInput({ size }: Props) {
  const sizeType = size || "md";
  return <div className={`${styles.input} ${styles[sizeType]}`} />;
}

export default SkeletonInput;
