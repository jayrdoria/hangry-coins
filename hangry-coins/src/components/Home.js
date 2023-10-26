import React, { useState, useEffect } from "react";
import "../styles/home.css";
import hangryCoinsLogo from "../assets/home/logo-banner.png"; // Adjust the path accordingly
import alienPicture from "../assets/home/alien-picture.png"; // Adjust the path accordingly
import "font-awesome/css/font-awesome.min.css";

function Home() {
  const [gameProvider, setGameProvider] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    document.title = "HangryCoins - Be Filled with Bonuses";
  }, []);

  useEffect(() => {
    // Fetching game providers
    fetch("https://hangrycoins.com:5001/homeGameProvider")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setGameProvider(data))
      .catch((error) => console.error("Error fetching game providers:", error));

    // Fetching FAQs
    fetch("https://hangrycoins.com:5001/homeFaq")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQs:", error));
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <section className="text-center banner-text">
          GENIESSEN SIE DIE FREIHEIT, HIER BEI DIE VOLLSTEN BONI ZU SPIELEN
        </section>
        <img
          src={hangryCoinsLogo}
          alt="Hangry Coins Logo"
          className="coins-logo"
        />
      </div>
      {/* 060211 Div */}
      <div className="custom-div"></div>
      {/* WILLKOMMEN */}
      <div className="welcome-div text-center">
        <h2 className="pt-5">WILLKOMMEN BEI HANGRY.COINS!</h2>
        <p className="container py-4">
          Haben Sie ein Faible für Online-Glücksspiele? Dann sind Sie hier genau
          richtig! Hier bei Hangry.Coins haben wir die besten verfügbaren Boni
          für alle deutschen Spieler zusammengestellt. Sei es an Spielautomaten,
          Roulette-Spielen, Blackjack, Poker, Live-Casinos und vielem mehr! Hier
          bei Hangry.Coins werden Sie mit Boni vollgestopft sein.
        </p>
      </div>
      {/* SPIELEANBIETER DIV */}
      <div className="game-provider-div">
        <div className="container">
          <h2>AUSGEWÄHLTER</h2>
          <h3>SPIELEANBIETER</h3>
          <p className="text-center">
            wenn es darum geht, das beste erlebnis beim online-spielen in
            casinos zu erzielen, ist es wichtig, dass die spiele von der besten
            spielsoftware bereitgestellt werden. hier sind einige der besten
            spieleanbieter, die ihr erlebnis voll ausschöpfen werden!
          </p>
        </div>
      </div>
      {/* Render the game providers from the database */}
      <div className="divWithGradient">
        <div className="container">
          <div className="row">
            {gameProvider.map((provider, index) => (
              <div className="card col-md-3" key={index}>
                <div className="img-div">
                  <img
                    src={provider.image}
                    className="card-img-top"
                    alt="Game Provider"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text text-center">
                    {provider.description}
                  </p>
                  <div className="see-more">
                    {provider.id === 1 ? (
                      <a href="/playngo" className="">
                        SEE MORE
                      </a>
                    ) : provider.id === 2 ? (
                      <a href="/netent" className="">
                        SEE MORE
                      </a>
                    ) : provider.id === 3 ? (
                      <a href="/pragmatic" className="">
                        SEE MORE
                      </a>
                    ) : provider.id === 4 ? (
                      <a href="/yggdrasil" className="">
                        SEE MORE
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Wie Wer */}
      <div className="wie-wer-section">
        <div className="container">
          <div className="row">
            {/* Title & Description */}
            <div className="col-md-6 col-sm-12">
              <div className="wie-wer-content">
                <h2 className="wie-wer-title">
                  WIE WIR UNSERE CASINOS BEWERTEN
                </h2>
                <p className="wie-wer-desc">
                  Wir testen und bewerten jeden gelisteten Operator im Detail.
                  Wir führen detaillierte Tests wie Kompatibilitäts-, Funktions-
                  und die wichtigsten Zahlungstests durch. Eine faire Bewertung,
                  mit Vor- und Nachteilen, ist uns sehr wichtig, um Ihr
                  Vertrauen zu stärken.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="col-md-6 col-sm-12">
              <img
                src={alienPicture}
                alt="Description Image"
                className="wie-wer-image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="faq-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">OFT GESTELLTE FRAGE</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item mb-2 faq-container">
              <input
                type="checkbox"
                id={`faq-toggle-${index}`}
                className="toggle-input"
              />
              <label
                htmlFor={`faq-toggle-${index}`}
                className="toggle-label-faq label-content"
              >
                <span className="arrow-icon">
                  <i className="fas fa-arrow-up"></i>
                  <i className="fas fa-arrow-down hidden"></i>
                </span>
                {faq.faqTitle}
              </label>
              <div className="expanding-content">
                <div className="p-4">{faq.faqDesc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
