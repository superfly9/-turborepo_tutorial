"use client";
import { SearchTabImage } from "app/api/search/route";
import SearchInput from "components/Input";
import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./ListWithObserver.module.css";
import SkeletonImage from "components/Skeleton/Image/SkeletonImage";
import List from "components/List";

interface fetchCallback<T> {
  (): Promise<T>;
}

interface Props {
  initialList: any[];
  fetchCallback: fetchCallback<any>;
  containerStyle?: CSSProperties;
  style?: CSSProperties;
}

function ListWithObserver({
  initialList,
  fetchCallback,
  containerStyle,
  style,
}: Props) {
  const [list, setList] = useState<SearchTabImage[]>(initialList);
  const target = useRef(null);
  const imageRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target?.current) {
      observer = new IntersectionObserver(async ([entry]) => {
        if (entry?.isIntersecting) {
          const newList = await fetchCallback();
          setList((v) => [...v, ...newList]);
        }
      });
      observer?.observe(target?.current);
    }
    return () => observer?.disconnect();
  }, [target?.current]);

  const renderImage = (item: SearchTabImage, index: number) => {
    const { url, _id } = item;
    return (
      <div key={_id} className={styles.imgContainer}>
        <Image
          src={url}
          onLoad={() => {
            imageRef.current[index]?.remove();
          }}
          fill
          alt={`image_${_id}`}
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw"
        />
        <div ref={(node: HTMLDivElement) => (imageRef.current[index] = node)}>
          <SkeletonImage />
        </div>
      </div>
    );
  };

  return (
    <>
      <div style={containerStyle}>
        <List items={list} renderItem={renderImage} style={style} />
      </div>
      <div ref={target} />
    </>
  );
}

export default ListWithObserver;
