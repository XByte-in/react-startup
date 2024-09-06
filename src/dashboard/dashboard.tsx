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
  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <SideBar isOpen={true} items={sideBarItems}></SideBar>
        <Routes>
          {NavigationJson.map(navItem => {
            if (
              UserPermissionMap[0].hasOwnProperty(navItem.route) &&
              UserPermissionMap[0][navItem.route] > Permission.None
            )
              return (
                <Route
                  key={navItem.route}
                  path={`/${navItem.route}`}
                  element={<navItem.component name={navItem.name} />}
                />
              );
            return null;
          })}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
