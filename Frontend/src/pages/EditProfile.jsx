import Navbar from "../components/Navbar";
import { useCustomer } from "../context/CustomerContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function EditProfile(){


const {
customer,
setCustomer
}=useCustomer();



const navigate = useNavigate();




const [form,setForm]=useState({

name:customer.name,

email:customer.email,

mobile:customer.mobile,

profileImage:customer.profileImage

});





const handleImage=(e)=>{


const file=e.target.files[0];


if(file){


const image = URL.createObjectURL(file);


setForm({

...form,

profileImage:image

});


}


};







const saveProfile=()=>{


setCustomer({

...customer,

name:form.name,

email:form.email,

mobile:form.mobile,

profileImage:form.profileImage

});



alert("Profile Updated Successfully");


navigate("/profile");


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
max-w-xl
mx-auto
bg-white
rounded-3xl
shadow-xl
p-8
">





<h1 className="
text-3xl
font-bold
mb-8
text-center
">

Edit Profile

</h1>






<div className="
flex
justify-center
mb-8
">


<div className="
relative
">



<img

src={
form.profileImage
?
form.profileImage
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



<label

className="
absolute
bottom-0
right-0
bg-orange-500
text-white
w-12
h-12
rounded-full
flex
items-center
justify-center
cursor-pointer
"

>

📷


<input

type="file"

accept="image/*"

onChange={handleImage}

className="hidden"

/>


</label>




</div>


</div>







<input

type="text"

value={form.name}

onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}

placeholder="Full Name"

className="
w-full
border
p-3
rounded-xl
mb-4
outline-none
focus:border-orange-500
"

/>







<input

type="email"

value={form.email}

onChange={(e)=>

setForm({

...form,

email:e.target.value

})

}

placeholder="Email"

className="
w-full
border
p-3
rounded-xl
mb-4
outline-none
focus:border-orange-500
"

/>







<input

type="text"

value={form.mobile}

onChange={(e)=>

setForm({

...form,

mobile:e.target.value.replace(/\D/g,"")

})

}

maxLength="10"

placeholder="Mobile Number"

className="
w-full
border
p-3
rounded-xl
mb-6
outline-none
focus:border-orange-500
"

/>








<button

onClick={saveProfile}

className="
w-full
bg-orange-500
hover:bg-orange-600
text-white
py-3
rounded-xl
font-bold
transition
"

>

Save Changes

</button>







</div>


</div>



</>

)


}


export default EditProfile;