import {
Routes,
Route
} from "react-router-dom";


import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import RestaurantDetails from "../pages/RestaurantDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Orders from "../pages/Orders";
import NotFound from "../pages/NotFound";


function AppRoutes(){

return(

<Routes>


<Route path="/" element={<Login/>}/>

<Route path="/signup" element={<Signup/>}/>

<Route path="/home" element={<Home/>}/>

<Route 
path="/restaurant/:id"
element={<RestaurantDetails/>}
/>

<Route path="/cart" element={<Cart/>}/>

<Route path="/checkout" element={<Checkout/>}/>

<Route path="/profile" element={<Profile/>}/>

<Route 
path="/edit-profile"
element={<EditProfile/>}
/>

<Route 
path="/orders"
element={<Orders/>}
/>


<Route 
path="*"
element={<NotFound/>}
/>


</Routes>

)

}


export default AppRoutes;