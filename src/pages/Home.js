import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/style.css";
import Card from "../components/Card";

const Home = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then((res) => {
        setSkips(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skip data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container py-5">
        {/* Header Section */}
        <div className="header text-center">
          <h2 className="fw-bold">Choose Your Skip Size</h2>
          <p className="text-muted">Select the skip size that best suits your needs</p>

          {/* Toggle Button */}
          <div className="toggle-switch">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"></span>
            </label>
            <span className="toggle-label">{darkMode ? "Dark Mode" : "Light Mode"}</span>
          </div>
        </div>

        {loading ? (
          <div className="d-flex justify-content-center mt-4 loader-spinner">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {skips.map((skip) => (
              <Card key={skip.id} skip={skip} selectedSkip={selectedSkip} setSelectedSkip={setSelectedSkip} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
