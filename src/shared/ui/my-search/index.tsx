import { useState, type FC } from 'react';
import styles from "./style.module.css";
import search_icon from "@/assets/icons/search.svg";
type Props = {
  onSearch: (value: string) => void,
}
export const MySearch:FC<Props> = ({onSearch}) => {
  const [value, setValue] = useState("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch(value);
  };
  return (
    <div className={styles.search}>
        <img className={styles.search_icon} src={search_icon} alt="" />
        <input
          className={styles.search_input}
          type="text"
          placeholder="Поиск"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
  );
};
