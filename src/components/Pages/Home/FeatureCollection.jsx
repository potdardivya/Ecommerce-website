import React from "react";
import img1 from "../../../Assets/andrew-neel-fqoYO9MjLLQ-unsplash (1).jpg";
import img2 from "../../../Assets/andrew-neel-fqoYO9MjLLQ-unsplash.jpg";
import img3 from "../../../Assets/ika-dam-4sd8uKS3nM0-unsplash.jpg";
import img4 from "../../../Assets/tamara-bellis-HY1fq4ZtLTE-unsplash.jpg";
import img5 from "../../../Assets/tamara-bellis-nOnT17lKYz8-unsplash.jpg";
import "./Home.css";

const collections = [
  { title: "Everyday Bags", img: img1 },
  { title: "Hand-Painted Art Bags", img: img2 },
  { title: "Eco-Friendly Collection", img: img3 },
  { title: "Travel Collection", img: img4 },
  { title: "Essentials", img: img5 },
];

function FeatureCollection() {
  return (
    <div className="feature-collection">
      <h2 className="feature-collection-heading">Featured Collections</h2>
      <div className="feature-collection-container">
        {collections.map((collection, index) => (
          <div key={index} className="collection-card">
            <img src={collection.img} alt={collection.title} className="collection-image" />
            <h3 className="collection-title">{collection.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCollection;
