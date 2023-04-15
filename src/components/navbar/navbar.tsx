import { Link } from 'react-router-dom';
import useScroll from '../../hooks/use-scroll';
import Search from './search';
import ThemeChanger from './theme-changer';

export default function Navbar() {
  const { isScrollingDown } = useScroll();

  const getClass = () =>
    isScrollingDown ? ' backdrop-blur-md top-[-100px]' : '';

  return (
    <div
      className={
        ' transition-all backdrop-blur-md z-[100] w-[80%] mt-2 rounded-3xl translate-x-[-50%] left-[50%] top-0 fixed flex justify-around font-semibold h-20 center ' +
        getClass()
      }
    >
      <div className="w-full">
        <Search></Search>
      </div>
      <div className="w-full center">
        <Link className="mx-3" to="/home">
          Home
        </Link>
        <Link className="mx-3" to="/register">
          Register
        </Link>
        <Link className="mx-3" to="/login">
          Login
        </Link>
      </div>
      <div className="center w-full">
        <ThemeChanger></ThemeChanger>
      </div>
    </div>
  );
}
