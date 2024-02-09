"use client";
import { SearchTabImage } from "app/api/search/route";
import ListWithObserver from "components/List/ListWithObserver";
import SearchInput from "components/Input/SearchInput";
import Image from "next/image";
import SkeletonImage from "components/Skeleton/Image/SkeletonImage";
import { useRef } from "react";

const getImage = async <T,>(): Promise<T> => {
  "use server";
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/search`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("error");
  return response.json();
};

async function Search() {
  const imageRef = useRef<HTMLDivElement[]>([]);
  const renderImage = (item: SearchTabImage, index: number) => {
    const { url, _id } = item;
    return (
      <div key={_id}>
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
      <SearchInput />
      <ListWithObserver<SearchTabImage>
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5px",
          marginTop: "10px",
        }}
        renderItem={renderImage}
        fetchCallback={getImage}
      />
    </>
  );
}

export default Search;
