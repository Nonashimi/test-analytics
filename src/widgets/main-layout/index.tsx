import type React from "react";
import { useState, type FC } from "react";
import { Layout } from "antd";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout className={styles.layout}>
      <Header toggleCollapsed={toggleCollapsed} />
      <Layout className={styles.content} style={{ paddingLeft: collapsed ? 75 : 240 }}>
        <Sidebar collapsed={collapsed} />
        <Layout.Content className={styles.main}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}