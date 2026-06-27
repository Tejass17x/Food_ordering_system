import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useCart } from "../context/CartContext";

import { useState } from "react";

import restaurants from "../data/restaurants";



function RestaurantDetails(){


const {id}=useParams();



const restaurant = restaurants.find(

(item)=>item.id === Number(id)

);




const {addToCart}=useCart();



const [added,setAdded]=useState(null);





if(!restaurant){

return(

<div className="min-h-screen flex items-center justify-center">

<h1 className="text-3xl font-bold">

Restaurant Not Found

</h1>

</div>

)

}





const addItem=(food)=>{

addToCart(
{
...food,
restaurantName:restaurant.name,
restaurantId:restaurant.id
},
restaurant.id
);

setAdded(food.id);


setTimeout(()=>{

setAdded(null)

},800);


};




setAdded(food.id);



setTimeout(()=>{

setAdded(null)

},800);



};






return(

<>


<Navbar/>




<div className="
bg-gray-100
min-h-screen
p-5
">





<div className="
max-w-6xl
mx-auto
">







{/* Restaurant Image */}


<img

src={restaurant.image}

alt={restaurant.name}

className="
w-full
h-80
object-cover
rounded-3xl
shadow-lg
"

/>







{/* Restaurant Details */}



<div className="
bg-white
rounded-2xl
shadow
p-6
mt-6
">





<h1 className="
text-4xl
font-bold
">

{restaurant.name}

</h1>





<p className="
text-gray-500
mt-2
text-lg
">

{restaurant.category}

</p>








<div className="
flex
gap-4
flex-wrap
mt-5
">





<span className="
bg-green-100
text-green-700
px-4
py-2
rounded-xl
font-semibold
">

⭐ {restaurant.rating}

</span>






<span className="
bg-orange-100
text-orange-700
px-4
py-2
rounded-xl
font-semibold
">

🕒 {restaurant.time}

</span>







</div>








<p className="
mt-5
text-gray-700
">

📍 {restaurant.location}

</p>







<p className="
mt-3
text-gray-600
">

{restaurant.description}

</p>






</div>









{/* Menu */}



<h2 className="
text-3xl
font-bold
mt-10
mb-5
">

Menu

</h2>








<div className="
grid
grid-cols-1
md:grid-cols-2
gap-6
">






{

restaurant.menu.map((food)=>(




<div

key={food.id}

className="
bg-white
rounded-2xl
shadow-md
p-5
flex
justify-between
items-center
hover:shadow-xl
transition
"

>




<div>



<h3 className="
text-xl
font-bold
">

{food.name}

</h3>





<p className="
text-orange-500
font-bold
text-lg
mt-2
">

₹{food.price}

</p>



</div>








<button


onClick={()=>addItem(food)}



className={`
px-5
py-2
rounded-xl
text-white
font-semibold
transition
transform
hover:scale-105


${
added === food.id

?

"bg-green-500"

:

"bg-orange-500 hover:bg-orange-600"

}

`}


>





{

added === food.id

?

"Added ✓"

:

"Add To Cart"

}



</button>






</div>





))


}







</div>







</div>





</div>







<Footer/>


</>


)


}



export default RestaurantDetails;