const mongoose=require("mongoose");


const restaurantSchema=new mongoose.Schema({


name:{
type:String,
required:true
},


category:{
type:String,
required:true
},


rating:Number,


time:String,


location:String,


description:String,


image:String,


menu:[

{

name:String,

price:Number,

image:String

}

]


},
{
timestamps:true
});


module.exports =
mongoose.model(
"Restaurant",
restaurantSchema
);