import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import loginBg from "../assets/login-bg.PNG";

import { FaUtensils, FaEnvelope, FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";


function Login() {


const navigate = useNavigate();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [showPassword,setShowPassword]=useState(false);

const [loading,setLoading]=useState(false);





const login = async()=>{


if(!email || !password){

alert("Please fill all fields");

return;

}



try{


setLoading(true);



const res = await API.post(

"/auth/login",

{

email,

password

}

);





// Save Token

localStorage.setItem(

"token",

res.data.token

);



// Save User Data

localStorage.setItem(

"user",

JSON.stringify(res.data.user)

);




alert("Login Successful");



navigate("/home");



}

catch(error){


console.log(error);



alert(

error.response?.data?.message ||

"Login Failed"

);


}

finally{


setLoading(false);


}



};







return(


<div

className="
min-h-screen
bg-cover
bg-center
flex
items-center
justify-center
relative
px-4
"

style={{

backgroundImage:`url(${loginBg})`

}}

>


<div className="
absolute
inset-0
bg-black/60
">


</div>






<div

className="
relative
z-10
w-full
max-w-md
bg-white/15
backdrop-blur-xl
rounded-3xl
border
border-white/20
shadow-2xl
p-8
"

>





<div className="
flex
justify-center
mb-6
">


<div className="
w-20
h-20
rounded-full
bg-orange-500
flex
items-center
justify-center
shadow-lg
">


<FaUtensils

className="
text-white
text-3xl
"

/>


</div>


</div>







<h1 className="
text-4xl
font-bold
text-center
text-white
">

Welcome Back 👋

</h1>





<p className="
text-center
text-gray-200
mt-2
mb-8
">

Login to continue your food journey

</p>









<div className="
relative
mb-5
">


<FaEnvelope

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-gray-500
"

/>



<input

type="email"

placeholder="Enter Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
bg-white
rounded-xl
py-3
pl-12
pr-4
outline-none
focus:ring-2
focus:ring-orange-500
"

/>



</div>








<div className="
relative
mb-6
">


<FaLock

className="
absolute
left-4
top-1/2
-translate-y-1/2
text-gray-500
"

/>



<input


type={
showPassword
?
"text"
:
"password"
}


placeholder="Enter Password"


value={password}


onChange={(e)=>setPassword(e.target.value)}



className="
w-full
bg-white
rounded-xl
py-3
pl-12
pr-12
outline-none
focus:ring-2
focus:ring-orange-500
"

/>






<button

type="button"

className="
absolute
right-4
top-1/2
-translate-y-1/2
text-gray-500
"


onClick={()=>setShowPassword(!showPassword)}

>


{

showPassword

?

<IoEyeOff size={22}/>

:

<IoEye size={22}/>

}



</button>



</div>







<button


onClick={login}


disabled={loading}


className="
w-full
bg-gradient-to-r
from-orange-500
to-red-500
hover:scale-105
duration-300
text-white
py-3
rounded-xl
font-bold
shadow-lg
"


>


{

loading

?

"Logging In..."

:

"Login"

}


</button>








<div className="
flex
items-center
my-6
">


<div className="
flex-1
h-px
bg-white/30
">

</div>


<span className="
px-3
text-white
text-sm
">

OR

</span>



<div className="
flex-1
h-px
bg-white/30
">

</div>



</div>









<button


onClick={()=>navigate("/signup")}


className="
w-full
border
border-white
text-white
py-3
rounded-xl
hover:bg-white
hover:text-black
duration-300
font-semibold
"


>


Create Account


</button>







</div>




</div>


);


}


export default Login;