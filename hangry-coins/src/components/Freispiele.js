import React, { useEffect, useState } from "react";
import "../styles/Freispiele.css";
import BannerPhoto from "../assets/freispiele/banner-1.jpg";
import "font-awesome/css/font-awesome.min.css";

function Freispiele() {
  const [casinos, setCasinos] = useState([]);

  useEffect(() => {
    document.title = "Free Spins - HangryCoins";

    // Fetch data from the server
    fetch("http://localhost:5001/freispiele")
      .then((response) => response.json())
      .then((data) => setCasinos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="freispiele-container">
      <div className="container">
        <div className="row">
          <div className="banner-div my-2">
            <img src={BannerPhoto} alt="banner" className="" />
          </div>
          <div className="header-div mt-2">
            <h2>HANGRY FÜR WUNDERBARE FREISPIELE VON DEUTSCHEN CASINOS?</h2>
          </div>
          <div className="px-4">
            <div className="header-info-div">
              <div>
                Hier bei Hangry Coins haben wir nach dem besten Casino gesucht,
                das Freispiele bei der Anmeldung für unsere geschätzten Spieler
                anbietet, und natürlich gibt es ein kleines zusätzliches
                Geschenk für Sie. Holen Sie sich die Freispiele und weitere Boni
                in vollen Zügen, wenn Sie in den folgenden Casinos einzahlen:
              </div>
            </div>
          </div>
          <div className="container">
            {casinos.map((casino) => (
              <div className="fsdb-container" key={casino.ID}>
                <div className="row">
                  <div className="col-md-1">
                    <h2>{casino.ID}</h2>
                  </div>
                  <div className="col-md-3">
                    <img src={casino.Image} alt="Casino logo" />
                  </div>
                  <div className="col-md-4 my-2">
                    {casino.CheckItems.map((item, index) => (
                      <div key={index} className="check-item">
                        <i className="fa fa-check check-icon"></i>{" "}
                        {/* FontAwesome check icon */}
                        <span>{item}</span>
                      </div>
                    ))}
                    <div className="terms mt-2">
                      18+ ALLGEMEINE GESCHÄFTSBEDINGUNGEN ANWENDEN.
                      VERANTWORTUNGSVOLLES SPIELEN. GESCHÄFTSBEDINGUNGEN GELTEN.
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="num-spins text-center">
                      {casino.Bonus} FREISPIELE OHNE EINZAHLUNG
                    </div>
                    <div className="row text-center my-3">
                      <div className="col-md-6 col-sm-6 col-6">
                        <a
                          href={casino.Link}
                          className="btn-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="btn btn-details py-3 px-4">
                            SPIELEN SIE MIT BONI
                          </button>
                        </a>
                      </div>
                      <div className="col-md-6 col-sm-6 col-6">
                        <button className="btn btn-details py-3 px-4">
                          CASINO-REZENSION
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Freispiele;
