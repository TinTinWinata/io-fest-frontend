import { Link } from 'react-router-dom';

export default function SidebarMenu({
  menu,
  icon,
  link,
}: {
  menu: string;
  icon: any;
  link: string;
}) {
  return (
    <Link
      to={link}
      className="flex text-gray-50 p-2 w-full hover:bg-blue-400 rounded-xl"
    >
      <div className="center mr-2">{icon}</div>
      <div className="center">{menu}</div>
    </Link>
  );
}
