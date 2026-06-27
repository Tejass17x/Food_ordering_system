import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import loginBg from "../assets/login-bg.PNG";


function Login(){

const navigate = useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const login=async()=>{

try{

const res = await API.post(
"/auth/login",
{
email,
password
}
);


localStorage.setItem(
"token",
res.data.token
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
"

style={{
backgroundImage:`url(${loginBg})`
}}

>


<div

className="
bg-white/90
backdrop-blur-md
p-8
rounded-3xl
shadow-2xl
w-96
"

>


<h1

className="
text-4xl
font-bold
text-center
text-orange-500
mb-6
"

>

Food Login

</h1>



<input

className="
border
w-full
p-3
rounded-xl
mb-4
"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>




<input

className="
border
w-full
p-3
rounded-xl
mb-5
"

placeholder="Password"

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>



<button

onClick={login}

className="
bg-orange-500
hover:bg-orange-600
text-white
w-full
p-3
rounded-xl
font-bold
"

>

Login

</button>




<p

className="
text-center
mt-5
cursor-pointer
text-orange-500
font-semibold
"

onClick={()=>navigate("/signup")}

>

Create Account

</p>



</div>


</div>

)

}


export default Login;