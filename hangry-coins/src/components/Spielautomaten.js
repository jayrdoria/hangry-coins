import React, { useState, useEffect } from "react";
import "../styles/Spielautomaten.css";

function Spielautomaten() {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "SLOT MACHINES - HangryCoins";

    // Fetch data from your backend
    fetch("https://hangrycoins.com:5001/spielautomaten") // Adjust the endpoint if needed
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="spielautomaten-container">
      <div className="spielautomaten-header-container">
        <div className="spielautomaten-header">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>
                  BESTE SPIELAUTOMATEN <br />
                  2023
                </h2>
              </div>
              <div className="col-md-8">
                <h2>HANGRY NACH SLOTS?</h2>
                <p>
                  Hier bei Hangry Coins wissen wir bereits, welche die besten
                  Online-Spielautomaten sind, die Sie lustig und aufregend
                  finden könnten. Nachfolgend sind die besten Anbieter in
                  Deutschland mit ihren Top-Spielen aufgeführt:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spielautomaten-card">
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-md-3 mb-2" key={item.id || index}>
                <div className="spielautomaten-card-second-layer">
                  <div className="spielautomaten-card-first-layer">
                    <div className="card">
                      <img
                        src={item.image_path}
                        className="card-img-top mx-auto"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <div className="spielautomaten-card-title">
                          {item.game_provider}
                        </div>
                        <a
                          href={
                            item.game_provider === "PLAY'N GO"
                              ? "/playngo"
                              : item.game_provider === "PRAGMATIC PLAY"
                              ? "/pragmatic"
                              : item.game_provider === "YGGDRASIL"
                              ? "/yggdrasil"
                              : item.game_provider === "NETENT"
                              ? "/netent"
                              : "/defaulturl"
                          }
                          className="btn mb-3"
                        >
                          MEHR SEHEN
                        </a>
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

export default Spielautomaten;
