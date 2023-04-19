import { useState } from 'react';
import { FaHome, FaLock, FaPersonBooth } from 'react-icons/fa';
import { useUserAuth } from '../../hooks/user-context';
import SidebarBottom from './sidebar-bottom';
import SidebarButton from './sidebar-button';
import SidebarMenu from './sidebar-menu';

const MENUS = [
  {
    menu: 'Landing Page',
    icon: <FaHome />,
    link: '/',
  },
  {
    menu: 'Admin Page',
    icon: <FaLock />,
    link: '/admin',
  },
  {
    menu: 'Profile Page',
    icon: <FaPersonBooth />,
    link: '/profile',
  },
];

export default function Sidebar() {
  const { isAuth } = useUserAuth();
  const [close, setClose] = useState<boolean>(true);
  const handleClick = () => {
    setClose(!close);
  };
  const getClass = () => (close ? 'left-[-225px]' : 'left-0');

  if (!isAuth()) return <></>;
  else
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
}
