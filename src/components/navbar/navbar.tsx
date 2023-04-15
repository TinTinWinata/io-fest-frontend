import useScroll from '../../hooks/use-scroll';
import Menu from './menu';
import Search from './search';
import ThemeChanger from './theme-changer';

export default function Navbar() {
  const { isScrollingDown } = useScroll();

  const getClass = () =>
    isScrollingDown ? ' backdrop-blur-md top-[-100px]' : '';

  return (
    <div
      className={
        ' transition-all backdrop-blur-md z-30 w-[80%] mt-2 rounded-3xl translate-x-[-50%] left-[50%] top-0 fixed flex justify-around font-semibold h-20 center ' +
        getClass()
      }
    >
      <div className="w-full">
        <Search></Search>
      </div>
      <div className="w-full center text-gray-700 dark:text-gray-100">
        <Menu name="Home" url="/home" />
        <Menu name="Register" url="/register" />
        <Menu name="Login" url="/login" />
      </div>
      <div className="center w-full">
        <ThemeChanger></ThemeChanger>
      </div>
    </div>
  );
}
