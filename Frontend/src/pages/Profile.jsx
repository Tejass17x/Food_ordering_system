import Navbar from "../components/Navbar";
import { useCustomer } from "../context/CustomerContext";
import { useNavigate } from "react-router-dom";



function Profile(){


const {
customer
}=useCustomer();



const navigate = useNavigate();




const logout=()=>{

navigate("/");

};





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






<div className="
bg-white
rounded-3xl
shadow-lg
p-8
flex
flex-col
md:flex-row
gap-6
items-center
">






<img

src={
customer.profileImage
?
customer.profileImage
:
"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
}

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



<p className="text-gray-500">

{customer.email}

</p>



<p className="text-gray-500">

📱 {customer.mobile}

</p>





<button

onClick={()=>navigate("/edit-profile")}

className="
mt-4
bg-orange-500
text-white
px-6
py-2
rounded-xl
"

>

Edit Profile

</button>



</div>



</div>








<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
">



<div className="
bg-white
p-5
rounded-2xl
shadow
text-center
">

<h2 className="
text-3xl
font-bold
text-orange-500
">

{customer.orders.length}

</h2>

<p>

Orders

</p>

</div>







<div className="
bg-white
p-5
rounded-2xl
shadow
text-center
">


<h2 className="
text-3xl
font-bold
text-orange-500
">

{customer.favorites.length}

</h2>


<p>

Favorites

</p>


</div>







<div className="
bg-white
p-5
rounded-2xl
shadow
text-center
">


<h2 className="
text-3xl
font-bold
text-orange-500
">

₹{customer.wallet}

</h2>


<p>

Wallet

</p>


</div>






<div

onClick={()=>navigate("/orders")}

className="
bg-white
p-5
rounded-2xl
shadow
text-center
cursor-pointer
"

>


<h2 className="text-3xl">

📦

</h2>


<p>

My Orders

</p>


</div>



</div>









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


<h3 className="font-bold">

🏠 {item.type}

</h3>


<p>

{item.address}

</p>


<p>

📱 {item.phone}

</p>


</div>


))


}




</div>








<div className="
bg-white
rounded-2xl
shadow
p-6
">


<h2 className="
text-2xl
font-bold
mb-4
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
"

>

✏️ Edit Profile

</button>





<button

className="
w-full
border
p-4
rounded-xl
mb-3
hover:bg-gray-100
"

>

❤️ Favourite Restaurants

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
"

>

🚪 Sign Out

</button>





</div>






</div>



</div>





</>

)

}



export default Profile;