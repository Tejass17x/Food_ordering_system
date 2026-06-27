const Restaurant =
require("../models/Restaurant");



// GET ALL RESTAURANTS

exports.getRestaurants = async(req,res)=>{


try{


const restaurants =
await Restaurant.find();



res.status(200).json(restaurants);


}
catch(error){


res.status(500).json({

message:error.message

});


}


};






// GET SINGLE RESTAURANT


exports.getRestaurantById = async(req,res)=>{


try{


const restaurant =

await Restaurant.findById(
req.params.id
);



if(!restaurant){

return res.status(404).json({

message:"Restaurant not found"

});

}



res.json(restaurant);



}
catch(error){


res.status(500).json({

message:error.message

});


}


};