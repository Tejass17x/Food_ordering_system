import { useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


function Checkout(){


const {
  cart,
  removeCart
}=useCart();


const navigate = useNavigate();



const [payment,setPayment]=useState("COD");



const [address,setAddress]=useState({

name:"",
phone:"",
address:"",
city:"",
pincode:""

});





const handleChange=(e)=>{


setAddress({

...address,

[e.target.name]:e.target.value

});


};





const itemTotal = cart.reduce(

(total,item)=>

total +
(item.price * item.qty)

,0);



const deliveryFee=40;


const grandTotal =
itemTotal + deliveryFee;






const placeOrder=()=>{


if(
!address.name ||
!address.phone ||
!address.address ||
!address.city ||
!address.pincode
){

alert("Please fill delivery address");

return;

}



alert(
"Order placed successfully 🎉"
);



removeCart();


navigate("/home");


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
max-w-6xl
mx-auto
grid
lg:grid-cols-3
gap-6
">





{/* Address Section */}


<div className="
lg:col-span-2
space-y-6
">



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

Delivery Address

</h2>




<input

name="name"

placeholder="Full Name"

onChange={handleChange}

className="
w-full
border
p-3
rounded-lg
mb-3
"

/>



<input

name="phone"

placeholder="Mobile Number"

onChange={handleChange}

className="
w-full
border
p-3
rounded-lg
mb-3
"

/>





<textarea

name="address"

placeholder="House No, Street, Area"

onChange={handleChange}

className="
w-full
border
p-3
rounded-lg
mb-3
"

/>





<div className="
grid
md:grid-cols-2
gap-3
">


<input

name="city"

placeholder="City"

onChange={handleChange}

className="
border
p-3
rounded-lg
"

/>



<input

name="pincode"

placeholder="Pincode"

onChange={handleChange}

className="
border
p-3
rounded-lg
"

/>



</div>



</div>







{/* Payment */}


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

Payment Method

</h2>




<div className="space-y-3">



<label className="
flex
items-center
gap-3
border
p-4
rounded-xl
cursor-pointer
">


<input

type="radio"

value="COD"

checked={payment==="COD"}

onChange={(e)=>setPayment(e.target.value)}

/>


Cash On Delivery

</label>






<label className="
flex
items-center
gap-3
border
p-4
rounded-xl
cursor-pointer
">


<input

type="radio"

value="UPI"

checked={payment==="UPI"}

onChange={(e)=>setPayment(e.target.value)}

/>


UPI Payment

</label>







<label className="
flex
items-center
gap-3
border
p-4
rounded-xl
cursor-pointer
">


<input

type="radio"

value="CARD"

checked={payment==="CARD"}

onChange={(e)=>setPayment(e.target.value)}

/>


Debit / Credit Card

</label>



</div>


</div>





</div>










{/* Order Summary */}



<div className="
bg-white
rounded-2xl
shadow
p-6
h-fit
sticky
top-20
">


<h2 className="
text-2xl
font-bold
mb-5
">

Order Summary

</h2>





<div className="
space-y-3
">


{

cart.map((item,index)=>(


<div

key={index}

className="
flex
justify-between
text-sm
"

>


<span>

{item.name} x {item.qty}

</span>


<span>

₹{item.price * item.qty}

</span>



</div>


))


}



</div>





<hr className="my-5"/>




<div className="
flex
justify-between
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
mt-3
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

₹{grandTotal}

</span>


</div>






<button

onClick={placeOrder}

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

Place Order

</button>



</div>




</div>


</div>



</>

)


}


export default Checkout;