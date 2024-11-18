import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../Assets/andrew-neel-fqoYO9MjLLQ-unsplash (1).jpg";
import img2 from "../../../Assets/andrew-neel-fqoYO9MjLLQ-unsplash.jpg";
import img3 from "../../../Assets/ika-dam-4sd8uKS3nM0-unsplash.jpg";
import img4 from "../../../Assets/tamara-bellis-HY1fq4ZtLTE-unsplash.jpg";
import img5 from "../../../Assets/tamara-bellis-nOnT17lKYz8-unsplash.jpg";
import "./Home.css";

const images = [img1, img2, img3, img4, img5];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalImg = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalImg);
  }, []);

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt="Handmade Bag"
        className="carousel-image"
      />

      {/* CTA Overlay */}
      <div className="cta-overlay">
        <h2>Handmade Bags</h2>
       <Link to="/product"> <button className="cta-button">Explore the Collection</button></Link>
      </div>

      {/* Navigation buttons */}
      <button
        className="nav-button-left"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
      >
        &#10094;
      </button>
      <button
        className="nav-button-right"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
      >
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
