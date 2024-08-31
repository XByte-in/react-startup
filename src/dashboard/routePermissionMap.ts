export const RoutePermissionMap = {
  admins: 'admins',
  'promotions/dock': 'dockPromotions',
  'promotions/boot': 'bootPromotions',
};

export const NavigationJson = [
  {
    navigation: 'Admins',
    route: 'admins',
  },
  {
    navigation: 'Promotions',
    route: 'promotions',
    navigations: [
      {
        navigation: 'Dock',
        route: 'dock',
      },
      {
        navigation: 'Boot',
        route: 'dock',
      },
    ],
  },
];

export const UserPermissionMap = [
  {
    email: 'pranshu.gupta@bluestacks.com',
    admins: 2,
    dockPromotions: 2,
  },
  {
    email: 'pranshu.gupta@bluestacks.com1',
    admins: 2,
    dockPromotions: 2,
  },
];
