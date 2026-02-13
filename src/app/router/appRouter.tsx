import { AnalyticsPage } from "../../pages/analytics";
import { MainLayout } from "../../widgets/main-layout";
import { ROUTES } from "./routes";

export const PAGES = [
  {
    path: ROUTES.home,
    element: <MainLayout><div className=""></div></MainLayout>,
  },
  {
    path: ROUTES.crm,
    element: <MainLayout><div className=""></div></MainLayout>,
  },
  {
    path: ROUTES.manager,
    element: <MainLayout><div className=""></div></MainLayout>,
  },
  {
    path: ROUTES.warehouse,
    element: <MainLayout><div className=""></div></MainLayout>,
  },
  {
    path: ROUTES.organization,
    element: <MainLayout><div className=""></div></MainLayout>,
  },
  {
    path: ROUTES.settings,
    element: <MainLayout><div className=""></div></MainLayout>,
  },
  {
    path: ROUTES.quide,
    element: <MainLayout><div className=""></div></MainLayout>,
  },
  {
    path: ROUTES.accountant,
    element: <MainLayout><div className=""></div></MainLayout>,
  },
  {
    path: ROUTES.analytics,
    element:<AnalyticsPage />,
  },
  {
    path: ROUTES.report,
    element: <MainLayout><div className=""></div></MainLayout>,
  }
]