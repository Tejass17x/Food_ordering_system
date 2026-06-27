import {useState} from "react";
import {useNavigate} from "react-router-dom";
import loginBg from "../assets/login-bg.PNG";
import API from "../services/api";


function Login(){


const navigate=useNavigate();



const [email,setEmail]=useState("");

const [password,setPassword]=useState("");





const login=async()=>{


if(!email || !password){

alert("Enter email and password");

return;

}




try{


const response =

await API.post(

"/auth/login",

{
email,
password
}

);





localStorage.setItem(

"token",

response.data.token

);




localStorage.setItem(

"user",

JSON.stringify(response.data.user)

);




alert("Login Successful");



navigate("/home");



}
catch(error){


alert(

error.response?.data?.message ||

"Login failed"

);


}



};






return(


<div

className="min-h-screen bg-cover bg-center"

style={{

backgroundImage:`url(${loginBg})`

}}

>



<div className="min-h-screen bg-black/60 flex items-center justify-center px-4">



<div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">



<h1 className="text-4xl font-bold text-center text-orange-500">

Food Ordering

</h1>



<p className="text-center text-gray-500 mb-6">

Sign In

</p>





<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full border p-3 rounded-lg mb-3"

/>





<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full border p-3 rounded-lg mb-3"

/>





<button

onClick={login}

className="w-full bg-orange-500 text-white p-3 rounded-lg"

>

Sign In

</button>






<p className="text-center mt-5">


Don't have an account?


<span

onClick={()=>navigate("/signup")}

className="text-orange-500 cursor-pointer font-semibold ml-2"

>

Create New Account

</span>



</p>



</div>


</div>


</div>


)


}


export default Login;