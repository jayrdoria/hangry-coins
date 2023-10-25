import React, { useState, useEffect } from "react";
import "../styles/homeGameProviderDetails.css";

function Pragmatic() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    document.title = "PRAGMATIC - HangryCoins";
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5001/homeGameProviderDetails`)
      .then((response) => response.json())
      .then((data) => {
        const pragmaticDetails = data.filter(
          (item) => item.provider_name === "PRAGMATIC"
        );
        setDetails(pragmaticDetails);
      })
      .catch((error) =>
        console.error("Error fetching game provider details:", error)
      );
  }, []);

  return (
    <div className="png-container">
      <div className="container">
        <div className="row">
          <h2 className="text-center mt-4">PRAGMATIC</h2>
          {details.map((detail) => (
            <div key={detail.id} className="mb-4">
              <div className="border-wrapper">
                <div className="game-container">
                  <div className="row">
                    <div className="col-lg-9 p-0">
                      <div className="inner-padding">
                        <h2 className="text-center py-3">{detail.name}</h2>
                        <div className="custom-order-container d-flex flex-column">
                          <div className="image-container">
                            <img src={detail.image_url} alt={detail.name} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 p-0 desc-container">
                      <h2 className="text-center pt-1">Beschreibung:</h2>
                      <p className="text-center px-1 pt-1">
                        {detail.description}
                      </p>
                      <div className="desc-details">
                        <div>
                          VERKÄUFERIN: <span>{detail.provider_name}</span>
                        </div>
                        <div>
                          ZURÜCK ZUM SPIELER:{" "}
                          <span>{detail.rtp_description}%</span>
                        </div>
                        <div>
                          MINDESTEINSATZ: <span>€{detail.min_bet}</span>
                        </div>
                        <div>
                          MAXIMALGEBOT: <span>€{detail.max_bet}</span>
                        </div>
                        <div>
                          GEWINNLINIEN: <span>€{detail.min_profit}</span>
                        </div>
                        <div>
                          MAXIMALER GEWINN: <span>€{detail.max_profit}</span>
                        </div>
                        <div>
                          FREISPIELE:{" "}
                          <span>{detail.free_spin_description}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="inner-content">
                            <div className="row">
                              <div className="col-md-5">
                                <img
                                  src={detail.casino_logo_url}
                                  alt="Casino Logo"
                                  className="casino-logo-padding"
                                />
                              </div>
                              <div className="col-md-7 casino-desc-padding">
                                <div className="row">
                                  <div className="col-md-6 desc-col">
                                    <p className="casino-desc">Freispiele:</p>
                                    <p className="text-center">
                                      {detail.free_spins}
                                    </p>
                                  </div>
                                  <div className="col-md-6 desc-col">
                                    <p className="casino-desc">Bis zu 100%</p>
                                    <p className="text-center">
                                      {detail.bonus}
                                    </p>
                                  </div>
                                  <div className="col-md-12 text-center">
                                    <button className="btn abs-btn">
                                      ABSPIELEN
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          {/* Repeat the same block for the other half or adjust accordingly if the data is different */}
                          <div className="inner-content">
                            <div className="row">
                              <div className="col-md-5">
                                <img
                                  src={detail.casino_logo_url}
                                  alt="Casino Logo"
                                  className="casino-logo-padding"
                                />
                              </div>
                              <div className="col-md-7 casino-desc-padding">
                                <div className="row">
                                  <div className="col-md-6 desc-col">
                                    <p className="casino-desc">Freispiele:</p>
                                    <p className="text-center">
                                      {detail.free_spins}
                                    </p>
                                  </div>
                                  <div className="col-md-6 desc-col">
                                    <p className="casino-desc">Bis zu 100%</p>
                                    <p className="text-center">
                                      {detail.bonus}
                                    </p>
                                  </div>
                                  <div className="col-md-12 text-center">
                                    <button className="btn abs-btn">
                                      ABSPIELEN
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pragmatic;
