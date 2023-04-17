import { useState } from 'react';
import { useUserAuth } from '../../hooks/user-context';
import SidebarBottom from './sidebar-bottom';
import SidebarButton from './sidebar-button';

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
        {/* Bottom */}
        <SidebarBottom />
      </div>
    );
}
