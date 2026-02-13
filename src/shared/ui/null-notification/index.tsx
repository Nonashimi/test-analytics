import type { FC } from "react";
import NotificationIcon from "@/assets/icons/notification.svg?react";
import styles from "./styles.module.css";
type Props = {
  title: string;
  text: string;
}
export const NullNotification:FC<Props> = ({title, text}) => {
  return(
    <div className={styles.card}>
      <div className="">
        <NotificationIcon/>
      </div>
      <div className={styles.card_content}>
        <div className="">{title}</div>
        <div className={styles.card_text}>{text}</div>
      </div>
    </div>
  );
}