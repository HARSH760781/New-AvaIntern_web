import React from "react";
import "./Provide.css";

function ProvideCard() {
  const ProviderImage = [
    { id: 1, image: "career guidance.png" },
    { id: 2, image: "freelancing.png" },
    { id: 3, image: "Industrial.png" },
    { id: 4, image: "workshop.png" },
    { id: 5, image: "website.png" },
    { id: 6, image: "comprehensive.png" },
  ];

  return (
    <div className="provide-cards">
      {ProviderImage.map((stat, index) => (
        <div className="cards" key={index}>
          <img src={`/images/Program/${stat.image}`} alt={`Icon ${stat.id}`} />
        </div>
      ))}
    </div>
  );
}

export default ProvideCard;
