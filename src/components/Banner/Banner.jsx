import './Banner.scss'

function Banner({ image, text }) {

  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      {text && <h1>{text}</h1>}
    </section>
  )
}

export default Banner