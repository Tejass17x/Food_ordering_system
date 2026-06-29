import { createContext, useContext, useState } from "react";


const CustomerContext = createContext();



export function CustomerProvider({children}){


const savedUser = JSON.parse(
localStorage.getItem("user")
);



const [customer,setCustomer] = useState(


savedUser

?

{

...savedUser,


addresses: savedUser.addresses || [],

favorites: savedUser.favorites || [],

orders: savedUser.orders || [],

wallet: savedUser.wallet || 0,

notifications: savedUser.notifications || []


}


:


{

name:"",

email:"",

mobile:"",

profileImage:"",


addresses:[],


favorites:[],


orders:[],


wallet:0,


notifications:[]

}


);







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