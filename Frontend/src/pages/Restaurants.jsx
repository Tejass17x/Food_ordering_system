import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RestaurantCard from "../components/RestaurantCard";

import restaurants from "../data/restaurants";


function Restaurants(){

return(

<>

<Navbar/>


<div className="
min-h-screen
bg-gray-100
p-6
">


<div className="
max-w-7xl
mx-auto
">


<h1 className="
text-4xl
font-bold
mb-8
">

All Restaurants 🍽️

</h1>



<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-6
"
>


{

restaurants.map((restaurant)=>(


<RestaurantCard

key={restaurant.id}

restaurant={restaurant}

/>


))

}



</div>


</div>


</div>



<Footer/>


</>

)

}


export default Restaurants;