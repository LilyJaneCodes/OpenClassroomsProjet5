import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";

function Lodging() {

  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  return (
    <main>
      <h1>Logement</h1>
      <p>ID du logement : {id}</p>
      <p>Titre : {logement.title}</p>
    </main>
  );
}

export default Lodging;