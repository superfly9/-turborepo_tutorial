import React from "react";
import SkeletonImage from "components/Skeleton/Image/SkeletonImage";
import SkeletonInput from "components/Skeleton/Input/SkeletonInput";

export default function Loading() {
  return (
    <>
      <SkeletonInput size="max" />
      <SkeletonImage length={15} gridRepeat={3} />
    </>
  );
}
