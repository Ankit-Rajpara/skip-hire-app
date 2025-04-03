import React from "react";
import bgImage from "../assets/images/bg-image.jpeg";

const Card = ({ skip, selectedSkip, setSelectedSkip }) => {
  return (
    <div className="col-md-4">
      <div
        className={`card skip-card ${selectedSkip === skip.id ? "selected" : ""}`}
        onClick={() => setSelectedSkip(skip.id)}
      >
        {/* Image Container */}
        <div className="skip-image-container">
          <img src={bgImage} alt={`${skip.size} Yard Skip`} className="card-img-top" />
          <span className="size-badge">{skip.size} Yards</span>
        </div>

        {/* Card Content */}
        <div className="card-body">
          <h5 className="card-title">{skip.size} Yard Skip</h5>
          <p className="text-muted">14-day hire period</p>
          <div className="price-section">
            <p className="price">£{skip?.price_before_vat?.toFixed(2) || "00"}</p>
            <span className="per-week">per week</span>
          </div>
          <button className={`btn mt-auto ${selectedSkip === skip.id ? "btn-primary" : "btn-dark"}`}>
            {selectedSkip === skip.id ? "Selected" : "Select This Skip →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
