import { createContext, useContext, useState } from "react";


const CartContext = createContext();



export function CartProvider({ children }) {


  const [cart, setCart] = useState([]);

  const [restaurantId, setRestaurantId] = useState(null);



  // Add Item To Cart

  const addToCart = (item, id) => {


    // Different restaurant check

    if (
      restaurantId &&
      restaurantId !== id
    ) {


      const confirmChange = window.confirm(
        "Your cart contains items from another restaurant. Do you want to clear cart and add this item?"
      );


      if(confirmChange){

        setCart([]);

      }
      else{

        return;

      }


    }



    setRestaurantId(id);



    setCart((prev)=>[

      ...prev,

      {
        ...item,
        qty: 1
      }

    ]);



  };





  // Increase Quantity

  const increaseQty = (index)=>{


    const updatedCart = [...cart];


    updatedCart[index].qty += 1;


    setCart(updatedCart);


  };






  // Decrease Quantity

  const decreaseQty = (index)=>{


    const updatedCart = [...cart];


    if(updatedCart[index].qty > 1){


      updatedCart[index].qty -= 1;


    }


    setCart(updatedCart);


  };







  // Remove Single Item

  const removeItem = (index)=>{


    const updatedCart = cart.filter(
      (_,i)=> i !== index
    );


    setCart(updatedCart);



    if(updatedCart.length===0){

      setRestaurantId(null);

    }


  };






  // Clear Whole Cart

  const removeCart = ()=>{


    setCart([]);

    setRestaurantId(null);


  };







  return (


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