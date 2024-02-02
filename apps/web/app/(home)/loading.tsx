import Skeleton from "app/(search)/search/_component/Skeleton";
import React from "react";
import styles from "./loading.module.css";

function HomeLoading() {
  return <Skeleton length={10} />;
}
export default HomeLoading;
