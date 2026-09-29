import "./Header.scss";
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
        <a href="#">Accueil</a>
        <a href="#">A propos</a>
      </nav>
    </header>
  );
}

export default Header;