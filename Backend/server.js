const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();


// Database
connectDB();


// CORS
app.use(
  cors({
    origin: "https://food-ordering-system-pink.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);


// Preflight
app.options("*", cors());


// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Food Ordering Backend Running 🚀"
  });
});


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});