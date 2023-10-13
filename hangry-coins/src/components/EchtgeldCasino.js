import React, { useState, useEffect } from "react";
import "../styles/EchtgeldCasino.css";
import mascotImage from "../assets/echtgeld-casino/mascot.png";
import tub from "../assets/echtgeld-casino/tub.png";
import casinoData from "../json/echtgeldCasino.json";
import casinoDataArray from "../json/echtgeldCasino2.json";

function EchtgeldCasino() {
  const [data, setData] = useState([]); // State to hold the fetched data

  useEffect(() => {
    document.title = "Social Casino Page - HangryCoins";

    // Fetch data from the server
    fetch("http://localhost:5001/echtgeldCasino")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="echtgeld-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h2 className="mt-2 text-center">
              {"HANGRY FÜR DAS BESTE SOCIAL CASINO \nDEUTSCHLANDS 2022?"
                .split("\n")
                .map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    {index !== array.length - 1 && <br />}
                  </React.Fragment>
                ))}
            </h2>
            <p className="text-center mt-3 mb-4">
              Hangry Coins hat für Sie nach dem qualitativ besten Online-Casino
              in Deutschland gesucht. Diese Casinos werden nach ihren
              angebotenen Spielen, schnellen Auszahlungen, exklusiven oder
              keinen Einzahlungsboni eingestuft.
            </p>
            <div className="row">
              {data.map((item, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <div className="card text-center card-background">
                    <div className="card-body">
                      <img
                        src={item.image_url}
                        alt="Casino"
                        className="card-img-top mb-3"
                      />
                      <h5 className="card-title">BONUS</h5>
                      <h2 className="card-text">€{item.bonus}</h2>
                      <h5 className="card-title">FREISPIELE</h5>
                      <h2 className="card-text">{item.free_spin}</h2>
                      <a
                        href={item.website_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        JETZT SPIELEN
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div className="side-echtgeld d-flex flex-column align-items-center">
              <img
                src={mascotImage}
                alt="Mascot"
                className="img-fluid mascot"
              />

              <div className="tub-container position-relative">
                <div className="tub-content">
                  <img src={tub} alt="Tub" className="img-fluid overlap-tub" />

                  {/* Inserted H2 here */}
                  <h4 className="casino-offer-title position-absolute top-0 start-50 translate-middle-x">
                    TOP 5 CASINO-ANGEBOT
                  </h4>

                  <div className="card tub-card position-absolute top-0 start-50 translate-middle-x">
                    <div className="tub-image-wrapper">
                      <img
                        src={require(`../assets/echtgeld-casino/${casinoData.logo_image}`)}
                        className="card-img-top"
                        alt={casinoData.casino_name}
                      />
                    </div>

                    <div className="card-body">
                      <h4 className="card-title">{casinoData.casino_name}</h4>
                      <div className="tub-info-wrapper">
                        <h4>OHNE ANZAHLUNG</h4>
                        <p>{casinoData.withoutDeposit}</p>
                      </div>
                      <div className="tub-info-wrapper">
                        <h4>MIT ANZAHLUNG</h4>
                        <p>{casinoData.withDeposit}</p>
                      </div>

                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: "100%" }}
                      >
                        <a
                          href={casinoData.website_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                        >
                          JETZT SPIELEN
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5"></div>
                  {casinoDataArray.map((casinoItem, index) => (
                    <div
                      key={index}
                      className="card tub-card2 position-relative top-0 start-50 translate-middle-x"
                    >
                      <div className="row no-gutters">
                        {" "}
                        {/* Bootstrap row */}
                        {/* Column for the image */}
                        <div className="col-lg-4 d-flex align-items-center justify-content-center">
                          <div className="tub-image-wrapper2">
                            <img
                              src={require(`../assets/echtgeld-casino/${casinoItem.logo_image}`)}
                              className="card-img-top below-tub-img"
                              alt={casinoItem.casino_name}
                            />
                          </div>
                        </div>
                        {/* Column for the card content */}
                        <div className="col-lg-8">
                          <div className="card-body d-flex flex-column justify-content-center">
                            <h4 className="card-title text-center">
                              {casinoItem.casino_name}
                            </h4>
                            <div className="d-flex justify-content-center align-items-center">
                              <a
                                href={casinoItem.website_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                              >
                                € 250
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* End of Bootstrap row */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EchtgeldCasino;
