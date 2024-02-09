import React, { CSSProperties } from "react";
import styles from "./List.module.css";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  containerStyle?: CSSProperties;
  itemStyle?: CSSProperties;
}

const List = <T extends {}>({
  items,
  renderItem,
  containerStyle,
  itemStyle,
}: ListProps<T>) => {
  return (
    <ul className={styles.item} style={containerStyle}>
      {items.map((item, index) => (
        <li style={itemStyle} key={index}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
};

export default List;
