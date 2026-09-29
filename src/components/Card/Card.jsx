import './Card.scss'
import cardImage from '../../assets/hero.png'

function Card() {
  return (
    <article className="card">
      <img
        src={cardImage}
        alt=""
        className="card__image"
      />

      <h2 className="card__title">
        Appartement cosy
      </h2>
    </article>
  )
}

export default Card