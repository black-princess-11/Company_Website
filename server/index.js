require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");

const app = express();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
});

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use("/api", rateLimit({ windowMs: 15 * 60 * 1000, max: 10 })); // spam guard

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

// Make user text safe inside HTML emails
const esc = (s = "") =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Contact form
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, type, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });

  try {
    await transporter.sendMail({
      from: `"NexaByte Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New enquiry: ${type || "General"}`,
      html: `
        <h3>New enquiry</h3>
        <p><b>Name:</b> ${esc(name)}</p>
        <p><b>Email:</b> ${esc(email)}</p>
        <p><b>Phone:</b> ${esc(phone)}</p>
        <p><b>Project type:</b> ${esc(type)}</p>
        <p><b>Message:</b><br>${esc(message)}</p>`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email failed" });
  }
});

// Careers application (with resume)
app.post("/api/apply", upload.single("resume"), async (req, res) => {
  const { name, email, phone, note, job } = req.body;
  if (!name || !email || !job) return res.status(400).json({ error: "Missing fields" });

  try {
    await transporter.sendMail({
      from: `"NexaByte Careers" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Application: ${job}`,
      html: `
        <h3>New application: ${esc(job)}</h3>
        <p><b>Name:</b> ${esc(name)}</p>
        <p><b>Email:</b> ${esc(email)}</p>
        <p><b>Phone:</b> ${esc(phone)}</p>
        <p><b>Note:</b><br>${esc(note)}</p>`,
      attachments: req.file
        ? [{ filename: req.file.originalname, content: req.file.buffer }]
        : [],
    });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Email failed" });
  }
});

app.listen(process.env.PORT || 5000, () => console.log("Server running"));