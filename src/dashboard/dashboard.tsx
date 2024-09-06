import { Route, Routes } from 'react-router-dom';

import SideBar from '../common/controls/sideBar/sideBar';
import Header from './header/header';
import {
  NavigationJson,
  Permission,
  UserPermissionMap,
} from './routePermissionMap';

import './dashboard.scss';

const Dashboard = () => {
  const geneRateSidebarItems = () => {
    const sidebarItems = [];
    for (const navItem of NavigationJson) {
      if (navItem.subNavigation) {
        const items = [];
        for (const subNavItem of navItem.subNavigation) {
          if (UserPermissionMap[0][subNavItem.route] > Permission.None)
            items.push({
              labelId: subNavItem.name,
              route: subNavItem.route,
            });
        }
        if (items.length == 0) continue;
        sidebarItems.push({
          labelId: navItem.name,
          items: items,
          route: navItem.route,
          icon: navItem.icon ? <navItem.icon /> : null,
        });
      } else {
        if (UserPermissionMap[0][navItem.route] > Permission.None)
          sidebarItems.push({
            labelId: navItem.name,
            route: navItem.route,
            icon: navItem.icon ? <navItem.icon /> : null,
          });
      }
    }
    return sidebarItems;
  };
  const generateRoutes = () => {
    const routes = [];
    const userPermission = UserPermissionMap[0];
    for (const navItem of NavigationJson) {
      if (navItem.subNavigation) {
        for (const subNavItem of navItem.subNavigation) {
          if (userPermission[subNavItem.route] > Permission.None) {
            routes.push(
              <Route
                key={subNavItem.route}
                path={`${navItem.route}/${subNavItem.route}`}
                element={<subNavItem.component name={subNavItem.name} />}
              />
            );
          }
        }
      } else if (userPermission[navItem.route] > Permission.None) {
        routes.push(
          <Route
            key={navItem.route}
            path={`/${navItem.route}`}
            element={<navItem.component name={navItem.name} />}
          />
        );
      }
    }
    return routes;
  };
  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <SideBar isOpen={true} items={geneRateSidebarItems()}></SideBar>
        <Routes>{generateRoutes()}</Routes>
      </div>
    </div>
  );
};

export default Dashboard;
