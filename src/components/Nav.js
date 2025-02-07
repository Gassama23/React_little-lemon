import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/booking">Réserver une table</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
