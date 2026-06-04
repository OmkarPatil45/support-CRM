require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ticketRoutes = require("./routes/ticket.route");

const connectDB = require("./config/db");
// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());

app.use(
  express.json({
    limit: "10mb",
  })
);

// Health Check Route - Optional but useful for monitoring 
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Support CRM API is running",
  });
});

app.use("/api/tickets", ticketRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
  );
});
