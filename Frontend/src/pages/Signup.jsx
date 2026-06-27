import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";


function Signup(){


const navigate = useNavigate();



const [data,setData]=useState({

name:"",
email:"",
mobile:"",
password:""

});



const handleChange=(e)=>{


setData({

...data,

[e.target.name]:e.target.value

});


};





const createAccount=async()=>{


if(
!data.name ||
!data.email ||
!data.mobile ||
!data.password
){

alert("Fill all details");

return;

}



if(data.mobile.length!==10){

alert("Mobile number must be 10 digits");

return;

}



try{


const response =
await API.post(
"/auth/signup",
data
);



alert(response.data.message);



navigate("/");



}
catch(error){


alert(

error.response?.data?.message ||
"Signup failed"

);


}



};





return(


<div className="min-h-screen bg-gray-100 flex items-center justify-center">


<div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">


<h1 className="text-3xl font-bold text-center text-orange-500">

Create Account

</h1>




<input

name="name"

placeholder="Full Name"

onChange={handleChange}

className="w-full border p-3 rounded-lg mt-5"

/>



<input

name="email"

placeholder="Email"

onChange={handleChange}

className="w-full border p-3 rounded-lg mt-3"

/>




<input

name="mobile"

placeholder="Mobile Number"

maxLength="10"

onChange={(e)=>

setData({

...data,

mobile:e.target.value.replace(/\D/g,"")

})

}

className="w-full border p-3 rounded-lg mt-3"

/>





<input

name="password"

type="password"

placeholder="Password"

onChange={handleChange}

className="w-full border p-3 rounded-lg mt-3"

/>





<button

onClick={createAccount}

className="w-full bg-orange-500 text-white p-3 rounded-lg mt-5"

>

Create Account

</button>



</div>


</div>


)


}


export default Signup;