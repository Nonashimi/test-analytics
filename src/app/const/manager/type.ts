export type TManager = {
  date: Date;
  title: string;
  sub_title: string;
  sold_amount: number;
  sold_quantity: number;
  remains_quantity?: number;
  remains_amount?: number;
  refund_quantity: number;
  refund_amount: number;
  progress?: number;
}