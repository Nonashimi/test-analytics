import type { FC } from "react";
import styles from "./styles.module.css";
import menu_icon from "@/assets/icons/menu.svg";
import message_icon from "@/assets/icons/message.svg";
import profile_photo from "@/assets/profile.png";
import notif_icon from "@/assets/icons/notif.svg";
import arrowDown_icon from "@/assets/icons/arrow-down.svg";
import { MySearch } from "../../shared/ui/my-search";

type Props = {
  toggleCollapsed: () => void;
}
export const Header:FC<Props> = ({toggleCollapsed}) => {
  return(
    <div className={styles.header}>
      <img onClick={toggleCollapsed} src={menu_icon} alt="" />
      <div className={styles.header_center}>
        <MySearch onSearch={() => console.log("hello")}/>
      </div>
      <div className={styles.header_right}>
        <img src={message_icon} alt="" />
        <img src={notif_icon} alt="" />
        <div className="" style={{display: "flex", gap: "5px"}}>
          <div className={styles.header_profile}>
            <img src={profile_photo} alt="profile" />
          </div>
          <img src={arrowDown_icon} alt="" />
        </div>
      </div>
    </div>
  );

}