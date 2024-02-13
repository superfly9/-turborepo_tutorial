"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./Feed.module.css";
import Link from "next/link";
import { RandomFeed } from "app/api/feed/route";
import { getData } from "util/fetch";
import { Carousel } from "antd";
import SkeletonImage from "components/Skeleton/Image/SkeletonImage";
import ListWithObserver from "components/List/ListWithObserver";
import {
  like,
  comment,
  dm,
  bookmark,
  bookMarkFilled,
  likeFilled,
} from "public";

function Feed() {
  const [liked, setLiked] = useState<boolean>(false);
  const [bookMakred, setBookMarked] = useState<boolean>(false);
  const target = useRef(null);
  const imageRef = useRef<HTMLDivElement[]>([]);

  const fetchCallback = async (): Promise<RandomFeed[]> => {
    return getData<RandomFeed>("/api/feed");
  };

  const clickBookmark = () => {
    setBookMarked((prev) => !prev);
  };
  const clickLike = () => {
    setLiked((prev) => !prev);
  };

  const renderFeed = (item: RandomFeed, rowIndex: number) => {
    const {
      images,
      firstName,
      lastName,
      description,
      _id: id,
      likeCount,
      commentCount,
    } = item;
    const nickName = `${firstName}${lastName}`;
    return (
      <>
        <article className={styles.container}>
          <Carousel>
            {images.map((src, imgIdx) => {
              const key = `${rowIndex}${imgIdx}`;
              return (
                <div className={styles.img_container} key={`img_${key}`}>
                  <Image
                    src={src}
                    alt={`${firstName}${lastName}_profile`}
                    onLoad={() => imageRef.current[rowIndex]?.remove()}
                    fill
                  />
                </div>
              );
            })}
          </Carousel>
          <article
            className={styles.loader}
            ref={(node: HTMLDivElement) => {
              if (!node) return;
              imageRef.current[rowIndex] = node;
            }}
          >
            <SkeletonImage />
          </article>
        </article>
        <article className={styles.btn}>
          <div className={styles.left_btn}>
            <button onClick={clickLike} className={styles.clickableBtn}>
              <Image
                src={liked ? likeFilled : like}
                alt="좋아요"
                width={30}
                height={30}
              />
            </button>
            <Link href={`/p${id}/comment`}>
              <Image src={comment} alt="댓글" width={30} height={30} />
            </Link>
            <Image src={dm} alt="dm" width={30} height={30} />
          </div>
          <button className={styles.clickableBtn} onClick={clickBookmark}>
            <Image
              src={bookMakred ? bookMarkFilled : bookmark}
              alt="스크랩"
              width={30}
              height={30}
            />
          </button>
        </article>
        <article>
          <strong className={styles.like}>좋아요 {likeCount}개</strong>
          <Link className={styles.profile} href={`/${id}`}>
            {nickName}
          </Link>
          <p className={styles.description}>{description}</p>
        </article>
        <article className={styles.additionalInfo}>
          <Link className={styles.comment} href={`/p${id}/comment`}>
            댓글 {commentCount}개 모두 보기
          </Link>
          <span className={styles.postDate}>4시간 전</span>
        </article>
      </>
    );
  };

  return (
    <>
      <ListWithObserver<RandomFeed>
        containerStyle={{
          position: "relative",
          aspectRatio: "1/1",
        }}
        renderItem={renderFeed}
        fetchCallback={fetchCallback}
      />
      <div ref={target} />
    </>
  );
}

export default Feed;
