"use client";
import { useEffect, useRef, useState } from "react";
import { getData } from "app/util/fetch";
import { RandomUser } from "app/api/user/route";
import Image from "next/image";

function Feed() {
  const [list, setList] = useState<RandomUser[]>([]);

  const target = useRef(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target?.current) {
      observer = new IntersectionObserver(async ([entry]) => {
        if (entry?.isIntersecting) {
          const newList = await getData<RandomUser>("/api/user", 10);
          setList((v) => [...v, ...newList]);
        }
      });
      observer?.observe(target?.current);
    }
    return () => observer?.disconnect();
  }, [target?.current]);

  return (
    <div>
      {list.map(({ _id, avatar, description, firstName, lastName }) => (
        <li style={{ display: "block", height: "20vh" }} key={_id}>
          <Image
            src={avatar}
            alt={`${firstName}${lastName}_profile`}
            width={50}
            height={50}
          />
          {description}
        </li>
      ))}
      <div ref={target} />
    </div>
  );
}

export default Feed;
