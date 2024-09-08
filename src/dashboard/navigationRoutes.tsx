import Admins from './admins/admins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAtom,
  faSackXmark,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export const NavigationRoutes = [
  {
    name: 'Admin',
    route: 'admin',
    icon: () => {
      return <FontAwesomeIcon className="sidebar-icon" icon={faUsers} />;
    },
    component: Admins,
  },
  {
    name: 'NowBux',
    route: 'nowbux',
    icon: () => {
      return <FontAwesomeIcon className="sidebar-icon" icon={faSackXmark} />;
    },
    subNavigation: [
      {
        name: 'SweepStake',
        route: 'sweepstake',
        component: Admins,
      },
    ],
  },
  {
    name: 'Promotion',
    route: 'promotion',
    icon: () => {
      return <FontAwesomeIcon className="sidebar-icon" icon={faAtom} />;
    },
    subNavigation: [
      {
        name: 'Boot',
        route: 'boot',
        component: Admins,
      },
      {
        name: 'Dock',
        route: 'dock',
        component: Admins,
      },
    ],
  },
];
