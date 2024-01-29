import React from "react";
import styles from "./List.module.css";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

const List = <T extends {}>({ items, renderItem }: ListProps<T>) => {
  return (
    <ul className={styles.item}>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
};

export default List;
