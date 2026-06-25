import { Routes, Route } from "react-router-dom";


// Pages

import Login from "../pages/Login";

import Signup from "../pages/Signup";

import Otp from "../pages/Otp";

import Home from "../pages/Home";

import RestaurantDetails from "../pages/RestaurantDetails";

import Cart from "../pages/Cart";

import Checkout from "../pages/Checkout";

import Profile from "../pages/Profile";

import EditProfile from "../pages/EditProfile";





function AppRoutes(){



return(


<Routes>



{/* Login */}

<Route

path="/"

element={<Login/>}

/>





{/* Signup */}

<Route

path="/signup"

element={<Signup/>}

/>





{/* OTP */}

<Route

path="/otp"

element={<Otp/>}

/>







{/* Home */}

<Route

path="/home"

element={<Home/>}

/>







{/* Restaurant Menu */}

<Route

path="/restaurant/:id"

element={<RestaurantDetails/>}

/>







{/* Cart */}

<Route

path="/cart"

element={<Cart/>}

/>







{/* Checkout */}

<Route

path="/checkout"

element={<Checkout/>}

/>







{/* Customer Profile */}

<Route

path="/profile"

element={<Profile/>}

/>







{/* Edit Profile */}

<Route

path="/edit-profile"

element={<EditProfile/>}

/>
<Route 
path="/profile"
element={<Profile/>}
/>

<Route 
path="/edit-profile"
element={<EditProfile/>}
/>




</Routes>


);


}



export default AppRoutes;