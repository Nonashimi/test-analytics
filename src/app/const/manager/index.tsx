import type { TManager } from "./type";

export const MANAGER_CONST: TManager[] = [
  { title: "Айдана Сейткали",  sub_title: "Айдын опт",        date: new Date("2026-02-03"), sold_amount: 480000, sold_quantity: 7, refund_quantity: 1, refund_amount: 42000, progress: 92  },
  { title: "Нурлан Беков",     sub_title: "Альфа Трейд",      date: new Date("2026-02-05"), sold_amount: 370000, sold_quantity: 6, refund_quantity: 0, refund_amount: 0,     progress: 110 },
  { title: "Дина Ержанова",    sub_title: "Меркурий ТОО",     date: new Date("2026-02-07"), sold_amount: 210000, sold_quantity: 4, refund_quantity: 1, refund_amount: 35000, progress: 67  },
  { title: "Серик Омаров",     sub_title: "Гранд Логистик",   date: new Date("2026-02-10"), sold_amount: 320000, sold_quantity: 6, refund_quantity: 1, refund_amount: 28000, progress: 56  },
  { title: "Малика Тасова",    sub_title: "Стар Дистрибьюшн", date: new Date("2026-02-12"), sold_amount: 275000, sold_quantity: 5, refund_quantity: 0, refund_amount: 0,     progress: 82  },
  { title: "Асхат Жунусов",    sub_title: "Казпром Сервис",   date: new Date("2026-02-13"), sold_amount: 490000, sold_quantity: 8, refund_quantity: 1, refund_amount: 55000, progress: 88  },
];


export const PRODUCTS_CONST: TManager[] = [
  { title: "Смартфон Redmi Note 13",  sub_title: "артикул: 95950803030949", date: new Date("2026-02-03"), sold_amount: 1200000, sold_quantity: 6, remains_quantity: 2, remains_amount: 400000,  refund_quantity: 1, refund_amount: 200000 },
  { title: "Ноутбук Lenovo IdeaPad",  sub_title: "артикул: 95950803030949", date: new Date("2026-02-05"), sold_amount: 1490000, sold_quantity: 3, remains_quantity: 1, remains_amount: 497000,  refund_quantity: 0, refund_amount: 0      },
  { title: "Наушники Sony WH-1000XM5",sub_title: "артикул: 95950803030949", date: new Date("2026-02-07"), sold_amount:  480000, sold_quantity: 8, remains_quantity: 3, remains_amount: 180000,  refund_quantity: 2, refund_amount: 96000  },
  { title: "Планшет Samsung Tab S9",  sub_title: "артикул: 95950803030949", date: new Date("2026-02-08"), sold_amount:  960000, sold_quantity: 5, remains_quantity: 2, remains_amount: 384000,  refund_quantity: 1, refund_amount: 192000 },
  { title: "Монитор LG UltraWide",    sub_title: "артикул: 95950803030949", date: new Date("2026-02-10"), sold_amount:  750000, sold_quantity: 4, remains_quantity: 0, remains_amount: 384000,       refund_quantity: 0, refund_amount: 384000      },
  { title: "Клавиатура Logitech MX",  sub_title: "артикул: 95950803030949", date: new Date("2026-02-11"), sold_amount:  220000, sold_quantity: 9, remains_quantity: 4, remains_amount:  88000,  refund_quantity: 1, refund_amount: 22000  },
  { title: "SSD Samsung 1TB",         sub_title: "артикул: 95950803030949", date: new Date("2026-02-12"), sold_amount:  340000, sold_quantity: 7, remains_quantity: 1, remains_amount:  48000,  refund_quantity: 0, refund_amount: 0      },
  { title: "Роутер ASUS AX6000",      sub_title: "артикул: 95950803030949", date: new Date("2026-02-13"), sold_amount:  580000, sold_quantity: 5, remains_quantity: 2, remains_amount: 232000,  refund_quantity: 1, refund_amount: 116000 },
];


