import { useState, type FC } from "react";
import styles from "./styles.module.css";
import { Layout, Menu, Switch } from "antd";
import { MENU_ITEMS, SYSTEM_MENU_ITEMS } from "../main-layout/const";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeIcon from "@/assets/icons/theme.svg?react";
import ZymyranIcon from "@/assets/icons/zymyran.svg?react";
import UpDownIcon from "@/assets/icons/up-down.svg?react";
import { Line } from "../../shared/ui/line";
type Props = {
  collapsed: boolean;
}
const { Sider } = Layout;
export const Sidebar:FC<Props> = ({collapsed}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const onClick = (item: { key: string }) => {
    navigate(item.key);
  };
  return(
    <Sider
      collapsed={collapsed}
      collapsedWidth={75} 
      width={240}
      className={styles.slider}
    >
      <div className={styles.menu_list}>
        <Menu
          theme="dark"
          mode="inline"
          onClick={onClick}
          items={MENU_ITEMS}
          selectedKeys={pathname ? [pathname] : []}
          className={styles.menu}
        />
        <div className="">
        <Menu
          theme="dark"
          mode="inline"
          onClick={onClick}
          items={SYSTEM_MENU_ITEMS}
          selectedKeys={pathname ? [pathname] : []}
          className={styles.menu}
        />
        <div className={styles.theme}>
          <ThemeIcon/>
          <div className={`${styles.theme_text} ${collapsed ? styles.theme_text_collapsed : ""}`}>
            <span>Темная тема</span>
            <Switch checked={darkMode} onChange={setDarkMode} />
          </div>
        </div>
        <Line/>
        <div className={styles.section}>
          <ZymyranIcon/>
          <div className={`${styles.section_second} ${collapsed ? styles.section_second_collapsed : styles.margin_left}`}>
            <div>Zymyran Office</div>
            <UpDownIcon/>
          </div>
        </div>
        </div>
      </div>

    </Sider>

  );
}