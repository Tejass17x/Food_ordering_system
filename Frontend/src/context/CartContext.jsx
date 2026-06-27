import { createContext, useContext, useState } from "react";


const CartContext = createContext();



export function CartProvider({ children }) {


  const [cart, setCart] = useState([]);

  const [restaurantId, setRestaurantId] = useState(null);





  // ADD ITEM TO CART

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





    setCart((prev)=>{



      const existingItem = prev.find(

        (cartItem)=>

        cartItem.id === item.id &&

        cartItem.restaurantId === id

      );





      // If item already exists increase quantity

      if(existingItem){



        return prev.map((cartItem)=>



          cartItem.id === item.id &&

          cartItem.restaurantId === id



          ?

          {

            ...cartItem,

            qty: cartItem.qty + 1

          }



          :

          cartItem



        );



      }





      // New item add


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










  // INCREASE QUANTITY


  const increaseQty = (index)=>{


    const updatedCart = [...cart];


    updatedCart[index].qty += 1;


    setCart(updatedCart);


  };









  // DECREASE QUANTITY


  const decreaseQty = (index)=>{


    const updatedCart = [...cart];



    if(updatedCart[index].qty > 1){


      updatedCart[index].qty -= 1;


    }


    setCart(updatedCart);



  };









  // REMOVE SINGLE ITEM


  const removeItem = (index)=>{


    const updatedCart = cart.filter(

      (_,i)=> i !== index

    );



    setCart(updatedCart);





    if(updatedCart.length === 0){


      setRestaurantId(null);


    }



  };









  // CLEAR CART


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