import type { FC } from "react";
import { ChannelStatus, type TChannel } from "../../../../app/const/channels/type";
import { Card } from "antd";
import styles from "./styles.module.css";
import SuffixIcon from "@/assets/icons/suffix.svg?react";
import FlagIcon from "@/assets/icons/flag.svg?react";
type Props = {
  channel: TChannel;
}

const fmt = (n: number) => n.toLocaleString("ru-RU") + " ₸";

export const InfoCardChannel: FC<Props> = ({ channel }) => {
  const progress = channel.progress;
  const isOver = progress >= 100;
  const status = isOver ? ChannelStatus.OVER : ChannelStatus.UNDER;
  const clampedProgress = Math.min(progress, 100);

  return (
    <Card className={styles.card} styles={{ body: { padding: 0 } }}>
      <div className={styles.card_head}>
        <span className={styles.card_name}>{channel.name}</span>
        <div className={styles.card_shipments}>
          <span className={styles.card_shipments_label}>Точки отгрузки</span>
          <span className={styles.card_shipments_count}>{channel.shipments_quantity}</span>
          <SuffixIcon />
        </div>
      </div>

      <div className={styles.card_body}>
        <div className={styles.card_col}>
          <span className={styles.card_label}>Продано: {channel.sold_quantity} шт</span>
          <span className={styles.card_value_green}>{fmt(channel.sold_amount)}</span>
        </div>
        <div className={styles.card_col}>
          <span className={styles.card_label}>План: {status}</span>
          <span className={styles.card_value}>{fmt(channel.sold_amount - channel.refund_amount)}</span>
        </div>
        <div className={styles.card_col}>
          <span className={styles.card_label}>Возвраты: {channel.refund_quantity} шт</span>
          <span className={styles.card_value_red}>
            {fmt(channel.refund_amount)}
          </span>
        </div>
      </div>

      <div className={styles.progress_wrap}>
        <div className={styles.progress_bar_bg}>
          <div
            className={styles.progress_bar_fill}
            style={{ width: `${clampedProgress}%` }}
          >
            <span className={`${styles.progress_label} ${progress >= 3 ? progress <= 97 ? "" : styles.hundred_position : styles.zero_position}`}>{progress}%</span>
          </div>
          <div className={styles.progress_flag}>
            <FlagIcon />
          </div>
        </div>
      </div>
    </Card>
  );
}
