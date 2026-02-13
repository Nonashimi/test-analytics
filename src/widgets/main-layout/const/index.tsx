import { ROUTES } from "../../../app/router/routes";
import HomeIcon from "@/assets/icons/home.svg?react";
import CrmIcon from "@/assets/icons/crm.svg?react";
import ManagerIcon from "@/assets/icons/manager.svg?react";
import WarehouseIcon from "@/assets/icons/warehouse.svg?react";
import OrganizationIcon from "@/assets/icons/organization.svg?react";
import AccountantIcon from "@/assets/icons/accountant.svg?react";
import AnalyticsIcon from "@/assets/icons/analytics.svg?react";
import ReportsIcon from "@/assets/icons/reports.svg?react";
import GuideIcon from "@/assets/icons/guide.svg?react";
import SettingsIcon from "@/assets/icons/settings.svg?react";

import type { CustomMenuItemType } from "./type";

export const MENU_ITEMS: CustomMenuItemType[] = [
  {
    key: ROUTES.home,
    label: "Главная",
    icon: <HomeIcon/>,
  },
  {
    key: ROUTES.crm,
    label: "CRM",
    icon: <CrmIcon/>,
  },
  {
    key: ROUTES.manager,
    label: "Менеджер задач",
    icon: <ManagerIcon/>,
  },
  {
    key: "warehouse",
    label: "Склад",
    icon: <WarehouseIcon/>,
    children: [
      {
        key: ROUTES.warehouse,
        label: "Склад",
        icon: <WarehouseIcon/>,
      },
    ],
  },
  {
    key: ROUTES.organization,
    label: "Организация",
    icon: <OrganizationIcon/>,
  },
  {
    key: ROUTES.accountant,
    label: "Бухгалтерия",
    icon: <AccountantIcon/>,
  },
  {
    key: ROUTES.analytics,
    label: "Аналитика",
    icon: <AnalyticsIcon/>,
  },
  {
    key: "report",
    label: "Отчеты",
    icon: <ReportsIcon/>,
    children: [
      {
        key: ROUTES.report,
        label: "Отчеты",
        icon: <ReportsIcon/>,
      },
    ],
  },
];


export const SYSTEM_MENU_ITEMS:CustomMenuItemType[] = [
  {
    key: ROUTES.quide,
    label: "Справочник",
    icon: <GuideIcon/>
  },
  {
    key: ROUTES.settings,
    label: "Настройки",
    icon: <SettingsIcon/>
  }
]