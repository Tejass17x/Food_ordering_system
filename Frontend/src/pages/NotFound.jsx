function NotFound() {


return (

<div className="
min-h-screen
bg-gray-100
flex
items-center
justify-center
">


<div className="
bg-white
shadow-xl
rounded-3xl
p-10
text-center
">


<h1 className="
text-7xl
font-bold
text-orange-500
">

404

</h1>



<h2 className="
text-3xl
font-bold
mt-4
">

Page Not Found

</h2>



<p className="
text-gray-500
mt-3
">

Sorry, the page you are looking for does not exist.

</p>



<button

onClick={()=>window.location.href="/home"}

className="
mt-6
bg-orange-500
text-white
px-6
py-3
rounded-xl
font-semibold
"

>

Go Home

</button>



</div>


</div>

)


}


export default NotFound;