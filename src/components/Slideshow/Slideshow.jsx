import { useState } from "react";
import "./Slideshow.scss";

function Slideshow({ pictures }) {

  const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slideshow">

    {pictures.length > 1 && (
      <button onClick={previousImage}>
        ←
      </button>
    )}

      <img
        src={pictures[currentIndex]}
        alt="Logement"
        className="slideshow__image"
      />

    {pictures.length > 1 && (
      <p>
        {currentIndex + 1}/{pictures.length}
      </p>
    )}

    {pictures.length > 1 && (
      <button onClick={nextImage}>
        →
      </button>
    )}
    </div>
  );
}

export default Slideshow;