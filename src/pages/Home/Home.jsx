import './Home.scss'

import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'

import logements from '../../data/logements.json'

function Home() {
  return (
    <main className="home">
      <Banner />

      <section className="housing-gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            logement={logement}
          />
        ))}
      </section>
    </main>
  )
}

export default Home