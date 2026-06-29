import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCustomer } from "../context/CustomerContext";
import { useNavigate } from "react-router-dom";

import {
  FaUserEdit,
  FaHeart,
  FaSignOutAlt,
  FaBox,
  FaWallet,
  FaMapMarkerAlt
} from "react-icons/fa";


function Profile(){


const {
customer
}=useCustomer();


const navigate = useNavigate();



const logout=()=>{

localStorage.removeItem("token");

navigate("/");

};





if(!customer){

return(

<div className="
min-h-screen
flex
items-center
justify-center
">

<h1 className="
text-3xl
font-bold
">

Please Login First

</h1>

</div>

)

}





return(

<>

<Navbar/>




<div className="
min-h-screen
bg-gray-100
p-5
">



<div className="
max-w-5xl
mx-auto
space-y-6
">






{/* Profile Card */}



<div className="
bg-white
rounded-3xl
shadow-xl
p-8
flex
flex-col
md:flex-row
items-center
gap-8
">



<img

src={
customer.profileImage ||
"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
}

alt="profile"

className="
w-32
h-32
rounded-full
object-cover
border-4
border-orange-500
"

/>




<div>


<h1 className="
text-3xl
font-bold
">

{customer.name}

</h1>



<p className="
text-gray-500
mt-2
">

{customer.email}

</p>



<p className="
text-gray-500
mt-1
">

📱 {customer.mobile}

</p>




<button

onClick={()=>navigate("/edit-profile")}

className="
mt-5
bg-orange-500
hover:bg-orange-600
text-white
px-6
py-3
rounded-xl
flex
items-center
gap-2
"

>

<FaUserEdit/>

Edit Profile

</button>



</div>


</div>









{/* Stats */}



<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
">





<div className="
bg-white
rounded-2xl
shadow
p-5
text-center
">


<FaBox className="
mx-auto
text-orange-500
text-3xl
"/>


<h2 className="
text-3xl
font-bold
mt-3
">

{customer.orders?.length || 0}

</h2>


<p>

Orders

</p>


</div>







<div className="
bg-white
rounded-2xl
shadow
p-5
text-center
">


<FaHeart className="
mx-auto
text-red-500
text-3xl
"/>


<h2 className="
text-3xl
font-bold
mt-3
">

{customer.favorites?.length || 0}

</h2>


<p>

Favorites

</p>


</div>








<div className="
bg-white
rounded-2xl
shadow
p-5
text-center
">


<FaWallet className="
mx-auto
text-green-500
text-3xl
"/>


<h2 className="
text-3xl
font-bold
mt-3
">

₹{customer.wallet || 0}

</h2>


<p>

Wallet

</p>


</div>








<div

onClick={()=>navigate("/orders")}

className="
bg-white
rounded-2xl
shadow
p-5
text-center
cursor-pointer
hover:scale-105
transition
"


>


<FaBox className="
mx-auto
text-blue-500
text-3xl
"/>


<p className="
mt-3
font-semibold
">

My Orders

</p>


</div>




</div>









{/* Address */}



<div className="
bg-white
rounded-2xl
shadow
p-6
">


<h2 className="
text-2xl
font-bold
mb-5
">

Saved Addresses

</h2>




{

customer.addresses?.length > 0 ?


customer.addresses.map((item)=>(


<div

key={item.id}

className="
border
rounded-xl
p-4
mb-3
"

>


<h3 className="
font-bold
flex
items-center
gap-2
">

<FaMapMarkerAlt className="text-orange-500"/>

{item.type}

</h3>


<p className="
text-gray-600
mt-2
">

{item.address}

</p>


<p className="
text-gray-600
">

📱 {item.phone}

</p>


</div>


))


:


<p className="
text-gray-500
">

No saved address

</p>


}



</div>









{/* Account Settings */}



<div className="
bg-white
rounded-2xl
shadow
p-6
">



<h2 className="
text-2xl
font-bold
mb-5
">

Account

</h2>




<button

onClick={()=>navigate("/edit-profile")}

className="
w-full
border
p-4
rounded-xl
mb-3
hover:bg-gray-100
flex
items-center
gap-3
"

>

<FaUserEdit/>

Edit Profile

</button>







<button

onClick={()=>navigate("/orders")}

className="
w-full
border
p-4
rounded-xl
mb-3
hover:bg-gray-100
flex
items-center
gap-3
"

>

<FaBox/>

My Orders

</button>







<button

className="
w-full
border
p-4
rounded-xl
mb-3
hover:bg-gray-100
flex
items-center
gap-3
"

>

<FaHeart/>

Favourite Restaurants

</button>







<button

onClick={logout}

className="
w-full
border
p-4
rounded-xl
text-red-500
hover:bg-red-50
flex
items-center
gap-3
"

>

<FaSignOutAlt/>

Sign Out

</button>






</div>





</div>


</div>




<Footer/>


</>

)

}


export default Profile;