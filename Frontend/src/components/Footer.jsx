import { 
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaApple,
  FaGooglePlay
} from "react-icons/fa";



function Footer(){


return(


<footer className="
bg-gray-900
text-gray-300
mt-10
">



<div className="
max-w-7xl
mx-auto
px-5
py-12
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-8
">





{/* Brand */}


<div>


<h1 className="
text-3xl
font-bold
text-orange-500
mb-4
">

FoodOrder

</h1>


<p className="
text-gray-400
leading-6
">

Discover the best food from your
favorite restaurants. Order fresh
and delicious meals anytime.

</p>



<div className="
flex
gap-4
mt-5
">


<FaFacebook
size={25}
className="
cursor-pointer
hover:text-orange-500
transition
"
/>


<FaInstagram
size={25}
className="
cursor-pointer
hover:text-orange-500
transition
"
/>


<FaTwitter
size={25}
className="
cursor-pointer
hover:text-orange-500
transition
"
/>


<FaYoutube
size={25}
className="
cursor-pointer
hover:text-orange-500
transition
"
/>



</div>


</div>








{/* Company */}


<div>


<h2 className="
text-white
font-bold
text-lg
mb-4
">

Company

</h2>



<ul className="
space-y-3
">


<li className="
hover:text-orange-500
cursor-pointer
">

About Us

</li>


<li className="
hover:text-orange-500
cursor-pointer
">

Careers

</li>


<li className="
hover:text-orange-500
cursor-pointer
">

Blog

</li>


<li className="
hover:text-orange-500
cursor-pointer
">

Contact

</li>



</ul>


</div>








{/* Customer */}


<div>


<h2 className="
text-white
font-bold
text-lg
mb-4
">

Customer Support

</h2>



<ul className="
space-y-3
">


<li className="
hover:text-orange-500
cursor-pointer
">

Help & Support

</li>


<li className="
hover:text-orange-500
cursor-pointer
">

Order Tracking

</li>


<li className="
hover:text-orange-500
cursor-pointer
">

Refund Policy

</li>


<li className="
hover:text-orange-500
cursor-pointer
">

Privacy Policy

</li>



</ul>


</div>









{/* App Download */}


<div>


<h2 className="
text-white
font-bold
text-lg
mb-4
">

Download App

</h2>



<p className="
text-gray-400
mb-4
">

Get the best food ordering
experience on mobile.

</p>



<button className="
flex
items-center
gap-3
bg-black
border
border-gray-700
rounded-xl
px-4
py-3
mb-3
w-full
hover:border-orange-500
transition
">


<FaGooglePlay
size={25}
/>


<div className="text-left">

<p className="
text-xs
">

GET IT ON

</p>


<p className="
font-semibold
text-white
">

Google Play

</p>


</div>



</button>







<button className="
flex
items-center
gap-3
bg-black
border
border-gray-700
rounded-xl
px-4
py-3
w-full
hover:border-orange-500
transition
">


<FaApple
size={28}
/>


<div className="text-left">

<p className="
text-xs
">

DOWNLOAD ON

</p>


<p className="
font-semibold
text-white
">

App Store

</p>


</div>



</button>




</div>






</div>








<div className="
border-t
border-gray-700
py-5
text-center
text-sm
text-gray-500
">


© {new Date().getFullYear()} FoodOrder. All rights reserved.


</div>





</footer>


)


}



export default Footer;