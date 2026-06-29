import { useNavigate } from "react-router-dom";

import {
  FaStar,
  FaClock,
  FaMapMarkerAlt
} from "react-icons/fa";


function RestaurantCard({ restaurant }) {


const navigate = useNavigate();



return (

<div
className="
bg-white
rounded-3xl
overflow-hidden
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
duration-300
cursor-pointer
"
>



<div className="relative">


<img

src={restaurant.image}

alt={restaurant.name}

className="
w-full
h-56
object-cover
"

/>



<div
className="
absolute
top-4
right-4
bg-green-500
text-white
px-3
py-1
rounded-full
flex
items-center
gap-1
font-semibold
"
>

<FaStar/>

{restaurant.rating}

</div>


</div>





<div className="p-5">



<h2 className="
text-2xl
font-bold
">

{restaurant.name}

</h2>



<p className="
text-gray-500
mt-2
">

{restaurant.category}

</p>





<div className="
flex
items-center
gap-2
mt-4
text-gray-600
">

<FaClock/>

{restaurant.time}

</div>






<div className="
flex
items-center
gap-2
mt-3
text-gray-600
">

<FaMapMarkerAlt/>

{restaurant.location}

</div>







<button

onClick={()=>navigate(`/restaurant/${restaurant.id}`)}

className="
w-full
mt-6
py-3
rounded-xl
bg-gradient-to-r
from-orange-500
to-red-500
text-white
font-bold
hover:scale-105
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