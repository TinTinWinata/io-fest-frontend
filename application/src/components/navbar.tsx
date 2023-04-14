import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="w-screen flex justify-between text-gray-800 font-semibold">
      <div className=""></div>
      <div className="">
        <Link className="mx-2" to="/home">
          Home
        </Link>
        <Link className="mx-2" to="/detail">
          Detail
        </Link>
        <Link className="mx-2" to="/">
          Login
        </Link>
      </div>
      <div className=""></div>
    </div>
  );
}
