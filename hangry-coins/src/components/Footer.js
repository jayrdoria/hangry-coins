import React, { useState } from "react";
import "../styles/Footer.css";
import axios from "axios";
import { toast } from "react-toastify";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://hangrycoins.com:5001/send-email",
        {
          email,
        }
      );
      // console.log(response.data);

      // Handle success
      setEmail("");
      toast.success("Email sent successfully!");
    } catch (error) {
      // Handle error
      const errorMessage = error.response
        ? error.response.data.error
        : "An error occurred";
      toast.error(errorMessage);
    }
  };
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center separator">
            <h2>
              VERPASSEN SIE NICHT DIE NEUESTEN ANGEBOTE. JETZT REGISTRIEREN!
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="DEINE EMAILADRESSE"
                aria-label="Recipient's email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn w-100" type="submit">
                EINREICHEN
              </button>
            </form>
          </div>
          <div className="col-md-8">
            <h2>ÜBER HANGRY COINS</h2>
            <p>
              Hangry.Casino ist ein unabhängiges Team von Fachleuten, das
              unvoreingenommene und zuverlässige Quellen aktualisierter
              Informationen für alle Online-Casinos für deutsche Spieler
              bereitstellt. Nicht nur Casino-Rezensionen, sondern ein
              detaillierter Leitfaden zu allen Arten von Online-Casino-Anbietern
              und Boni. Alle beworbenen Betreiber hier in HANGRY.COINS sind
              vertrauenswürdig und sicher, um ohne Zweifel eine Einzahlung zu
              tätigen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
