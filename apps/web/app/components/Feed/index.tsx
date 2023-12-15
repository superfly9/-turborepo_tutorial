"use client";
import { useEffect, useRef, useState } from "react";
import { getData } from "../../util/fetch";

function Feed() {
  const [list, setList] = useState<string[]>([]);

  const target = useRef(null);

  useEffect(() => {
    getData("/api/user", 10).then((v) => {
      setList(v);
    });
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target.current) {
      observer = new IntersectionObserver(async ([entry]) => {
        if (entry?.isIntersecting) {
          const newList = await getData("/api/user", 10);
          setList((v) => [...v, ...newList]);
        }
      });
      observer?.observe(target.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {list.map((name: string, index) => (
        <li
          style={{ display: "block", height: "20vh" }}
          key={`${name} - ${index}`}
        >
          {name}
        </li>
      ))}
      <div ref={target} />
    </div>
  );
}

export default Feed;
