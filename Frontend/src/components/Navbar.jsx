import { useNavigate } from "react-router-dom";
import {
FaHome,
FaShoppingCart,
FaUser,
FaUtensils,
FaStore
} from "react-icons/fa";


function Navbar(){

const navigate = useNavigate();


return(

<nav className="
bg-white
shadow-md
sticky
top-0
z-50
">

<div className="
max-w-7xl
mx-auto
px-5
py-4
flex
justify-between
items-center
">


{/* Logo */}

<div
onClick={()=>navigate("/home")}
className="
flex
items-center
gap-2
cursor-pointer
">

<div className="
bg-orange-500
text-white
p-3
rounded-full
">

<FaUtensils/>

</div>


<h1 className="
text-2xl
font-bold
text-orange-500
">

Foodie

</h1>

</div>





<div className="
flex
items-center
gap-6
text-gray-700
">



<button
onClick={()=>navigate("/home")}
className="
flex
items-center
gap-2
hover:text-orange-500
">

<FaHome/>

Home

</button>





<button
onClick={()=>navigate("/restaurants")}
className="
flex
items-center
gap-2
hover:text-orange-500
">

<FaStore/>

Restaurants

</button>





<button
onClick={()=>navigate("/cart")}
className="
flex
items-center
gap-2
hover:text-orange-500
">

<FaShoppingCart/>

Cart

</button>





<button
onClick={()=>navigate("/profile")}
className="
flex
items-center
gap-2
hover:text-orange-500
">

<FaUser/>

Profile

</button>



</div>


</div>

</nav>


)

}


export default Navbar;