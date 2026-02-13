import { useState, useMemo, useCallback, type FC } from "react";
import { Button, Card, Tabs, type TabsProps } from "antd";
import styles from "./styles.module.css";
import { SortDropdown } from "../../../../features/analytics/fiter";
import type { SortBy } from "../../../../features/analytics/fiter/type";

type ItemsFn = (sortBy: SortBy, resetToken: number) => TabsProps["items"];

type Props = {
  items: TabsProps["items"] | ItemsFn;
  type?: extraContentsType;
  tabs?: string[];
}

export type extraContentsType = "filter" | "reset" | "default";

export const ContentBLock: FC<Props> = ({ items, type = "default", tabs }) => {
  const [sortBy, setSortBy] = useState<SortBy>("sum");
  const [activeKey, setActiveKey] = useState<string>("1");
  const [resetToken, setResetToken] = useState(0);

  const resolvedItems = useMemo(
    () => typeof items === "function" ? items(sortBy, resetToken) : items,
    [items, sortBy, resetToken]
  );

  const handleReset = useCallback(() => setResetToken(t => t + 1), []);

  const showFilter = type === "filter" && (tabs ? tabs.includes(activeKey) : true);
  const showReset = type === "reset" && (tabs ? tabs.includes(activeKey) : true);

  const extraContent = showFilter
    ? <SortDropdown value={sortBy} onChange={setSortBy} />
    : showReset
    ? <Button type="text" style={{ color: "var(--color-text-black)" }} onClick={handleReset}>Сбросить</Button>
    : null;

  return (
    <Card className={styles.block}>
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        tabBarExtraContent={extraContent}
        items={resolvedItems}
      />
    </Card>
  );
};
