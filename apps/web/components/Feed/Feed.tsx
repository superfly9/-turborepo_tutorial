"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Feed.module.css";
import { like, comment, dm, bookmark } from "public";
import Link from "next/link";
import { RandomFeed } from "app/api/feed/route";
import { getData } from "util/fetch";
import List from "components/List";

function Feed() {
  const [list, setList] = useState<RandomFeed[]>([]);

  const target = useRef(null);

  useEffect(() => {
    getData<RandomFeed>("/api/feed", 10).then((userList) => {
      setList((v) => [...v, ...userList]);
    });
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target?.current) {
      observer = new IntersectionObserver(async ([entry]) => {
        if (entry?.isIntersecting) {
          const newList = await getData<RandomFeed>("/api/feed", 10);
          setList((v) => [...v, ...newList]);
        }
      });
      observer?.observe(target?.current);
    }
    return () => observer?.disconnect();
  }, [target?.current]);

  const renderFeed = (item: RandomFeed) => {
    const { image, firstName, lastName, description, _id: id } = item;
    const nickName = `${firstName}${lastName}`;
    return (
      <>
        <article className={styles.img_container}>
          <Image src={image} alt={`${firstName}${lastName}_profile`} fill />
        </article>
        <article className={styles.btn}>
          <div className={styles.left_btn}>
            <Image src={like} alt="좋아요" width={30} height={30} />
            <Image src={comment} alt="댓글" width={30} height={30} />
            <Image src={dm} alt="dm" width={30} height={30} />
          </div>
          <Image src={bookmark} alt="스크랩" width={30} height={30} />
        </article>
        <article>
          <Link className={styles.profile} href={`/${id}`}>
            {nickName}
          </Link>
          <p className={styles.description}>{description}</p>
        </article>
        <article className={styles.additionalInfo}>
          <Link className={styles.comment} href={`/p${id}/comment`}>
            댓글 {Math.ceil(Math.random() * 50)}개 모두 보기
          </Link>
          <span className={styles.postDate}>4시간 전</span>
        </article>
      </>
    );
  };

  return (
    <div className={styles.wrapper}>
      <List
        items={list}
        renderItem={renderFeed}
        itemStyle={{
          aspectRatio: "1",
        }}
      />
      <div ref={target} />
    </div>
  );
}

export default Feed;
