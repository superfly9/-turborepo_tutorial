import React, { CSSProperties } from "react";
import styles from "./List.module.css";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  style?: CSSProperties;
  itemStyle?: CSSProperties;
}

const List = <T extends {}>({
  items,
  renderItem,
  style,
  itemStyle,
}: ListProps<T>) => {
  return (
    <ul className={styles.item} style={style}>
      {items.map((item, index) => (
        <li style={itemStyle} key={index}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
};

export default List;
