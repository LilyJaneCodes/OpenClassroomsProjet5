import "./Footer.scss";
import logoKasa from '../../assets/footer/logo_kasa_white.png'

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src={logoKasa}
        alt="Kasa"
      />
      
      <p className="footer__text">
        © 2020 Kasa. All <span>rights reserved</span>
      </p>
    </footer>
  );
}

export default Footer;