export const CATEGORY_CONST: TManager[] = [
  { title: "Бытовая техника",   sub_title: "Холодильники, пылесосы, утюги и др.",    date: new Date("2026-02-03"), sold_amount: 1350000, sold_quantity: 9, refund_quantity: 1, refund_amount: 150000 },
  { title: "Электроника",       sub_title: "Смартфоны, планшеты, ноутбуки и др.",   date: new Date("2026-02-05"), sold_amount: 1490000, sold_quantity: 7, refund_quantity: 2, refund_amount: 298000 },
  { title: "Одежда и обувь",    sub_title: "Куртки, кроссовки, платья и др.",       date: new Date("2026-02-07"), sold_amount:  620000, sold_quantity: 8, refund_quantity: 3, refund_amount:  93000 },
  { title: "Продукты питания",  sub_title: "Молочные, мясные, кондитерские и др.",  date: new Date("2026-02-08"), sold_amount:  380000, sold_quantity: 6, refund_quantity: 0, refund_amount:       0 },
  { title: "Спорт и отдых",     sub_title: "Велосипеды, тренажёры, палатки и др.", date: new Date("2026-02-10"), sold_amount:  850000, sold_quantity: 5, refund_quantity: 1, refund_amount:  85000 },
  { title: "Детские товары",    sub_title: "Игрушки, коляски, одежда и др.",        date: new Date("2026-02-11"), sold_amount:  430000, sold_quantity: 7, refund_quantity: 1, refund_amount:  43000 },
  { title: "Мебель",            sub_title: "Диваны, столы, стулья и др.",           date: new Date("2026-02-12"), sold_amount: 1200000, sold_quantity: 4, refund_quantity: 0, refund_amount:       0 },
  { title: "Авто товары",       sub_title: "Масла, аксессуары, шины и др.",         date: new Date("2026-02-13"), sold_amount:  560000, sold_quantity: 6, refund_quantity: 1, refund_amount:  56000 },
];

export const REFUND_CONST: TManager[] = [
  { title: "Смартфон Redmi Note 13",   sub_title: "артикул: 74821039401827", date: new Date("2026-02-03"), sold_amount: 1200000, sold_quantity: 6, remains_quantity: 2, remains_amount: 400000, refund_quantity: 2, refund_amount: 400000 },
  { title: "Наушники Sony WH-1000XM5", sub_title: "артикул: 31920485761038", date: new Date("2026-02-05"), sold_amount:  480000, sold_quantity: 8, remains_quantity: 3, remains_amount: 180000, refund_quantity: 3, refund_amount: 180000 },
  { title: "Планшет Samsung Tab S9",   sub_title: "артикул: 58304917263049", date: new Date("2026-02-07"), sold_amount:  960000, sold_quantity: 5, remains_quantity: 1, remains_amount: 192000, refund_quantity: 2, refund_amount: 384000 },
  { title: "Монитор LG UltraWide",     sub_title: "артикул: 92748301056284", date: new Date("2026-02-08"), sold_amount:  750000, sold_quantity: 4, remains_quantity: 2, remains_amount: 375000, refund_quantity: 1, refund_amount: 187500 },
  { title: "Клавиатура Logitech MX",   sub_title: "артикул: 16473920184756", date: new Date("2026-02-10"), sold_amount:  220000, sold_quantity: 9, remains_quantity: 4, remains_amount:  98000, refund_quantity: 2, refund_amount:  49000 },
  { title: "Роутер ASUS AX6000",       sub_title: "артикул: 83019274650183", date: new Date("2026-02-12"), sold_amount:  580000, sold_quantity: 5, remains_quantity: 1, remains_amount: 116000, refund_quantity: 1, refund_amount: 116000 },
  { title: "SSD Samsung 1TB",          sub_title: "артикул: 47261830594027", date: new Date("2026-02-13"), sold_amount:  340000, sold_quantity: 7, remains_quantity: 2, remains_amount:  97000, refund_quantity: 1, refund_amount:  49000 },
];