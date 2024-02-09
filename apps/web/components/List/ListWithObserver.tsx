"use client";
import { CSSProperties, useEffect, useRef, useState } from "react";
import List from "components/List";

interface fetchCallback<T> {
  (): Promise<T>;
}
interface renderItem<T> {
  (item: T, index: number): JSX.Element;
}

interface Props<T> {
  listData?: any[];
  fetchCallback: fetchCallback<T[]>;
  renderItem: renderItem<T>;
  containerStyle?: CSSProperties;
  style?: CSSProperties;
}

function ListWithObserver<T>({
  listData = [],
  fetchCallback,
  renderItem,
  containerStyle,
  style,
}: Props<T>) {
  const [list, setList] = useState(listData);
  const target = useRef(null);

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

  return (
    <>
      <div style={containerStyle}>
        <List items={list} renderItem={renderItem} style={style} />
      </div>
      <div ref={target} />
    </>
  );
}

export default ListWithObserver;
