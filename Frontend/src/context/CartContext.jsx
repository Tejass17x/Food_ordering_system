import {createContext,useContext,useState} from "react";


const CartContext=createContext();



export function CartProvider({children}){


const [cart,setCart]=useState([]);

const [restaurantId,setRestaurantId]=useState(null);





const addToCart=(item,id)=>{


if(
restaurantId &&
restaurantId !== id
){


const confirmClear = window.confirm(
"Cart has items from another restaurant. Clear cart?"
);


if(!confirmClear){
return;
}


setCart([]);

}




setRestaurantId(id);




setCart(prev=>{


const itemId = item._id || item.id;



const existing = prev.find(

(cartItem)=>

(cartItem._id || cartItem.id) === itemId

&&

cartItem.restaurantId === id

);





if(existing){


return prev.map(cartItem=>

(cartItem._id || cartItem.id) === itemId

&&

cartItem.restaurantId === id


?

{

...cartItem,

qty:cartItem.qty + 1

}


:

cartItem


);


}






return [

...prev,

{

...item,

restaurantId:id,

qty:1

}

];



});


};








const increaseQty=(index)=>{


setCart(prev=>

prev.map((item,i)=>

i===index

?

{

...item,

qty:item.qty+1

}

:

item


)

);


};







const decreaseQty=(index)=>{


setCart(prev=>

prev.map((item,i)=>{


if(i===index && item.qty>1){


return{

...item,

qty:item.qty-1

};


}



return item;


})


);


};







const removeItem=(index)=>{


setCart(prev=>{


const updated = prev.filter(

(_,i)=>i!==index

);



if(updated.length===0){

setRestaurantId(null);

}



return updated;


});


};







const removeCart=()=>{

setCart([]);

setRestaurantId(null);

};








return(


<CartContext.Provider

value={{

cart,

addToCart,

increaseQty,

decreaseQty,

removeItem,

removeCart

}}


>


{children}


</CartContext.Provider>


);


}






export function useCart(){

return useContext(CartContext);

}