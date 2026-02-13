import { memo } from "react";
import { Card } from "antd";
import type { FC } from "react";
import type { TCityAndClients } from "../../../../app/const/city/type";
import styles from "./styles.module.css";

const fmt = (n: number) => n.toLocaleString("ru-RU") + " ₸";

type Props = {
  value: TCityAndClients;
}

const CityCardBase: FC<Props> = ({ value }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.row}>
        <div>
          <div className={styles.title}>{value.title}</div>
          {
            value.sub_title && (
              <div className={styles.sub_title}>{value.sub_title}</div>
            )
          }
          {
            value.phone && (
              <div className={styles.phone}>{value.phone}</div>
            )
          }
        </div>
        <div>
          <div className={styles.label}>Куплено на:</div>
          <div className={styles.amount_wrap}>
            <span className={styles.amount}>{fmt(value.sold_amount)}</span>
            {value.sold_quantity && (
              <span className={styles.qty}>- {value.sold_quantity} шт</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export const CityCard = memo(CityCardBase);