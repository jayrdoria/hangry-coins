import React, { useEffect, useState } from "react";
import "../styles/CasinoBonus.css";
import "font-awesome/css/font-awesome.min.css";
import Gem from "../assets/casino-bonus/Gem.png";
import { useNavigate } from "react-router-dom";

function CasinoBonus() {
  const [data, setData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Casino Bonus Page - HangryCoins";

    // Fetch data from your backend
    fetch("http://localhost:5001/casinoBonus") // Adjust the endpoint if needed
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="casino-bonus-header">
        <div className="container">
          <div className="row">
            <div className="text-center">
              HANGRY FÜR EIN TOLLES WILLKOMMENSBONUS VON DEUTSCHEN CASINOS?
            </div>
            <p>
              Lassen Sie sich von den großzügigen Angeboten aus unserer Liste
              füllen. Wählen Sie den besten Willkommensbonus, der Ihrem
              Geschmack entspricht.
            </p>
          </div>
        </div>
      </div>
      <div className="casino-bonus-header-2">
        <div className="container">
          <div className="row">
            <div>BESTES BONUS CASINO 2022</div>
          </div>
        </div>
      </div>
      <div className="casino-bonus-header-3">
        <div className="container">
          <div className="row">
            <div className="header3-div">
              <img src={Gem} alt="" />
              <span>
                BESTE ONLINE CASINOS FÜR <br />
                DEUTSCHLAND 2022
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="casino-bonus py-2">
        <div className="container px-3">
          {data.map((item) => (
            <div
              className={`casino-bonus-card ${
                item.casino_name === "X1 CASINO"
                  ? "x1-card"
                  : item.casino_name === "STAKES"
                  ? "stakes-card"
                  : item.casino_name === "MAGICAL SPIN CASINO"
                  ? "magical-spin-card"
                  : item.casino_name === "CASINO UNIVERSE"
                  ? "casino-universe-card"
                  : item.casino_name === "BLIZZ CASINO"
                  ? "blizz-casino-card"
                  : ""
              }`}
              key={item.id}
            >
              <div className="row">
                <div className="col-md-4">
                  <div className="img_container">
                    <img src={item.logo_path} alt="Casino logo" />
                    <div className="casino_name">{item.casino_name}</div>
                    <div className="star-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <p>Lesen Sie die Rezension</p>
                  </div>
                </div>
                <div className="col-md-4">
                  {item.check_items.split(",").map((checkItem, index) => (
                    <div key={index} className="casino-bonus-check-item">
                      <i className="fa fa-check casino-bonus-check-icon"></i>{" "}
                      {/* FontAwesome check icon */}
                      <span>{checkItem.trim()}</span>
                    </div>
                  ))}
                  <div className="button-group mt-1">
                    <button
                      className="btn"
                      onClick={() => window.open(item.website_link, "_blank")}
                    >
                      Jetzt spielen
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        if (item.casino_name === "STAKES") {
                          navigate("/stakes-casino-review"); // Replace with the correct path/route for StakesCasinoReview.js
                        }
                      }}
                    >
                      Plus +
                    </button>
                  </div>
                </div>
                <div className="col-md-4 text-center py-2">
                  <div className="up-to-bonus">
                    <h2>
                      {item.casino_name === "STAKES" ||
                      item.casino_name === "X1 CASINO" ? (
                        `BIS ZU ${item.bonus_percentage}%`
                      ) : item.casino_name === "CASINO UNIVERSE" ? (
                        `${item.bonus_percentage}% BIS ZU`
                      ) : item.casino_name === "BLIZZ CASINO" ? (
                        <>
                          1ST EINZAHLUNGSBONUS
                          {windowWidth > 767 && <br />}
                          {item.bonus_percentage}% BIS ZU
                        </>
                      ) : item.casino_name === "MAGICAL SPIN CASINO" ? (
                        `${item.bonus_percentage}% BONUS BIS ZU`
                      ) : (
                        ``
                      )}
                    </h2>

                    <div className="bonus_value">{item.bonus_value}</div>
                    {!(
                      item.casino_name === "CASINO UNIVERSE" ||
                      item.casino_name === "BLIZZ CASINO"
                    ) && (
                      <>
                        <h2 className="pt-3">FREISPIELE</h2>
                        <div className="bonus_value">{item.free_spins}</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="casino-bonus-footer">
        <div className="container">
          <div className="row">
            <p className="text-center">
              Willkommen bei Hangry.Coins! Haben Sie ein Faible für
              Online-Glücksspiele? Dann sind Sie hier genau richtig! Hier bei
              Hangry.Coins haben wir die besten verfügbaren Boni für alle
              deutschen Spieler zusammengestellt. Sei es an Spielautomaten,
              Roulette, Blackjack, Poker, Live-Casinos und vielem mehr! Hier bei
              Hangry.Coins werden Sie mit Boni vollgestopft sein.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasinoBonus;
