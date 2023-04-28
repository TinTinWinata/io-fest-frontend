import { useLocation } from 'react-router-dom';
import useScroll from '../../hooks/use-scroll';
import Menu from './menu';
import Search from './search';
import ThemeChanger from './theme-changer';

const MUST_WHITE_PATH = ['/login', '/register'];

export default function Navbar() {
  const { isScrollingDown } = useScroll();
  const location = useLocation();

  const getScrollingClass = () =>
    isScrollingDown ? ' backdrop-blur-md top-[-100px] ' : '';

  const isMustWhite = () => MUST_WHITE_PATH.includes(location.pathname);

  const getColorClass = () => {
    return isMustWhite()
      ? ' text-gray-50 dark:text-gray-50'
      : ' text-gray-700 dark:text-gray-100';
  };

  return <></>;

  return (
    <div
      className={
        ' transition-all backdrop-blur-md  z-30 w-[80%] mt-2 rounded-full translate-x-[-50%] left-[50%] top-0 fixed flex justify-around font-semibold h-20 center ' +
        getScrollingClass() +
        getColorClass()
      }
    >
      {/* {isMustWhite() && (
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-500 opacity-20"></div>
      )} */}
      <div className="w-full">{!isMustWhite() && <Search></Search>}</div>
      <div className="w-full center ">
        <Menu name="Home" url="/home" />
        <Menu name="Register" url="/register" />
        <Menu name="Login" url="/login" />
      </div>
      <div className="center w-full">{<ThemeChanger></ThemeChanger>}</div>
    </div>
  );
}
