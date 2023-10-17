const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 5001;

require("dotenv").config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Create a pool instead of a single connection
const pool = mysql.createPool(dbConfig);

app.use(cors());

app.get("/homeGameProvider", (req, res) => {
  pool.query(
    "SELECT id, image, description FROM homeGameProvider",
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res
          .status(500)
          .json({ error: "Internal Server Error", details: err.message });
      }

      res.json(results);
    }
  );
});

app.get("/homeFaq", (req, res) => {
  pool.query("SELECT id, faqTitle, faqDesc FROM homeFaq", (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ error: "Internal Server Error", details: err.message });
    }

    res.json(results);
  });
});

app.get("/homeGameProviderDetails", (req, res) => {
  pool.query(
    "SELECT id, provider_name, name, image_url, casino_logo_url, free_spins, bonus, description, rtp_description, min_bet, max_bet, min_profit, max_profit, free_spin_description FROM homeGameProviderDetails",
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res
          .status(500)
          .json({ error: "Internal Server Error", details: err.message });
      }

      res.json(results);
    }
  );
});

app.get("/echtgeldCasino", (req, res) => {
  pool.query(
    "SELECT image_url, bonus, free_spin, website_link FROM echtgeldCasino",
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res
          .status(500)
          .json({ error: "Internal Server Error", details: err.message });
      }

      res.json(results);
    }
  );
});

app.get("/freispiele", (req, res) => {
  pool.query(
    "SELECT ID, Image, CheckItems, Link, Bonus FROM freispiele",
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res
          .status(500)
          .json({ error: "Internal Server Error", details: err.message });
      }

      // Convert CheckItems string to an array for each row
      const formattedResults = results.map((item) => ({
        ...item,
        CheckItems: item.CheckItems.split(",").map((str) => str.trim()),
      }));

      res.json(formattedResults);
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
