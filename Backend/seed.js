require("dotenv").config();

const mongoose = require("mongoose");
const Restaurant = require("./models/Restaurant");


const restaurants = [

{
name:"Burger King",
category:"Burger",
rating:4.5,
time:"25 mins",
location:"College Road Nashik",
description:"Juicy burgers, fries and beverages",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",

menu:[
{
name:"Chicken Burger",
price:200
},
{
name:"Veg Burger",
price:150
},
{
name:"Cheese Burger",
price:220
}
]

},



{
name:"Dominos Pizza",
category:"Pizza",
rating:4.6,
time:"30 mins",
location:"MG Road Nashik",
description:"Cheesy pizzas and combos",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591",

menu:[
{
name:"Cheese Pizza",
price:300
},
{
name:"Farmhouse Pizza",
price:450
}
]

},



{
name:"Pizza Hut",
category:"Pizza",
rating:4.4,
time:"35 mins",
location:"Nashik Road",
description:"Classic pizzas and sides",
image:"https://images.unsplash.com/photo-1594007654729-407eedc4be65",

menu:[
{
name:"Paneer Pizza",
price:350
},
{
name:"Veggie Pizza",
price:280
}
]

},



{
name:"Momo Nation",
category:"Momos",
rating:4.6,
time:"20 mins",
location:"College Road Nashik",
description:"Steam and fried momos",
image:"https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9",

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
name:"Royal Biryani House",
category:"Biryani",
rating:4.7,
time:"35 mins",
location:"Nashik Road",
description:"Authentic Hyderabadi Biryani",
image:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",

menu:[
{
name:"Chicken Biryani",
price:250
},
{
name:"Veg Biryani",
price:180
}
]

},



{
name:"Cake Zone",
category:"Cake",
rating:4.5,
time:"20 mins",
location:"Nashik",
description:"Fresh cakes and desserts",
image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587",

menu:[
{
name:"Chocolate Cake",
price:500
},
{
name:"Black Forest Cake",
price:600
}
]

},



{
name:"Juice Junction",
category:"Drinks",
rating:4.3,
time:"15 mins",
location:"College Road Nashik",
description:"Fresh juices and shakes",
image:"https://images.unsplash.com/photo-1544145945-f90425340c7e",

menu:[
{
name:"Mango Shake",
price:150
},
{
name:"Cold Coffee",
price:120
}
]

},



{
name:"Punjabi Paneer House",
category:"North Indian",
rating:4.5,
time:"40 mins",
location:"Gangapur Road",
description:"Paneer dishes and Indian food",
image:"https://images.unsplash.com/photo-1601050690597-df0568f70950",

menu:[
{
name:"Paneer Butter Masala",
price:250
},
{
name:"Paneer Tikka",
price:220
}
]

}

];



const seedDatabase=async()=>{

try{


await mongoose.connect(process.env.MONGO_URI);

console.log("MongoDB Connected");


await Restaurant.deleteMany({});

console.log("Old Data Deleted");


await Restaurant.insertMany(restaurants);


console.log("All Restaurants Added");


process.exit();


}
catch(error){

console.log(error);

process.exit(1);

}

};


seedDatabase();