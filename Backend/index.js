const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Database setup
const { SQL_USER, SQL_PASS, SQL_HOST, SQL_PORT, SQL_DATABASE } = process.env;
if (!SQL_USER || !SQL_PASS || !SQL_HOST || !SQL_PORT || !SQL_DATABASE) {
  throw new Error("Incomplete database configuration.");
}
const pool = new Pool({
  user: SQL_USER,
  password: SQL_PASS,
  host: SQL_HOST,
  port: SQL_PORT,
  database: SQL_DATABASE,
  ssl: {
    require: true,
  },
});
// Test database connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Successfully connected to the database:", res.rows[0]);
  }
});

// Email setup
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;
const transporter = nodeMailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Create customer data
app.post("/customers", async (req, res) => {
  try {
    const { firstname, lastname, email, phone } = req.body;
    const newCustomer = await pool.query(
      "INSERT INTO customer (firstname, lastname, email, phone) VALUES($1, $2, $3, $4) RETURNING *",
      [firstname, lastname, email, phone]
    );
    res.json(newCustomer.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error creating customer");
  }
});

// Get all vacations data
app.get("/vacations", async (req, res) => {
  try {
    const allVacations = await pool.query("SELECT * FROM vacation");
    res.json(allVacations.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error fetching vacations");
  }
});

// Send email
app.post("/send-email", async (req, res) => {
  const { recipientEmail } = req.body;

  const html = `
      <h3>Hello User,</h3>
      <br />
      <p>This email is to confirm your booking for your vacation.</p>
      <br />
      <p>Sincerely,</p>
      <br />
      <p>Travel Project</p>
    `;

  try {
    const info = await transporter.sendMail({
      from: "Travel Project <noreplytravelprojectemail@gmail.com>",
      to: recipientEmail,
      subject: "Booking Confirmation",
      html: html,
    });

    console.log("Message sent:", info.messageId);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

app.listen(5176, () => {
  console.log("Server is running on port 5176");
});
