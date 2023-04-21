import { useState } from 'react';
import { FaHome, FaLock, FaPersonBooth, FaWarehouse } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useUserAuth } from '../../hooks/user-context';
import SidebarBottom from './sidebar-bottom';
import SidebarButton from './sidebar-button';
import SidebarMenu from './sidebar-menu';

const MENUS = [
  {
    menu: 'Caritahu',
    icon: <FaHome />,
    link: '/',
  },
  {
    menu: 'Admin',
    icon: <FaLock />,
    link: '/admin',
  },
  {
    menu: 'Profile',
    icon: <FaPersonBooth />,
    link: '/profile',
  },
  {
    menu: 'Home',
    icon: <FaWarehouse />,
    link: '/home',
  },
];

const ALLOWED_LINK = ['/detail', '/home', '/admin', '/profile'];

export default function Sidebar() {
  const location = useLocation();
  const { isAuth } = useUserAuth();
  const [close, setClose] = useState<boolean>(true);
  const handleClick = () => {
    setClose(!close);
  };
  const isLocationAllowed = () =>
    ALLOWED_LINK.some((link) => location.pathname.includes(link));
  const getClass = () => (close ? 'left-[-225px]' : 'left-0');
  // console.log('result : ', isAuth(), ' | ', isLocationAllowed());
  if (isAuth() && isLocationAllowed())
    return (
      <div
        className={
          'z-50 fixed transition-all top-[50%] translate-y-[-50%] w-60 h-[80%] rounded-r-xl bg-blue-500 dark:bg-orange-500 ' +
          getClass()
        }
      >
        <SidebarButton handler={handleClick} />

        {/* Menu List */}
        <div className="p-2">
          {MENUS.map((menu, index) => (
            <SidebarMenu
              handle={handleClick}
              icon={menu.icon}
              link={menu.link}
              menu={menu.menu}
              key={index}
            />
          ))}
        </div>
        {/* Bottom */}
        <SidebarBottom />
      </div>
    );
  else return <></>;
}
