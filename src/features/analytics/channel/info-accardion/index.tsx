import { memo, useState, useCallback, type FC } from "react";
import type { TCity } from "../../../../app/const/channels/type";
import UpDownIcon from "@/assets/icons/up-down-gray.svg?react";
import DownUpIcon from "@/assets/icons/down-up-gray.svg?react";
import styles from "./styles.module.css";
import { List } from "../../../../shared/ui/list";
import { InfoCardChannel } from "../info-card";

type Props = {
  top_channel: TCity;
};

const InfoAccardionBase: FC<Props> = ({ top_channel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.header}
        onClick={toggle}
      >
        <div className={styles.header_left}>
          {isOpen ? <DownUpIcon /> : <UpDownIcon />}
          <span className={styles.name}>{top_channel.name}</span>
        </div>
        <span className={styles.count}>{top_channel.channels.length} кан.</span>
      </button>

      <div className={`${styles.body} ${isOpen ? styles.body_open : ""}`}>
        <div className={styles.body_inner}>
          <List
            items={top_channel.channels}
            renderItem={(val) => (
              <InfoCardChannel key={val.name} channel={val} />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export const InfoAccardion = memo(InfoAccardionBase);
