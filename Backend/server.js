const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");


const app = express();


// Database Connection
connectDB();


// CORS Configuration
app.use(
  cors({
    origin: function (origin, callback) {

      const allowedOrigins = [
        "http://localhost:5173",
        "http://localhost:5174",
        "https://food-ordering-system-pink.vercel.app"
      ];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }

    },

    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS"
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization"
    ],

    credentials: true
  })
);


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