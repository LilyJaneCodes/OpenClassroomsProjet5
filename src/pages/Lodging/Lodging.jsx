import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow.jsx";

function Lodging() {

  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  return (
    <main>
      <Slideshow pictures={logement.pictures} />
      <h1>Logement</h1>
      <p>ID du logement : {id}</p>
      <p>Titre : {logement.title}</p>
    </main>
  );
}

export default Lodging;