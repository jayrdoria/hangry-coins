import React, { useEffect } from "react";
import "../styles/StakesCasinoReview.css";
import stakesData from "../json/stakesCasinoReview.json";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function StakesCasinoReview() {
  useEffect(() => {
    document.title = "Stakes Casino Review - HangryCoins";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="stakes-casino-review-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="stakes-banner">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={require(`../assets/stakes-casino-review/${stakesData.casinoHeaderImage}`)}
                    alt="Stakes Logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <div className="stakes-banner-title">
                    {stakesData.casinoHeaderTitle}
                  </div>
                  <p>WILLKOMMENSBONUS</p>
                  <div className="text-center">
                    <button
                      className="btn mb-3"
                      onClick={() =>
                        window.open(stakesData.websiteUrl, "_blank")
                      }
                    >
                      KLICK HIER
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="back-to-back text-center">
              <div className="row">
                {stakesData.cards.map((card, index) => (
                  <div className="col-md-6" key={index}>
                    <div
                      className={`card my-3 ${index === 3 ? "no-flip" : ""}`}
                      data-bs-toggle={index === 3 ? "modal" : ""}
                      data-bs-target={index === 3 ? "#noFlipModal" : ""}
                    >
                      <div className="card-front">
                        <div className="card-body">
                          <img
                            src={require(`../assets/stakes-casino-review/${card.image}`)}
                            className="card-img-top"
                            alt={card.alt}
                          />
                        </div>
                        <div className="card-title">{card.title}</div>
                      </div>
                      <div className="card-back">
                        <div className="card-body">
                          <table className="details-table">
                            <tbody>
                              {card.backDetails.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  {row.map((detail, colIndex) => (
                                    <td key={colIndex}>{detail}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="stakes-logo">
              <div className="row">
                <div className="col-sm-7">
                  <h2>{stakesData.casinoName}</h2>
                </div>
                <div className="col-sm-5">
                  <a
                    href={stakesData.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require(`../assets/stakes-casino-review/${stakesData.casinoLogo}`)}
                      alt="Stakes Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="rating-etc">
              <div className="row">
                <div className="col-lg-6">
                  <div>Bewertung: {stakesData.rating}</div>
                  <div>License: {stakesData.license}</div>
                  <div>Akzeptierte Länder: {stakesData.acceptedCountries}</div>
                  <div>Sprachen: {stakesData.languages}</div>
                </div>
                <div className="col-lg-6">
                  <div>Verfügbare Spieltypen: {stakesData.gameTypes}</div>
                  <div>Kundendienst: {stakesData.customerSupport}</div>
                  <div>{stakesData.supportEmail}</div>
                </div>
              </div>
            </div>
            <div className="stakes-review">
              <div className="stakes-review-title">
                {stakesData.casinoReviewTitle}
              </div>
              <div className="stakes-review-info">
                {stakesData.casinoReviewInfo}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="noFlipModal"
        tabIndex="-1"
        aria-labelledby="noFlipModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header">
              <h5 className="modal-title" id="noFlipModalLabel">
                Game Providers
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="details-table">
                <tbody>
                  {stakesData.cards.map((card) => {
                    if (card.title === "Game Provider") {
                      return card.backDetails.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((detail, colIndex) => (
                            <td key={colIndex}>{detail}</td>
                          ))}
                        </tr>
                      ));
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakesCasinoReview;
