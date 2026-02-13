import type { FC } from "react";
import styles from "./styles.module.css";
import MenuIcon from "@/assets/icons/menu.svg?react";
import MessageIcon from "@/assets/icons/message.svg?react";
import profile_photo from "@/assets/profile.png";
import NotifIcon from "@/assets/icons/notif.svg?react";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg?react";
import { MySearch } from "../../shared/ui/my-search";

type Props = {
  toggleCollapsed: () => void;
}
export const Header:FC<Props> = ({toggleCollapsed}) => {
  return(
    <div className={styles.header}>
      <MenuIcon onClick={toggleCollapsed} className={styles.header_icon} />
      <div className={styles.header_center}>
        <MySearch onSearch={() => console.log("hello")}/>
      </div>
      <div className={styles.header_right}>
        <div className={styles.icon_wrapper}>
          <MessageIcon className={styles.header_icon} />
          <span className={styles.icon_badge} />
        </div>
        <div className={styles.icon_wrapper}>
          <NotifIcon className={styles.header_icon} />
          <span className={styles.icon_badge} style={{right: 2}}/>
        </div>
        <div className="" style={{display: "flex", alignItems: "center", gap: "5px"}}>
          <div className={styles.header_profile}>
            <img src={profile_photo} alt="profile" />
          </div>
          <ArrowDownIcon className={styles.header_icon} />
        </div>
      </div>
    </div>
  );

}