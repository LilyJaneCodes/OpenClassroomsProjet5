import { Link } from "react-router-dom";

import "./NotFound.scss";

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>

      <p>
        Oups ! La page que <span>vous demandez n'existe&nbsp;pas.</span>
      </p>

      <Link to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}

export default NotFound;