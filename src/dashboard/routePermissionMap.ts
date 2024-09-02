export const RoutePermissionMap = {
  admins: 'admins',
  'promotions/dock': 'dockPromotions',
  'promotions/boot': 'bootPromotions',
};

export const NavigationJson = [
  {
    navigation: 'Admins',
    route: 'admins',
    access_key: 'admins',
  },
  {
    navigation: 'Promotions',
    navigations: [
      {
        navigation: 'Dock',
        route: 'dock',
        access_key: 'dock',
      },
      {
        navigation: 'Boot',
        route: 'boot',
        access_key: 'boot',
      },
    ],
  },
];

export const UserPermissionMap = [
  {
    email: 'pranshu.gupta@bluestacks.com',
    admins: 2,
    dock: 2,
  },
  {
    email: 'pranshu.gupta@bluestacks.com1',
    boot: 2,
  },
];
