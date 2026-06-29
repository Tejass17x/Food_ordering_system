import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../components/Footer";

import restaurants from "../data/restaurants";


const foodCategories = [

{
name:"🍔 Burger",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300"
},

{
name:"🍕 Pizza",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300"
},

{
name:"🥟 Momos",
image:"https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=300"
},

{
name:"🍛 Biryani",
image:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300"
},

{
name:"🥤 Drinks",
image:"https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300"
},

{
name:"🍰 Cake",
image:"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300"
}

];



function Home(){


const [search,setSearch]=useState("");



const filteredRestaurants = restaurants.filter((restaurant)=>{


const text = search.toLowerCase();



return(

restaurant.name.toLowerCase().includes(text)

||

restaurant.category.toLowerCase().includes(text)

||

restaurant.location.toLowerCase().includes(text)

||

restaurant.menu.some(food=>

food.name.toLowerCase().includes(text)

)

);


});





return(

<div className="bg-gray-50 min-h-screen">


<Navbar/>



{/* HERO */}

<Hero

search={search}

setSearch={setSearch}

/>





{/* FOOD CATEGORY */}

<section className="
max-w-7xl
mx-auto
px-5
py-10
">


<h2 className="
text-3xl
font-bold
mb-6
">

Popular Food

</h2>




<div className="
flex
gap-6
overflow-x-auto
pb-4
scrollbar-hide
">


{

foodCategories.map((food,index)=>(


<div

key={index}

className="
min-w-[180px]
bg-white
rounded-3xl
shadow-lg
overflow-hidden
hover:scale-105
duration-300
cursor-pointer
"


>


<img

src={food.image}

className="
w-full
h-32
object-cover
"

/>


<h3 className="
text-center
font-bold
text-lg
py-4
">

{food.name}

</h3>


</div>


))


}


</div>



</section>







{/* RESTAURANTS */}


<section className="
max-w-7xl
mx-auto
px-5
pb-10
">


<div className="
flex
justify-between
items-center
mb-8
">


<h1 className="
text-3xl
font-bold
">

Top Restaurants

</h1>


<p className="
text-gray-500
font-semibold
">

{filteredRestaurants.length} Restaurants

</p>


</div>





<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-7
">


{

filteredRestaurants.map((restaurant)=>(


<RestaurantCard

key={restaurant.id}

restaurant={restaurant}

/>


))


}



</div>




</section>




<Footer/>


</div>


);


}



export default Home;