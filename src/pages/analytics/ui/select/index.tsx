import { useState, useRef } from "react";
import { Select, DatePicker, Button } from "antd";
import type React from "react";
import type { FC } from "react";
import type { Dayjs } from "dayjs";
import SuffixIcon from "@/assets/icons/suffix.svg?react";
import styles from "./styles.module.css";
import type { TOptions } from "../../../../app/const/selects/type";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

type RangeValue = [Dayjs | null, Dayjs | null] | null;

type Props = {
  icon: React.ReactNode;
  options?: TOptions[];
  isCalendar?: boolean;
  title: string;
  onDateChange?: (range: [Date, Date] | null) => void;
}

const { RangePicker } = DatePicker;

export const SelectUi: FC<Props> = ({ icon, options, isCalendar, title, onDateChange }) => {
  const [open, setOpen] = useState(false);
  const [confirmedValue, setConfirmedValue] = useState<RangeValue>(null);
  const pendingRef = useRef<RangeValue>(null);
  const autoCloseRef = useRef(false);

  const handleCalendarChange = (val: RangeValue) => {
    pendingRef.current = val;
    autoCloseRef.current = !!(val?.[0] && val?.[1]);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setOpen(true);
      autoCloseRef.current = false;
    } else {
      if (autoCloseRef.current) {
        autoCloseRef.current = false;
        setOpen(true);
      } else {
        pendingRef.current = confirmedValue;
        setOpen(false);
      }
    }
  };

  const handleOk = () => {
    const val = pendingRef.current;
    setConfirmedValue(val);
    setOpen(false);
    if (val?.[0] && val?.[1]) {
      onDateChange?.([val[0].toDate(), val[1].toDate()]);
    } else {
      onDateChange?.(null);
    }
  };

  return (
    <div className={styles.block}>
      {icon}
      <div className="">{title}:</div>
      {!isCalendar ? (
        <Select
          suffixIcon={<SuffixIcon />}
          className={styles.block_select}
          defaultValue={"all"}
          options={options}
        />
      ) : (
        <RangePicker
          open={open}
          value={confirmedValue}
          onOpenChange={handleOpenChange}
          onCalendarChange={(val) => handleCalendarChange(val as RangeValue)}
          suffixIcon={<SuffixIcon />}
          className={styles.block_select}
          format="MM.DD.YYYY"
          renderExtraFooter={() => (
            <Button
              type="primary"
              size="small"
              style={{ margin: "8px 0" }}
              onClick={handleOk}
            >
              ОК
            </Button>
          )}
        />
      )}
    </div>
  );
}
