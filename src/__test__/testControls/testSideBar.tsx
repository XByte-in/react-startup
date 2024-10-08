import SideBar from '../../common/controls/sideBar/sideBar';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';

const TestSideBar = () => {
  return (
    <SideBar
      isOpen={true}
      items={[
        {
          icon: <GroupIcon />,
          labelId: 'labelId1',
          route: 'route1',
        },
        {
          icon: <MagicIcon />,
          labelId: 'labelId2',
          route: 'route2',
          items: [
            {
              labelId: 'labelId21',
              route: 'route21',
            },
            {
              labelId: 'labelId22',
              route: 'route22',
            },
          ],
        },
      ]}
    ></SideBar>
  );
};

export default TestSideBar;
