require("dotenv").config();

const mongoose=require("mongoose");

const Restaurant=require("./models/Restaurant");



const restaurants=[


{
name:"Burger King",

category:"Burger",

rating:4.3,

time:"30 mins",

location:"College Road Nashik",

description:"Premium burgers and fries",

image:
"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",


menu:[

{
name:"Chicken Burger",
price:199
},

{
name:"Veg Burger",
price:149
},

{
name:"Cheese Burger",
price:229
}

]

},



{
name:"Momo Nation",

category:"Momos",

rating:4.5,

time:"25 mins",

location:"Nashik",

description:"Steam and fried momos",

image:
"https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9",


menu:[

{
name:"Veg Momos",
price:120
},

{
name:"Chicken Momos",
price:180
}

]


},



{
name:"Chinese Wok",

category:"Chinese",

rating:4.4,

time:"30 mins",

location:"Gangapur Road",

description:"Chinese noodles and rice",

image:
"https://images.unsplash.com/photo-1585032226651-759b368d7246",


menu:[

{
name:"Hakka Noodles",
price:160
},

{
name:"Manchurian",
price:150
}

]


}



];





mongoose.connect(process.env.MONGO_URI)

.then(async()=>{


await Restaurant.deleteMany();


await Restaurant.insertMany(restaurants);



console.log(
"Restaurant Added Successfully"
);



process.exit();


})

.catch(err=>console.log(err));