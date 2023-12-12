import Image from "next/image";
import styles from "./page.module.css";
import { headers } from "next/headers";
// import { Card } from "@repo/ui/card";
// import { Code } from "@repo/ui/code";
// import { Button } from "@repo/ui/button";

type Option = {
  cache: "force-cache";
};
async function getData(url: string, option?: Option) {
  const host = headers().get("host");
  const res = await fetch(`http://${host}${url}`, option);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page(): Promise<JSX.Element> {
  await getData("/api/user", {
    cache: "force-cache",
  });
  return <main className={styles.main}></main>;
}
