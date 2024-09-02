import Admins from '../dashboard/admins/admins';

export const NavigationJson = [
  {
    route: 'admins',
    name: 'Admins',
    component: Admins,
  },
  {
    route: 'boots',
    name: 'Boots',
    component: Admins,
  },
  // {
  //   name: 'Docks',
  //   routes: [
  //     {
  //       route: 'docks1',
  //       name: 'Docks1',
  //       component: Admins,
  //     },
  //     {
  //       route: 'docks2',
  //       name: 'Docks2',
  //       component: Admins,
  //     },
  //   ],
  // },
];

export const UserPermissionMap = [
  {
    email: 'pranshu.gupta@bluestacks.com',
    admins: 2,
    boots: 2,
  },
  {
    email: 'pranshu.gupta@bluestacks.com1',
    boots: 1,
    admins: 1,
  },
];
