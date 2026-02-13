import type { TCity } from "./type";

export const TOP_CHANNELS: TCity[] = [
  {
    name: "Алматы",
    channels:[
        { name: "Kaspi",       shipments_quantity: 8, sold_quantity: 7, sold_amount: 480_000, refund_quantity: 1, refund_amount: 42_000, progress: 0 },
        { name: "2GIS",        shipments_quantity: 3, sold_quantity: 3, sold_amount: 145_000, refund_quantity: 0, refund_amount:      0, progress: 100 },
      ],
  },
  {
    name: "Шымкент",
    channels: [
        { name: "Kaspi",       shipments_quantity: 7, sold_quantity: 6, sold_amount: 320_000, refund_quantity: 1, refund_amount: 28_000, progress: 56 },
        { name: "Ozon",        shipments_quantity: 4, sold_quantity: 3, sold_amount: 160_000, refund_quantity: 1, refund_amount: 18_000, progress: 45 },
      ],
  },
  {
    name: "Астана",
    channels: [
        { name: "Kaspi",       shipments_quantity: 9, sold_quantity: 8, sold_amount: 490_000, refund_quantity: 1, refund_amount: 55_000, progress: 88 },
      ],
  },
];