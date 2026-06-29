const User = require("../models/User");



// GET PROFILE

exports.getProfile = async(req,res)=>{

try{


const user = await User.findById(
req.params.id
).select("-password");



if(!user){

return res.status(404).json({

message:"User not found"

});

}



res.json(user);


}
catch(error){


res.status(500).json({

message:error.message

});


}


};





// UPDATE PROFILE


exports.updateProfile = async(req,res)=>{

try{


const user = await User.findByIdAndUpdate(

req.params.id,

{

name:req.body.name,

mobile:req.body.mobile,

profileImage:req.body.profileImage

},

{
new:true
}

).select("-password");




res.json({

message:"Profile Updated",

user

});



}
catch(error){


res.status(500).json({

message:error.message

});


}


};