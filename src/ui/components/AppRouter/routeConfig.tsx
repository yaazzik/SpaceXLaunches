import { type RouteProps } from 'react-router-dom';
import LaunchesPage from "../LaunchPage/LaunchesPage";
import LaunchDetailsPage from "../LaunchDetailsPage/LaunchDetailsPage";

export enum AppRoute {
  MAIN = 'main',
  LAUNCH = 'launch'
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.LAUNCH]: '/launch/',
};

export const routeConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: RoutePath.main,
    element: <LaunchesPage />,
  },
  [AppRoute.LAUNCH]: {
    path: `${RoutePath.launch}:id`,
    element: <LaunchDetailsPage />,
  },
};
