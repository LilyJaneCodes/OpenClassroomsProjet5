import './Home.scss'
import bannerHome from '../../assets/banner/Image_Banner.png'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import logements from '../../data/logements.json'

function Home() {
  return (
    <main className="home">
      <Banner
        image={bannerHome}
        text="Chez vous, partout et ailleurs"
      />

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