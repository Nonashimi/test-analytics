import { memo, type FC } from "react";
import { Card } from "antd";
import styles from "./styles.module.css";
import FlagIcon from "@/assets/icons/flag.svg?react";
import type { TManager } from "../../../../app/const/manager/type";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg?react";
import photo from "@/assets/profile.png";

type Props = {
  manager: TManager;
  isRefund?: boolean;
}

const fmt = (n: number) => n.toLocaleString("ru-RU") + " ₸";

const ManagerCardBase: FC<Props> = ({ manager, isRefund }) => {
  const progress = manager.progress;
  const clampedProgress = Math.min(progress ?? 0, 100);

  return (
    <Card className={styles.card} styles={{ body: { padding: 0 } }}>
      <div className={styles.card_head}>
        <div className={styles.card_head_left}>
          <img src={photo} className={styles.card_photo} />
          <div className={styles.card_info}>
            <span className={styles.card_name}>{manager.title}</span>
            <span className={styles.card_sub}>{manager.sub_title}</span>
          </div>
        </div>
        <div className={styles.card_shipments}>
          <ArrowRightIcon />
        </div>
      </div>

      <div className={`${styles.card_body} ${!manager.remains_amount ? styles.card_body_two : ""} ${isRefund ? styles.card_body_reverse : ""}`}>
        <div className={styles.card_col}>
          <span className={styles.card_label}>Продано:</span>
          <span className={styles.card_value_green}>{fmt(manager.sold_amount)}<span className={styles.card_qty}> - {manager.sold_quantity}шт</span></span>
        </div>
        {manager.remains_amount && (
          <div className={styles.card_col}>
            <span className={styles.card_label}>Остаток:</span>
            <span className={styles.card_value}>{fmt(manager.remains_amount)} - {manager.remains_quantity}шт</span>
          </div>
        )}
        <div className={styles.card_col}>
          <span className={styles.card_label}>Возврат:</span>
          <span className={styles.card_value_red}>{fmt(manager.refund_amount)}<span className={styles.card_qty}> - {manager.refund_quantity}шт</span></span>
        </div>
      </div>

      {
        manager.progress && (
          <div className={styles.progress_wrap}>
            <div className={styles.progress_bar_bg}>
              <div
                className={styles.progress_bar_fill}
                style={{ width: `${clampedProgress}%` }}
              >
                <span className={`${styles.progress_label} ${progress ?? 0 >= 3 ? progress ?? 0 <= 97 ? "" : styles.hundred_position : styles.zero_position}`}>{progress}%</span>
              </div>
              <div className={styles.progress_flag}>
                <FlagIcon />
              </div>
            </div>
          </div>
        )
      }
    </Card>
  );
};

export const ManagerCard = memo(ManagerCardBase);
