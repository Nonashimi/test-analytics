import { useState } from "react";
import { Card } from "antd";
import styles from "./styles.module.css";
import ArrowLeft from "@/assets/icons/arrow-left.svg?react";
import ArrowRight from "@/assets/icons/arrow-right.svg?react";

const cards = [
  {
    rows: [
      { label: "Склад обработка:", amount: "0 ₸",         docs: "0 документов", color: null },
      { label: "Склад готово:",    amount: "1 345 222 ₸",  docs: "5 документов", color: "green" as const },
    ],
  },
  {
    rows: [
      { label: "В ожидании:",      amount: "0 ₸", docs: "0 документов", color: null },
      { label: "Касса обработка:", amount: "0 ₸", docs: "5 документов", color: "purple" as const },
    ],
  },
];

export const InfoWarehouseCard = () => {
  const [index, setIndex] = useState(0);
  const card = cards[index];
  const isFirst = index === 0;
  const isLast = index === cards.length - 1;

  return (
    <Card className={styles.info}>
      {card.rows.map(row => (
        <div key={row.label}>
          <div className={styles.info_title}>{row.label}</div>
          <div className={styles.info_flex}>
            <div className={`${styles.info_amount} ${row.color ? styles[row.color] : ""}`}>{row.amount}</div>
            <div>{row.docs}</div>
          </div>
        </div>
      ))}
      <div className={styles.arrows}>
        <div className={`${styles.arrow} ${isFirst ? styles.arrow_disabled : ""}`} onClick={() => setIndex(i => i - 1)}><ArrowLeft /></div>
        <div className={`${styles.arrow} ${isLast  ? styles.arrow_disabled : ""}`} onClick={() => setIndex(i => i + 1)}><ArrowRight /></div>
      </div>
    </Card>
  );
}