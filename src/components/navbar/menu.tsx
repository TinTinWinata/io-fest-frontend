import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu({ name, url }: { name: string; url: string }) {
  return (
    <Link
      className="mx-3 custom-hover-menu  before:bg-blue-500 dark:before:bg-blue-600"
      to={url}
    >
      {name}
    </Link>
  );
}
