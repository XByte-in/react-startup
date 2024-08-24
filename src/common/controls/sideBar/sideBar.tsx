/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Sidenav, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './sideBar.scss';

export interface ISideBarNavItemParams {
  icon?: any;
  labelId: string;
  route: string;
}

export interface ISideBarNavGroupItemParams {
  icon?: any;
  labelId: string;
  route: string;
  items: ISideBarNavItemParams[];
}

export interface ISideBarParams {
  items: Array<ISideBarNavItemParams | ISideBarNavGroupItemParams>;
  isOpen: boolean;
}

const SideBar = (props: ISideBarParams) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [navItems, setNavItems] = useState<any[]>([]);
  useEffect(() => {
    const onNavSelect = (route: string) => {
      navigate(route);
    };
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
                    onSelect={() =>
                      onNavSelect(`/${item.route}/${subItem.route}`)
                    }
                  >
                    {subItem.labelId}
                  </Nav.Item>
                );
              })}
            </Nav.Menu>
          );
        } else
          return (
            <Nav.Item
              icon={item.icon}
              key={mainIndex++}
              onSelect={() => onNavSelect(`/${item.route}`)}
            >
              {item.labelId}
            </Nav.Item>
          );
      }
    );
    setNavItems(items);
  }, [navigate, props.items]);
  return (
    <>
      <Sidenav expanded={isOpen} className="sideBar">
        <Sidenav.Body>
          <Nav>{navItems}</Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={isOpen => setIsOpen(isOpen)} />
      </Sidenav>
    </>
  );
};

export default SideBar;
