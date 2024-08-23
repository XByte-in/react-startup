/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Sidenav, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './sideBar.scss';

export interface ISideBarNavItemParams {
  icon?: any;
  labelId: string;
}

export interface ISideBarNavGroupItemParams {
  icon?: any;
  labelId: string;
  items: ISideBarNavItemParams[];
}

export interface ISideBarParams {
  items: Array<ISideBarNavItemParams | ISideBarNavGroupItemParams>;
  isOpen: boolean;
}

const SideBar = (props: ISideBarParams) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [navItems, setNavItems] = useState<any[]>([]);
  useEffect(() => {
    let mainIndex = 0;
    const items = props.items.map(
      (item: ISideBarNavItemParams | ISideBarNavGroupItemParams) => {
        let childIndex = 0;
        if ('items' in item) {
          return (
            <Nav.Menu
              placement="rightStart"
              title={item.labelId}
              icon={item.icon}
              key={mainIndex++}
            >
              {item.items.map((subItem: ISideBarNavItemParams) => {
                return (
                  <Nav.Item
                    style={{ marginLeft: '1rem' }}
                    icon={subItem.icon}
                    key={`${mainIndex++}-${childIndex++}`}
                  >
                    {subItem.labelId}
                  </Nav.Item>
                );
              })}
            </Nav.Menu>
          );
        } else
          return (
            <Nav.Item icon={item.icon} key={mainIndex++}>
              {item.labelId}
            </Nav.Item>
          );
      }
    );
    setNavItems(items);
  }, [props.items]);
  return (
    <>
      <Sidenav expanded={isOpen}>
        <Sidenav.Body>
          <Nav>{navItems}</Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={isOpen => setIsOpen(isOpen)} />
      </Sidenav>
    </>
  );
};

export default SideBar;
