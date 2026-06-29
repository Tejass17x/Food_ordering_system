import heroImage from "../assets/Food-bg.PNG";


function Hero({search,setSearch}){


return(

<div
className="
h-[80vh]
bg-cover
bg-center
relative
"
style={{
backgroundImage:`url(${heroImage})`
}}
>


<div className="
absolute
inset-0
bg-black/50
">


</div>



<div className="
relative
z-10
h-full
flex
flex-col
justify-center
items-center
text-center
px-5
">



<h1 className="
text-white
text-5xl
md:text-6xl
font-bold
mb-5
">

Order Food Online

</h1>



<p className="
text-white
text-xl
mb-8
">

Discover the best food & restaurants

</p>




<div className="
bg-white
rounded-2xl
p-2
w-full
max-w-3xl
flex
shadow-2xl
">


<input

type="text"

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search Burger, Pizza, Restaurant..."

className="
flex-1
px-5
py-4
outline-none
rounded-xl
text-lg
"

/>



<button

className="
bg-orange-500
text-white
px-8
rounded-xl
font-bold
"

>

Search

</button>



</div>



</div>



</div>


);


}


export default Hero;