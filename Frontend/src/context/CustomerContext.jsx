import { createContext, useContext, useState } from "react";


const CustomerContext = createContext();



export function CustomerProvider({children}){


const [customer,setCustomer] = useState({

name:"Tejas",

email:"tejas@gmail.com",

mobile:"9876543210",


profileImage:"",


addresses:[

{
id:1,
type:"Home",
address:"Nashik Maharashtra",
phone:"9876543210"
}

],



favorites:[],


orders:[

{
id:101,
restaurant:"Burger King",
items:[
"Chicken Burger",
"French Fries"
],
amount:298,
status:"Delivered"
}

],



wallet:500,


notifications:[

"Your order delivered",

"New offer available"

]


});





return(

<CustomerContext.Provider

value={{
customer,
setCustomer
}}

>


{children}


</CustomerContext.Provider>


);


}





export function useCustomer(){

return useContext(CustomerContext);

}