import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RestaurantCard from "../components/RestaurantCard";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";

import restaurants from "../data/restaurants";



const categories = [

{
name:"Pizza",
image:
"https://images.unsplash.com/photo-1513104890138-7c749659a591"
},


{
name:"Burger",
image:
"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
},


{
name:"Biryani",
image:
"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
},


{
name:"Chinese",
image:
"https://images.unsplash.com/photo-1585032226651-759b368d7246"
},


{
name:"Momos",
image:
"https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9"
},


{
name:"Desserts",
image:
"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e"
},


{
name:"Drinks",
image:
"https://images.unsplash.com/photo-1544145945-f90425340c7e"
}

];





function Home(){


const [search,setSearch]=useState("");

const [selectedCategory,setSelectedCategory]=useState("");





const filteredRestaurants = restaurants.filter(
(restaurant)=>{


const term = search.toLowerCase();



const searchMatch =

restaurant.name
.toLowerCase()
.includes(term)


||

restaurant.category
.toLowerCase()
.includes(term)


||

restaurant.foods.some((food)=>

food.toLowerCase().includes(term)

);





const categoryMatch =

selectedCategory === ""

||

restaurant.category === selectedCategory;





return searchMatch && categoryMatch;


}

);







return(

<div>


<Navbar/>





<Hero

search={search}

setSearch={setSearch}

/>








<section className="
max-w-7xl
mx-auto
px-4
py-10
">





<div className="
flex
justify-between
items-center
mb-6
">


<h2 className="
text-3xl
font-bold
">

Food Categories

</h2>





<button

onClick={()=>setSelectedCategory("")}


className={`

px-5
py-2
rounded-full
font-semibold


${
selectedCategory === ""

?

"bg-orange-500 text-white"

:

"bg-gray-200"

}

`}

>

All

</button>



</div>







<div className="
flex
gap-5
overflow-x-auto
pb-4
">


{

categories.map((category)=>(


<CategoryCard

key={category.name}

name={category.name}

image={category.image}


selected={
selectedCategory === category.name
}



onClick={()=>


setSelectedCategory(category.name)


}


/>


))


}



</div>





</section>









<section className="
max-w-7xl
mx-auto
px-4
pb-10
">






<h2 className="
text-3xl
font-bold
mb-8
">

Popular Restaurants

</h2>









{

filteredRestaurants.length === 0

?


<div className="
bg-gray-100
rounded-xl
p-10
text-center
">


<h3 className="
text-xl
font-semibold
">

No Restaurant Found

</h3>



<p className="
text-gray-500
mt-2
">

Try searching another food or restaurant

</p>



</div>



:


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-6
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


}






</section>








<Footer/>




</div>


)


}



export default Home;