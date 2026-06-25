import { useState } from "react";
import {
FaUserCircle,
FaShoppingCart,
FaBars
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";


function Navbar(){


const [profileOpen,setProfileOpen]=useState(false);

const [menuOpen,setMenuOpen]=useState(false);


const navigate=useNavigate();


const {cart}=useCart();



const handleLogout=()=>{

navigate("/");

};




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
px-4
py-4
flex
justify-between
items-center
">


<h1

onClick={()=>navigate("/home")}

className="
text-2xl
font-bold
text-orange-500
cursor-pointer
"

>

FoodOrder

</h1>





<div className="
hidden
md:flex
items-center
gap-8
">


<button
onClick={()=>navigate("/home")}
>
Home
</button>



<button>
Restaurants
</button>


<button>
Orders
</button>





<div

onClick={()=>navigate("/cart")}

className="
relative
cursor-pointer
"

>


<FaShoppingCart size={22}/>



{

cart.length > 0 &&


<span

className="
absolute
-top-3
-right-3
bg-orange-500
text-white
text-xs
w-5
h-5
rounded-full
flex
items-center
justify-center
"

>

{cart.length}

</span>


}



</div>







<div className="relative">


<FaUserCircle

size={30}

className="
cursor-pointer
text-gray-700
"

onClick={()=>
setProfileOpen(!profileOpen)
}

/>




{

profileOpen &&


<div className="
absolute
right-0
mt-3
w-48
bg-white
shadow-xl
rounded-xl
border
">


<div className="p-3 border-b">

<p className="font-semibold">
Tejas
</p>

<p className="text-sm text-gray-500">
tejas@email.com
</p>

</div>



<button

onClick={()=>navigate("/profile")}

className="
w-full
text-left
px-4
py-3
hover:bg-gray-100
"

>

My Profile

</button>



<button
className="
w-full
text-left
px-4
py-3
hover:bg-gray-100
"
>

My Orders

</button>




<button

onClick={handleLogout}

className="
w-full
text-left
px-4
py-3
text-red-500
"

>

Sign Out

</button>


</div>


}



</div>


</div>






<button

className="md:hidden"

onClick={()=>
setMenuOpen(!menuOpen)
}

>

<FaBars size={24}/>

</button>




</div>






{

menuOpen &&


<div className="
md:hidden
border-t
">


<button
className="
block
w-full
text-left
px-4
py-3
border-b
"
>
Home
</button>



<button

onClick={()=>navigate("/cart")}

className="
block
w-full
text-left
px-4
py-3
border-b
"

>

Cart ({cart.length})

</button>




<button
onClick={handleLogout}
className="
block
w-full
text-left
px-4
py-3
text-red-500
"
>

Sign Out

</button>



</div>


}



</nav>


)

}



export default Navbar;