import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";


function Signup(){

const navigate=useNavigate();


const [data,setData]=useState({

name:"",
email:"",
mobile:"",
password:""

});



const change=(e)=>{

setData({

...data,

[e.target.name]:e.target.value

});

};



const signup=async()=>{


try{


await API.post(
"/auth/signup",
data
);


alert("Signup Successful");


navigate("/");


}
catch(error){

console.log(error);


alert(
error.response?.data?.message ||
"Signup Failed"
);


}


};



return(

<div

className="
min-h-screen
bg-gray-100
flex
items-center
justify-center
"

>


<div

className="
bg-white
p-8
rounded-3xl
shadow-xl
w-96
"

>


<h1

className="
text-3xl
font-bold
text-center
mb-6
text-orange-500
"

>

Create Account

</h1>



<input

name="name"

placeholder="Name"

className="
border
w-full
p-3
rounded-xl
mb-3
"

onChange={change}

/>




<input

name="email"

placeholder="Email"

className="
border
w-full
p-3
rounded-xl
mb-3
"

onChange={change}

/>




<input

name="mobile"

placeholder="Mobile"

className="
border
w-full
p-3
rounded-xl
mb-3
"

onChange={change}

/>




<input

name="password"

placeholder="Password"

type="password"

className="
border
w-full
p-3
rounded-xl
mb-5
"

onChange={change}

/>




<button

onClick={signup}

className="
bg-orange-500
text-white
w-full
p-3
rounded-xl
font-bold
"

>

Signup

</button>




<p

className="
text-center
mt-5
cursor-pointer
"

onClick={()=>navigate("/")}

>

Already have account?

</p>



</div>


</div>

)

}


export default Signup;