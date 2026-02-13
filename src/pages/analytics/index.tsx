import { useState } from "react";
import { Tabs } from "antd";
import { SelectsConst } from "../../app/const/selects";
import { MainLayout } from "../../widgets/main-layout";
import styles from "./styles.module.css";
import type { FC } from "react";
import { SelectUi } from "./ui/select";
import { AnalyticsPageContent } from "./ui/content";

export const AnalyticsPage: FC = () => {
  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);

  const tabsItems = [
    {
      key: '1',
      label: 'Топ продаж',
      children: <AnalyticsPageContent dateRange={dateRange} />,
    },
    {
      key: '2',
      label: 'Для брендов',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Power BI',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <p className={styles.title}>
            Аналитика
          </p>
          <div className={styles.selects}>
            {SelectsConst.map(val =>
              <SelectUi
                key={val.title}
                {...val}
                onDateChange={val.isCalendar ? setDateRange : undefined}
              />
            )}
          </div>
        </div>
        <Tabs defaultActiveKey="1" items={tabsItems} />
      </div>
    </MainLayout>
  );
};
