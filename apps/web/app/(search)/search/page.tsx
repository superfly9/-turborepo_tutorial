"use client";
import { useRef } from "react";
import Image from "next/image";
import { SearchTabImage } from "app/api/search/route";
import ListWithObserver from "components/List/ListWithObserver";
import SearchInput from "components/Input/SearchInput";
import SkeletonImage from "components/Skeleton/Image/SkeletonImage";

const getImage = async <T,>(): Promise<T> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/search`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("error");
  return response.json();
};

function Search() {
  const imageRef = useRef<HTMLDivElement[]>([]);
  const handleClickFeedOpenBtn = () => {};
  const renderImage = (item: SearchTabImage, index: number) => {
    const { url, _id } = item;
    return (
      <button
        key={_id}
        style={{ position: "relative", border: "none" }}
        onClick={handleClickFeedOpenBtn}
      >
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
      </button>
    );
  };

  return (
    <>
      <SearchInput />
      <ListWithObserver<SearchTabImage>
        containerStyle={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5px",
        }}
        itemStyle={{
          display: "grid",
          aspectRatio: 1,
        }}
        renderItem={renderImage}
        fetchCallback={getImage}
      />
    </>
  );
}

export default Search;
