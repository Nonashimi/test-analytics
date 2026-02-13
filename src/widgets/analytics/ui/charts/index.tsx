import { Card } from "antd";
import { Line, XAxis, CartesianGrid, Area, ComposedChart, ResponsiveContainer, ReferenceLine } from 'recharts';
import styles from "./styles.module.css";
import { chartData } from "../../../../app/const/charts";

const C_BLUE   = "#007AFF";
const C_YELLOW = "#FFCC00";
const C_RED    = "#FF383C";
const C_BORDER = "#E8E8E8";
const C_MUTED  = "#808A93";

type Props = {
  dateRange?: [Date, Date] | null;
};

export const ChartLines = ({ dateRange }: Props) => {
  const data = dateRange
    ? chartData.filter(item => item.dateValue >= dateRange[0] && item.dateValue <= dateRange[1])
    : chartData;

  const currentTotal = data.reduce((sum, item) => sum + item.current, 0);
  const previousTotal = data.reduce((sum, item) => sum + item.previous, 0);
  const returnsTotal = data.reduce((sum, item) => sum + item.returns, 0);
  const maxValue = 2000000;
  const currentDays = data.length;
  const previousDays = 154;
  const returnsDays = 3;


  const formatNumber = (num: number) => {
    if (num)
      return new Intl.NumberFormat('ru-RU').format(num) + ' ₸';
  };
  return(
    <Card className={styles.card}>
      <div>
        <div className={styles.head}>
          <div className={styles.head_block}>
            <div className={styles.head_head}>
              <div className={styles.head_title}>Текущий месяц:</div>
              <div className={`${styles.head_line} ${styles.blue}`}></div>
            </div>
            <div className={styles.head_block_content}>
              {formatNumber(currentTotal)}
              <span className={styles.content_doc}>{currentDays} док.</span>
            </div>
          </div>
          <div className={styles.head_block}>
            <div className={styles.head_head}>
              <div className={styles.head_title}>Предыдущий месяц:</div>
              <div className={`${styles.head_line} ${styles.yellow}`}></div>
            </div>
            <div className={styles.head_block_content}>
              {formatNumber(previousTotal)}
              <span className={styles.content_doc}>{previousDays} док.</span>
            </div>
          </div>
          <div className={styles.head_block}>
            <div className={styles.head_head}>
              <div className={styles.head_title}>Возвраты текущего месяца:</div>
              <div className={`${styles.head_line} ${styles.red}`}></div>
            </div>
            <div className={styles.head_block_content}>
              {formatNumber(returnsTotal)}
              <span className={styles.content_doc}>{returnsDays} док.</span>
            </div>
          </div>
        </div>
      
        <ResponsiveContainer width="100%" height={292}>
          <ComposedChart
            data={data}
            margin={{ top: 10, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="0"
              vertical={true}
              horizontal={false}
              stroke={C_BORDER}
            />
            <ReferenceLine
              y={maxValue}
              stroke={C_BORDER}
              strokeWidth={1}
            />
            <XAxis
              dataKey="date"
              tick={{ fill: C_MUTED, fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: C_BORDER }}
            />

            <Area
              type="linear"
              dataKey="previous"
              fill={`${C_YELLOW}29`}
              stroke="none"
            />

            <Area
              type="linear"
              dataKey="current"
              fill="#32ADE629"
              stroke="none"
            />

            <Area
              type="linear"
              dataKey="returns"
              fill={`${C_RED}29`}
              stroke="none"
            />

            <Line
              type="linear"
              dataKey="previous"
              stroke={C_YELLOW}
              strokeWidth={2}
              dot={{ fill: C_YELLOW, r: 3 }}
              activeDot={{ r: 5 }}
              name="Предыдущий месяц"
            />

            <Line
              type="linear"
              dataKey="current"
              stroke={C_BLUE}
              strokeWidth={2}
              dot={{ fill: C_BLUE, r: 3 }}
              activeDot={{ r: 5 }}
              name="Текущий месяц"
            />

            <Line
              type="linear"
              dataKey="returns"
              stroke={C_RED}
              strokeWidth={2}
              dot={{ fill: C_RED, r: 3 }}
              activeDot={{ r: 5 }}
              name="Возвраты текущего месяца"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}