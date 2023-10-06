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
};

const connection = mysql.createConnection(dbConfig);

app.use(cors());

app.get("/homeGameProvider", (req, res) => {
  connection.query(
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
  connection.query(
    "SELECT id, faqTitle, faqDesc FROM homeFaq",
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
