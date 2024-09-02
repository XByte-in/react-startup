import Admins from '../dashboard/admins/admins';

export const RoutePermissionMap = {
  admins: 'admins',
  'promotions/dock': 'dockPromotions',
  'promotions/boot': 'bootPromotions',
};

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
];

export const UserPermissionMap = [
  {
    email: 'pranshu.gupta@bluestacks.com',
    admins: 2,
    boots: 2,
  },
  {
    email: 'pranshu.gupta@bluestacks.com1',
    boot: 2,
    boots: 1,
  },
];
