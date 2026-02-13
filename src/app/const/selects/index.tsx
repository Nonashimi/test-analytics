import CityIcon from "@/assets/icons/city.svg?react";
import ChannelIcon from "@/assets/icons/channel.svg?react";
import DateIcon from "@/assets/icons/date.svg?react";

import type { TMySelect } from "./type";


export const SelectsConst:TMySelect[] = [
  {
    icon: <CityIcon/>,
    title: "Город",
    options: [
      {label: "Все", value: "all"},
    ]
  },
  {
    icon: <ChannelIcon/>,
    title: "Канал",
    options: [
      {label: "Все каналы", value: "all"},
    ]
  },
  {
    icon: <DateIcon/>,
    title: "Дата",
    isCalendar: true,
  }
];