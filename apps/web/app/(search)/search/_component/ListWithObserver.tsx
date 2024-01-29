"use client";
import { SearchTabImage } from "app/api/search/route";
import SearchInput from "components/Input";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ListWithObserver.module.css";
import SkeletonImage from "components/Skeleton/Image/SkeletonImage";

const getImage = async () => {
  const response = await fetch("/api/search");
  if (!response.ok) throw new Error("error");
  return response.json();
};

interface Props {
  initailImages: SearchTabImage[];
}

function ListWithObserver({ initailImages }: Props) {
  const [image, setImage] = useState<SearchTabImage[]>(initailImages);
  const target = useRef(null);
  const imageRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target?.current) {
      observer = new IntersectionObserver(async ([entry]) => {
        if (entry?.isIntersecting) {
          const newImage = await getImage();
          setImage((v) => [...v, ...newImage]);
        }
      });
      observer?.observe(target?.current);
    }
    return () => observer?.disconnect();
  }, [target?.current]);

  return (
    <>
      <SearchInput />
      <div className={styles.container}>
        {image.map(({ url, _id }, index) => (
          <div key={_id} className={styles.imgContainer}>
            <Image
              src={url}
              onLoad={() => {
                console.log(imageRef.current);
                imageRef.current[index]?.remove();
              }}
              fill
              alt={`image_${_id}`}
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw"
            />
            <div
              ref={(node: HTMLDivElement) => (imageRef.current[index] = node)}
            >
              <SkeletonImage />
            </div>
          </div>
        ))}
      </div>
      <div ref={target} />
    </>
  );
}

export default ListWithObserver;
