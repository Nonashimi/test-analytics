import { memo, useCallback, type FC } from "react";
import { Dropdown } from "antd";
import styles from "./styles.module.css";
import FilterIcon from "@/assets/icons/filter.svg?react";
import DollarIcon from "@/assets/icons/dollar.svg?react";
import BoxIcon from "@/assets/icons/box.svg?react";
import CheckIcon from "@/assets/icons/check.svg?react";
import type { SortBy } from "./type";

type Props = {
  value: SortBy;
  onChange: (value: SortBy) => void;
};

const SortDropdownBase: FC<Props> = ({ value, onChange }) => {
  const handleClick = useCallback(
    ({ key }: { key: string }) => onChange(key as SortBy),
    [onChange]
  );

  const items = [
    {
      key: "sum",
      label: (
        <div className={styles.item}>
          <span className={styles.item_flex}>
            <DollarIcon className={styles.icon} />
            По сумме
          </span>
          {value === "sum" && <CheckIcon />}
        </div>
      ),
    },
    {
      key: "count",
      label: (
        <div className={styles.item}>
          <span className={styles.item_flex}>
            <BoxIcon className={styles.icon} />
            По количеству
          </span>
          {value === "count" && <CheckIcon />}
        </div>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items, onClick: handleClick }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <FilterIcon className={styles.trigger} />
    </Dropdown>
  );
};

export const SortDropdown = memo(SortDropdownBase);
