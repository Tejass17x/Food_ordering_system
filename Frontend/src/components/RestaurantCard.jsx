import {useNavigate} from "react-router-dom";


function RestaurantCard({restaurant}){


const navigate = useNavigate();


return(

<div

className="
bg-white
rounded-2xl
shadow-xl
overflow-hidden
hover:scale-105
transition
duration-300
"

>


<img

src={restaurant.image}

alt={restaurant.name}

className="
w-full
h-52
object-cover
"

/>



<div className="p-5">


<h2
className="
text-2xl
font-bold
"
>

{restaurant.name}

</h2>



<div
className="
flex
justify-between
mt-3
"
>

<span
className="
text-green-600
font-bold
"
>

⭐ {restaurant.rating}

</span>


<span>

🕒 {restaurant.time}

</span>


</div>



<p
className="
text-gray-500
mt-3
"
>

{restaurant.category}

</p>


<p
className="
text-gray-400
mt-2
"
>

📍 {restaurant.location}

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
font-bold
"

>

View Menu

</button>



</div>


</div>


)

}


export default RestaurantCard;