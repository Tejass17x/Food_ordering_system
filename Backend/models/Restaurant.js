const mongoose = require("mongoose");


const restaurantSchema = new mongoose.Schema({

name:{
type:String,
required:true
},


category:{
type:String,
required:true
},


rating:{
type:Number
},


time:{
type:String
},


location:{
type:String
},


description:{
type:String
},


image:{
type:String
},


menu:[

{

name:String,

price:Number,

image:String

}

]


},{
timestamps:true
});



module.exports =
mongoose.model(
"Restaurant",
restaurantSchema
);