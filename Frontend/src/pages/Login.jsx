import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login-bg.PNG";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [mobile,setMobile] = useState("");
  const [otp,setOtp] = useState("");
  const [otpSent,setOtpSent] = useState(false);


  const sendOtp = () => {

    if(mobile.length !== 10){
      alert("Enter valid 10 digit mobile number");
      return;
    }

    setOtpSent(true);
    alert("OTP Sent Successfully");

  };


  const login = () => {

    if(!email || !password){
      alert("Enter email and password");
      return;
    }


    if(!otpSent){
      alert("Please send OTP");
      return;
    }


    if(otp.length !== 4){
      alert("Enter 4 digit OTP");
      return;
    }


    navigate("/home");

  };


  return (

    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:`url(${loginBg})`
      }}
    >

      <div className="min-h-screen bg-black/60 flex items-center justify-center px-4">


        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">


          <h1 className="text-4xl font-bold text-center text-orange-500">
            Food Ordering
          </h1>


          <p className="text-center text-gray-500 mb-6">
            Sign In
          </p>



          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-3"
          />



          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-3"
          />



          <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          maxLength="10"
          onChange={(e)=>
            setMobile(e.target.value.replace(/\D/g,""))
          }
          className="w-full border p-3 rounded-lg mb-3"
          />



          {
          otpSent &&

          <input
          type="text"
          placeholder="Enter OTP"
          maxLength="4"
          value={otp}
          onChange={(e)=>
          setOtp(e.target.value.replace(/\D/g,""))
          }
          className="w-full border p-3 rounded-lg mb-3"
          />

          }



          {
          !otpSent &&

          <button
          onClick={sendOtp}
          className="w-full bg-green-500 text-white p-3 rounded-lg mb-3"
          >
          Send OTP
          </button>

          }



          <button
          onClick={login}
          className="w-full bg-orange-500 text-white p-3 rounded-lg"
          >
          Sign In
          </button>



          <p className="text-center mt-5">

          Don't have an account?

          <span
          onClick={()=>navigate("/signup")}
          className="text-orange-500 cursor-pointer font-semibold ml-2"
          >
          Create New Account
          </span>

          </p>



        </div>


      </div>

    </div>

  );

}


export default Login;