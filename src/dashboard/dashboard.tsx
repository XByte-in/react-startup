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
  const sideBarItems = NavigationJson.map(navItem => ({
    labelId: navItem.name,
    route: navItem.route,
    icon: navItem.icon ? <navItem.icon /> : null,
  }));
  const get_routes = () => {
    const routes = [];
    for (const navItem of NavigationJson) {
      if (navItem.hasOwnProperty('routes')) {
        for (const subNavItem of navItem.routes) {
          if (
            UserPermissionMap[0].hasOwnProperty(subNavItem.route) &&
            UserPermissionMap[0][subNavItem.route] > Permission.None
          )
            routes.push(
              <Route
                key={subNavItem.route}
                path={`${navItem.route}/${subNavItem.route}`}
                element={<subNavItem.component name={subNavItem.name} />}
              />
            );
        }
      } else if (
        UserPermissionMap[0].hasOwnProperty(navItem.route) &&
        UserPermissionMap[0][navItem.route] > Permission.None
      )
        routes.push(
          <Route
            key={navItem.route}
            path={`/${navItem.route}`}
            element={<navItem.component name={navItem.name} />}
          />
        );
    }
    return routes;
  };
  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <SideBar isOpen={true} items={sideBarItems}></SideBar>
        <Routes>{get_routes()}</Routes>
      </div>
    </div>
  );
};

export default Dashboard;
