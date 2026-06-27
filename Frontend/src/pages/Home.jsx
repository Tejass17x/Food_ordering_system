import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../components/Footer";

import restaurants from "../data/restaurants";


function Home(){

return(

<div>

<Navbar/>


<Hero/>


<section
className="
max-w-7xl
mx-auto
px-5
py-10
">


<h1
className="
text-3xl
font-bold
mb-8
"
>

Popular Restaurants

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


</section>



<Footer/>


</div>


)

}


export default Home;