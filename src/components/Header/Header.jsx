import "./Header.scss";
import { NavLink } from "react-router-dom";
import logoKasa from '../../assets/header/logo_kasa.png'

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoKasa}
        alt="Kasa"
      />

      <nav className="header__nav">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;