import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCustomer } from "../context/CustomerContext";


function Orders(){


const {customer}=useCustomer();



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
">


<h1 className="
text-3xl
font-bold
mb-6
">

My Orders

</h1>




{

customer.orders.length === 0 ?


<div className="
bg-white
rounded-2xl
shadow
p-10
text-center
">


<h2 className="
text-xl
font-semibold
">

No Orders Found

</h2>


<p className="
text-gray-500
mt-2
">

You have not placed any order yet.

</p>


</div>



:


<div className="
space-y-5
">


{

customer.orders.map((order)=>(


<div

key={order.id}

className="
bg-white
rounded-2xl
shadow
p-6
"


>


<div className="
flex
justify-between
items-center
"


>


<h2 className="
text-xl
font-bold
">

{order.restaurant}

</h2>



<span className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
"

>

{order.status}

</span>


</div>




<div className="
mt-4
text-gray-600
">

{

order.items.map((item,index)=>(


<p key={index}>
🍽️ {item}
</p>


))

}

</div>




<p className="
mt-4
font-bold
text-orange-500
">

Total: ₹{order.amount}

</p>



</div>


))


}


</div>


}



</div>


</div>


<Footer/>


</>

)

}


export default Orders;