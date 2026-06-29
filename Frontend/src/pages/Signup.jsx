import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import loginBg from "../assets/login-bg.PNG";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaUtensils,
} from "react-icons/fa";

import { IoEye, IoEyeOff } from "react-icons/io5";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const signup = async () => {
    if (
      !data.name ||
      !data.email ||
      !data.mobile ||
      !data.password
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await API.post("/auth/signup", data);

      alert("Signup Successful");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Signup Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative px-4"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Card */}

      <div className="relative z-10 w-full max-w-md bg-white/15 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8">

        {/* Logo */}

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
            <FaUtensils className="text-white text-3xl" />
          </div>
        </div>

        {/* Heading */}

        <h1 className="text-4xl font-bold text-center text-white">
          Create Account
        </h1>

        <p className="text-center text-gray-200 mt-2 mb-8">
          Join Food Ordering Today 🍔
        </p>

        {/* Name */}

        <div className="relative mb-4">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={data.name}
            onChange={change}
            className="w-full bg-white rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Email */}

        <div className="relative mb-4">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={data.email}
            onChange={change}
            className="w-full bg-white rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Mobile */}

        <div className="relative mb-4">
          <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={data.mobile}
            onChange={change}
            className="w-full bg-white rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Password */}

        <div className="relative mb-6">

          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={change}
            className="w-full bg-white rounded-xl py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IoEyeOff size={22} />
            ) : (
              <IoEye size={22} />
            )}
          </button>

        </div>

        {/* Signup Button */}

        <button
          onClick={signup}
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 duration-300 text-white py-3 rounded-xl font-bold shadow-lg"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Divider */}

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/30"></div>

          <span className="px-3 text-white text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Login */}

        <button
          onClick={() => navigate("/")}
          className="w-full border border-white text-white py-3 rounded-xl hover:bg-white hover:text-black duration-300 font-semibold"
        >
          Already Have an Account? Login
        </button>

      </div>
    </div>
  );
}

export default Signup;