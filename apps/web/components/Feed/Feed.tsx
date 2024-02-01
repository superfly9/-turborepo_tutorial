"use client";
import { useEffect, useRef, useState } from "react";
import { getData } from "@/util/fetch";
import { RandomUser } from "app/(home)/user/route";
import Image from "next/image";
import styles from "./Feed.module.css";
import List from "components/List";
import { like, upload, profile } from "public";

function Feed() {
  const [list, setList] = useState<RandomUser[]>([]);

  const target = useRef(null);

  useEffect(() => {
    getData<RandomUser>("/user", 10).then((userList) => {
      setList((v) => [...v, ...userList]);
    });
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target?.current) {
      observer = new IntersectionObserver(async ([entry]) => {
        if (entry?.isIntersecting) {
          const newList = await getData<RandomUser>("/user", 10);
          setList((v) => [...v, ...newList]);
        }
      });
      observer?.observe(target?.current);
    }
    return () => observer?.disconnect();
  }, [target?.current]);

  const renderFeed = (item: RandomUser) => {
    const { avatar, firstName, lastName, description } = item;
    return (
      <>
        <div className={styles.img_container}>
          <Image src={avatar} alt={`${firstName}${lastName}_profile`} fill />
        </div>
        <div>
          <Image src={upload} alt="게시물" width={30} height={30} />
          <Image src={like} alt="좋아요" width={30} height={30} />
          <Image src={profile} alt="프로필" width={30} height={30} />
        </div>
        <p style={{ position: "relative" }}>{description}</p>
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
