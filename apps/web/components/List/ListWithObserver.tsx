"use client";
import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";
import List from "components/List";

interface fetchCallback<T> {
  (): Promise<T>;
}
interface renderItem<T> {
  (item: T, index: number): ReactNode;
}

interface Props<T> {
  listData?: any[];
  fetchCallback: fetchCallback<T[]>;
  renderItem: renderItem<T>;
  containerStyle?: CSSProperties;
  itemStyle?: CSSProperties;
}

function ListWithObserver<T>({
  listData = [],
  fetchCallback,
  renderItem,
  containerStyle,
  itemStyle,
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
      <List
        items={list}
        renderItem={renderItem}
        containerStyle={containerStyle}
        itemStyle={itemStyle}
      />
      <div ref={target} />
    </>
  );
}

export default ListWithObserver;
