import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from '../common/controls/privateRoute/privateRoute';
import SideBar from '../common/controls/sideBar/sideBar';
import { RootState } from '../common/store/store';
import Header from './header/header';
import { NavigationJson, Permission } from './routePermissionMap';

import './dashboard.scss';

const Dashboard = () => {
  const userPermission = useSelector(
    (state: RootState) => state.userPermissionInfo.permission
  );
  const geneRateSidebarItems = () => {
    const sidebarItems = [];
    for (const navItem of NavigationJson) {
      if (navItem.subNavigation) {
        const items = [];
        for (const subNavItem of navItem.subNavigation) {
          if (userPermission[subNavItem.route] > Permission.None)
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
        if (userPermission[navItem.route] > Permission.None)
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
    for (const navItem of NavigationJson) {
      if (navItem.subNavigation) {
        for (const subNavItem of navItem.subNavigation) {
          if (userPermission[subNavItem.route] > Permission.None) {
            routes.push(
              <Route
                key={subNavItem.route}
                path={`${navItem.route}/${subNavItem.route}`}
                element={
                  <PrivateRoute>
                    <subNavItem.component name={subNavItem.name} />
                  </PrivateRoute>
                }
              />
            );
          }
        }
      } else if (userPermission[navItem.route] > Permission.None) {
        routes.push(
          <Route
            key={navItem.route}
            path={`/${navItem.route}`}
            element={
              <PrivateRoute>
                <navItem.component name={navItem.name} />
              </PrivateRoute>
            }
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
