import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav>
      <Link className="link" to={'/'}>
        O(n)otes
      </Link>
      <ul className="nav-links">
        <li>
          <Link className="link" to={'/about'}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to={'/notes'}>
            Notes
          </Link>
        </li>
        <li>
          {/* [NOTE] link w/ no route.  Used to look at 404 page.  Delete later. */}
          <Link className="link" to={'/blah'}>
            Blah
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
