const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const AWS = require("aws-sdk");
const bodyParser = require("body-parser");
const https = require("https");
const fs = require("fs");

const app = express();
const port = 5001;

const privateKey = fs.readFileSync(
  "/home/admin/conf/web/ssl.hangrycoins.com.key",
  "utf8"
);
const certificate = fs.readFileSync(
  "/home/admin/conf/web/ssl.hangrycoins.com.crt",
  "utf8"
);
const ca = fs.readFileSync(
  "/home/admin/conf/web/ssl.hangrycoins.com.crt",
  "utf8"
);
app.use(
  cors({
    origin: "https://hangrycoins.com",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => {
  console.log(`HTTPS Server running on https://hangrycoins.com:${port}`);
});

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

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES();

// This is necessary to parse the POST request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/casinoBonus", (req, res) => {
  pool.query(
    "SELECT id, logo_path, casino_name, check_items, website_link, bonus_percentage, bonus_value, free_spins FROM casinoBonus",
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

app.get("/spielautomaten", (req, res) => {
  pool.query(
    "SELECT id, image_path, game_provider FROM spielautomaten",
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

app.post("/send-email", (req, res) => {
  const { email } = req.body; // Extract email from request body

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  const emailData = {
    Source: "info@lagueslo.com",
    Destination: {
      ToAddresses: ["info@lagueslo.com"],
    },
    Message: {
      Subject: {
        Data: "Hangry Coins New Subscriber!",
      },
      Body: {
        Text: {
          Data: `${email} subscribed to our newsletter!`, // Use template literals to insert the email value
        },
      },
    },
  };

  ses.sendEmail(emailData, (err, data) => {
    if (err) {
      console.error("Error sending email:", err);
      return res.status(500).json({
        error: "Failed to send email",
        details: err.message,
        stack: err.stack,
      });
    }
    res.json({ success: true, message: "Email sent successfully!", data });
  });
});
