const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");


// Routes
const authRoutes = require("./routes/authRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const userRoutes = require("./routes/userRoutes");



const app = express();



// ======================
// Database Connection
// ======================

connectDB();




// ======================
// Middlewares
// ======================


app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);


app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));





// ======================
// Test API
// ======================


app.get("/",(req,res)=>{

    res.json({

        message:"Food Ordering Backend Running 🚀"

    });

});





// ======================
// API Routes
// ======================


app.use(
    "/api/auth",
    authRoutes
);



app.use(
    "/api/restaurants",
    restaurantRoutes
);




// Future Routes

// app.use(
//     "/api/orders",
//     orderRoutes
// );


// app.use(
//     "/api/users",
//     userRoutes
// );







// ======================
// Server Start
// ======================


const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{


console.log(
`Server running on port ${PORT}`
);


});