"use client";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";

async function getData(url: string, count: number) {
  const response = await fetch(`./${url}?count=${count}`);
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default function Page(): JSX.Element {
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
    <main
      className={styles.main}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {list.map((name: string, index) => (
        <li
          style={{ display: "block", height: "20vh" }}
          key={`${name} - ${index}`}
        >
          {name}
        </li>
      ))}
      <div ref={target} />
    </main>
  );
}
