const User=require("../models/User");

const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken");




// SIGNUP

exports.signup=async(req,res)=>{


try{


const {
name,
email,
mobile,
password
}=req.body;



if(
!name ||
!email ||
!mobile ||
!password
){

return res.status(400).json({

message:"All fields required"

});

}



const exist =
await User.findOne({
email:email.toLowerCase()
});



if(exist){

return res.status(400).json({

message:"Email already registered"

});

}



const hashPassword =
await bcrypt.hash(
password,
10
);



const user =
await User.create({

name,

email:
email.toLowerCase(),

mobile,

password:
hashPassword


});




res.status(201).json({

message:"Signup successful",

user:{

id:user._id,

name:user.name,

email:user.email,

mobile:user.mobile

}


});


}
catch(error){

res.status(500).json({

message:error.message

});

}


};






// LOGIN


exports.login=async(req,res)=>{


try{


const {
email,
password
}=req.body;



const user =
await User.findOne({

email:
email.toLowerCase()

});



if(!user){

return res.status(404).json({

message:"User not found"

});

}




const check =
await bcrypt.compare(

password,

user.password

);



if(!check){

return res.status(400).json({

message:"Wrong password"

});

}




const token =
jwt.sign(

{
id:user._id
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);




res.json({

message:"Login successful",


token,


user:{

id:user._id,

name:user.name,

email:user.email,

mobile:user.mobile

}


});


}
catch(error){


res.status(500).json({

message:error.message

});


}


};