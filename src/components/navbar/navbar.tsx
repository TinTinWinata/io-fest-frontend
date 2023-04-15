import { Link } from 'react-router-dom';
import Search from './search';
import ThemeChanger from './theme-changer';

export default function Navbar() {
  return (
    <div className="z-[100] absolute w-full flex justify-around font-semibold h-20 center">
      <div className="w-full">
        <Search></Search>
      </div>
      <div className="w-full center">
        <Link className="mx-3" to="/home">
          Home
        </Link>
        <Link className="mx-3" to="/detail">
          Register
        </Link>
        <Link className="mx-3" to="/">
          Login
        </Link>
      </div>
      <div className="center w-full">
        <ThemeChanger></ThemeChanger>
      </div>
    </div>
  );
}
