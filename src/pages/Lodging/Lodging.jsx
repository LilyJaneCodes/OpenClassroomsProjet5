import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import starFull from "../../assets/stars/star-full.png";
import starEmpty from "../../assets/stars/star-empty.png";
import "./Lodging.scss";

function Lodging() {

  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <p>Logement introuvable</p>;
  }

  return (
    <main className="lodging">

      <Slideshow pictures={logement.pictures} />

      <div className="lodging-details">

        <section className="lodging-info">
          <div>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>

          <div className="lodging-tags">
            {logement.tags.map((tag) =>
              <span key={tag}>{tag}</span>
            )}
          </div>
        </section>

        <div className="lodging-host-info">

          <div className="lodging-host">
              <p>
                {logement.host.name.split(" ").map((namePart, index) => (
                  <span key={index}>{namePart}</span>
                ))}
              </p>

            <img
              src={logement.host.picture}
              alt={`Photo de ${logement.host.name}`}
            />
          </div>

          <div className="lodging-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={star <= Number(logement.rating) ? starFull : starEmpty}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>

      <div className="lodging-collapses">
        <Collapse title="Description">
          {logement.description}
        </Collapse>

        <Collapse title="Équipements">
          {logement.equipments.map((equipment) => (
            <p key={equipment}>{equipment}</p>
          ))}
        </Collapse>
      </div>
  </main>
  );
}

export default Lodging;