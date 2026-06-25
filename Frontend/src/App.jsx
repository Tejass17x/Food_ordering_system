import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

import { CartProvider } from "./context/CartContext";

import { CustomerProvider } from "./context/CustomerContext";



function App() {


  return (


    <BrowserRouter>


      <CartProvider>


        <CustomerProvider>


          <AppRoutes />


        </CustomerProvider>


      </CartProvider>


    </BrowserRouter>


  );


}



export default App;