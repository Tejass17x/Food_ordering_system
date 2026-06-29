import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


function Cart(){


const {
  cart,
  increaseQty,
  decreaseQty,
  removeItem
}=useCart();



const navigate = useNavigate();



const itemTotal = cart.reduce(

(total,item)=>

total + (item.price * item.qty)

,0);



const deliveryFee = cart.length > 0 ? 40 : 0;


const totalAmount = itemTotal + deliveryFee;





return(

<>


<Navbar/>




<div className="
min-h-screen
bg-gray-100
py-8
px-4
">


<div className="
max-w-6xl
mx-auto
">



<h1 className="
text-3xl
font-bold
mb-8
">

Your Cart

</h1>





{

cart.length === 0 ?



<div className="
bg-white
rounded-2xl
shadow
p-10
text-center
">


<h2 className="
text-2xl
font-bold
">

Your cart is empty

</h2>


<p className="
text-gray-500
mt-2
">

Add some delicious food

</p>



<button

onClick={()=>navigate("/home")}

className="
mt-5
bg-orange-500
text-white
px-6
py-3
rounded-xl
"

>

Explore Restaurants

</button>


</div>






:



<div className="
grid
lg:grid-cols-3
gap-6
">






{/* Cart Items */}



<div className="
lg:col-span-2
space-y-5
">



{

cart.map((item,index)=>(


<div

key={item._id || item.id}

className="
bg-white
rounded-2xl
shadow
p-5
flex
justify-between
items-center
"


>



<div>


<h2 className="
text-xl
font-bold
">

{item.name}

</h2>



<p className="
text-gray-500
text-sm
">

{item.restaurantName}

</p>



<p className="
text-orange-500
font-semibold
mt-2
">

₹{item.price}

</p>






<div className="
flex
items-center
gap-4
mt-4
">



<button

onClick={()=>decreaseQty(index)}

className="
w-9
h-9
rounded-full
bg-gray-200
font-bold
"

>

-

</button>





<span className="
font-bold
">

{item.qty}

</span>





<button

onClick={()=>increaseQty(index)}

className="
w-9
h-9
rounded-full
bg-orange-500
text-white
font-bold
"

>

+

</button>



</div>




</div>






<div>


<p className="
font-bold
text-lg
mb-4
">

₹{item.price * item.qty}

</p>




<button

onClick={()=>removeItem(index)}

className="
text-red-500
font-semibold
"

>

Remove

</button>



</div>




</div>


))


}



</div>










{/* Bill Section */}



<div className="
bg-white
rounded-2xl
shadow
p-6
h-fit
sticky
top-24
">



<h2 className="
text-2xl
font-bold
mb-6
">

Bill Details

</h2>




<div className="
flex
justify-between
mb-3
">

<span>
Item Total
</span>


<span>
₹{itemTotal}
</span>


</div>





<div className="
flex
justify-between
mb-3
">

<span>
Delivery Fee
</span>


<span>
₹{deliveryFee}
</span>


</div>





<hr className="my-5"/>





<div className="
flex
justify-between
text-xl
font-bold
">


<span>
Total
</span>


<span className="
text-orange-500
">

₹{totalAmount}

</span>


</div>





<button

onClick={()=>navigate("/checkout")}

className="
mt-6
w-full
bg-orange-500
hover:bg-orange-600
text-white
py-3
rounded-xl
font-semibold
transition
"

>

Proceed To Checkout

</button>




</div>




</div>



}




</div>



</div>



</>


)


}



export default Cart;