import { Link } from 'react-router-dom';

export default function SidebarMenu({
  menu,
  icon,
  link,
  handle,
}: {
  menu: string;
  icon: any;
  link: string;
  handle: () => void;
}) {
  return (
    <Link
      onClick={handle}
      to={link}
      className="flex text-gray-50 p-2 w-full dark:hover:bg-orange-400 hover:bg-blue-400 rounded-xl"
    >
      <div className="center mr-2">{icon}</div>
      <div className="center">{menu}</div>
    </Link>
  );
}
