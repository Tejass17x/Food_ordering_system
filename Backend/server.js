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
        origin:[
            "http://localhost:5173",
            "http://localhost:5174"
        ],
        credentials:true
    })
);



// Body parser
app.use(express.json());

app.use(
    express.urlencoded({
        extended:true
    })
);




// Test Route

app.get("/",(req,res)=>{

    res.json({

        message:"Food Ordering Backend Running 🚀"

    });

});




// API Routes

app.use(
    "/api/auth",
    authRoutes
);


app.use(
    "/api/restaurants",
    restaurantRoutes
);




// Server

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});