import styles from "./styles.module.css"
export const Card = () => {
  return(
    <div className={styles.card}>
      <div className={styles.card_title}>Продажи за июль</div>
      <div className={styles.card_amount}>1 629 619 ₸</div>
      <div className={styles.card_text}>-66% от прошлого месяца</div>
      <div className={styles.card_sub_title}>План:</div>
      <div className={styles.card_flex}>
        <div className="">0 ₸</div>
        <div className="">0%</div>
      </div>
      <div className={styles.card_progress}></div>
    </div>
  );

}