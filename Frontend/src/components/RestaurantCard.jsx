import { useNavigate } from "react-router-dom";


function RestaurantCard({ restaurant }) {


const navigate = useNavigate();




return (

<div className="
bg-white
rounded-2xl
shadow-lg
overflow-hidden
hover:shadow-2xl
hover:-translate-y-1
transition-all
duration-300
">





<img

src={restaurant.image}

alt={restaurant.name}

className="
w-full
h-48
object-cover
"

/>







<div className="p-5">





<h2 className="
text-xl
font-bold
text-gray-800
">

{restaurant.name}

</h2>








<div className="
flex
justify-between
items-center
mt-3
">



<p className="
text-green-600
font-semibold
">

⭐ {restaurant.rating}

</p>




<p className="
text-gray-500
text-sm
">

🕒 {restaurant.time}

</p>



</div>








<p className="
text-gray-500
mt-3
">

{restaurant.category}

</p>









<p className="
text-gray-400
text-sm
mt-2
">

{restaurant.location}

</p>








<button


onClick={()=>navigate(`/restaurant/${restaurant.id}`)}



className="
mt-5
w-full
bg-orange-500
hover:bg-orange-600
text-white
py-3
rounded-xl
font-semibold
transition
duration-300
"


>


View Menu


</button>







</div>





</div>


);


}


export default RestaurantCard;