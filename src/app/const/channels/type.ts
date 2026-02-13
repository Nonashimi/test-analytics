export const ChannelStatus = {
  OVER: "Перевыполнение",
  UNDER: "Не перевыполнено",
} as const;

export type TChannelStatus = typeof ChannelStatus[keyof typeof ChannelStatus];

export type TChannel = {
  name: string;
  shipments_quantity: number;
  sold_quantity: number;
  sold_amount: number;
  refund_quantity: number;
  refund_amount: number;
  progress: number;
}


export type TCity = {
  name: string;
  channels: TChannel[];
}