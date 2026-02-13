import type React from "react";
import type { TabsProps } from "antd";
import { List } from "../../../../shared/ui/list";
import { NullNotification } from "../../../../shared/ui/null-notification";
import { InfoAccardion } from "../../../../features/analytics/channel/info-accardion";
import { ManagerCard } from "../../../../features/analytics/manager/manager-card";
import { CityCard } from "../../../../features/analytics/city/city-card";
import type { TCity } from "../../../../app/const/channels/type";
import { TOP_CHANNELS } from "../../../../app/const/channels";
import { CATEGORY_CONST, MANAGER_CONST, PRODUCTS_CONST, REFUND_CONST } from "../../../../app/const/manager";
import { CITY_CONST, Clients_CONST } from "../../../../app/const/city";
import { Card } from "../../../../widgets/analytics/ui/card";
import { ChartLines } from "../../../../widgets/analytics/ui/charts";
import { ContentBLock } from "../../../../widgets/analytics/ui/content-block";
import { InfoWarehouseCard } from "../../../../widgets/analytics/ui/info";
import type { SortBy } from "../../../../features/analytics/fiter/type";
import styles from "../../styles.module.css";

const emptyManager = <NullNotification title="Нет менеджеров" text="Нет найденных менеджеров за данный период" />;
const emptyProduct = <NullNotification title="Нет товаров" text="Нет найденных товаров за данный период" />;
const emptyCategories = <NullNotification title="Нет категорий товаров" text="Нет найденных категорий товаров за данный период"/>;
const emptyRefund = <NullNotification title="Нет возвратов" text="Нет возвратов за данный период"/>;
const emptyCity = <NullNotification title="Нет городов" text="Нет найденных городов за данный период"/>;
const emptyClients = <NullNotification title="Нет клиентов" text="Нет найденных клиентов за данный период"/>

function renderList<T>(items: T[], emptyNode: React.ReactNode, render: (items: T[]) => React.ReactNode): React.ReactNode {
  return items.length === 0 ? emptyNode : render(items);
}

type Props = {
  dateRange: [Date, Date] | null;
};

const sortKey = (sortBy: SortBy) => sortBy === "sum" ? "sold_amount" : "sold_quantity" as const;
const citySum = (city: TCity, sortBy: SortBy) =>
  city.channels.reduce((acc, ch) => acc + ch[sortKey(sortBy)], 0);

const filterByDate = <T extends { date: Date }>(items: T[], dateRange: [Date, Date] | null): T[] => {
  if (!dateRange) return items;
  const [start, end] = dateRange;
  return items.filter(item => item.date >= start && item.date <= end);
};

export const AnalyticsPageContent = ({ dateRange }: Props) => {
  const channelItems = (sortBy: SortBy, resetToken: number): TabsProps["items"] => [
    {
      key: '1',
      label: 'Топ каналов',
      children: <List items={[...TOP_CHANNELS].sort((a, b) => citySum(b, sortBy) - citySum(a, sortBy))} gap={10} renderItem={(channel) => <InfoAccardion key={`${channel.name}-${resetToken}`} top_channel={channel} />} />,
    },
    {
      key: '2',
      label: 'Топ менеджеров',
      children: renderList(filterByDate([...MANAGER_CONST], dateRange).sort((a, b) => (b[sortKey(sortBy)] ?? 0) - (a[sortKey(sortBy)] ?? 0)), emptyManager, (items) => <List items={items} renderItem={(manager) => <ManagerCard key={manager.title} manager={manager} />} />),
    },
  ];

  const productItems = (sortBy: SortBy): TabsProps["items"] => [
    {
      key: '1',
      label: 'Топ товаров',
      children: renderList(filterByDate([...PRODUCTS_CONST], dateRange).sort((a, b) => (b[sortKey(sortBy)] ?? 0) - (a[sortKey(sortBy)] ?? 0)), emptyProduct, (items) => <List items={items} renderItem={(manager) => <ManagerCard key={manager.title} manager={manager} />} />),
    },
    {
      key: '2',
      label: 'Топ категорий',
      children: renderList(filterByDate([...CATEGORY_CONST], dateRange).sort((a, b) => (b[sortKey(sortBy)] ?? 0) - (a[sortKey(sortBy)] ?? 0)), emptyCategories, (items) => <List items={items} renderItem={(manager) => <ManagerCard key={manager.title} manager={manager} />} />),
    },
    {
      key: "3",
      label: "Топ возвратов",
      children: renderList(filterByDate([...REFUND_CONST], dateRange).sort((a, b) => (b[sortKey(sortBy)] ?? 0) - (a[sortKey(sortBy)] ?? 0)), emptyRefund, (items) => <List items={items} renderItem={(manager) => <ManagerCard key={manager.title} manager={manager} isRefund />} />),
    },
  ];

  const clientsItems = (sortBy: SortBy): TabsProps["items"] => [
    {
      key: '1',
      label: 'Топ клиентов',
      children: renderList(filterByDate([...Clients_CONST], dateRange), emptyClients, (items) => <List items={items} renderItem={(val) => <CityCard key={val.title} value={val} />} />),
    },
    {
      key: '2',
      label: 'Топ городов',
      children: renderList(filterByDate([...CITY_CONST], dateRange).sort((a, b) => (b[sortKey(sortBy)] ?? 0) - (a[sortKey(sortBy)] ?? 0)), emptyCity, (items) => <List items={items} renderItem={(val) => <CityCard key={val.title} value={val} />} />),
    },
  ];

  return (
    <>
      <div className={styles.grid}>
        <Card/>
        <div className={styles.grid_chart}>
          <ChartLines dateRange={dateRange} />
        </div>
        <InfoWarehouseCard/>
      </div>
      <div className={styles.blocks}>
        <ContentBLock type="reset" tabs={["1"]} items={channelItems}/>
        <ContentBLock items={productItems} type="filter"/>
        <ContentBLock items={clientsItems} tabs={["2"]} type="filter"/>
      </div>
    </>
  );
};
