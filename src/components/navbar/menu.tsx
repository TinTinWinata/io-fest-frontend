import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu({ name, url }: { name: string; url: string }) {
  return (
    <Link className="mx-3 custom-hover-menu" to={url}>
      {name}
    </Link>
  );
}
