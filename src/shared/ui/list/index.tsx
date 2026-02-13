import type { ReactNode } from "react";
import styles from "./styles.module.css";

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  gap?: number;
  className?: string;
}

export function List<T>({ items, renderItem, gap = 5, className }: Props<T>) {
  return (
    <div className={`${styles.list} ${className ?? ""}`} style={{ gap }}>
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
}
