import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Otp() {
  const navigate = useNavigate();

  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  const handleChange = (e, nextInput) => {
    if (e.target.value.length === 1 && nextInput) {
      nextInput.current.focus();
    }
  };

  const handleBackspace = (e, prevInput) => {
    if (e.key === "Backspace" && e.target.value === "" && prevInput) {
      prevInput.current.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-orange-500 mb-2">
          Verify OTP
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Enter 4-digit OTP
        </p>

        <div className="flex justify-center gap-3 mb-6">

          <input
            ref={input1}
            maxLength={1}
            className="w-14 h-14 border-2 rounded-lg text-center text-2xl"
            onChange={(e) => handleChange(e, input2)}
          />

          <input
            ref={input2}
            maxLength={1}
            className="w-14 h-14 border-2 rounded-lg text-center text-2xl"
            onChange={(e) => handleChange(e, input3)}
            onKeyDown={(e) => handleBackspace(e, input1)}
          />

          <input
            ref={input3}
            maxLength={1}
            className="w-14 h-14 border-2 rounded-lg text-center text-2xl"
            onChange={(e) => handleChange(e, input4)}
            onKeyDown={(e) => handleBackspace(e, input2)}
          />

          <input
            ref={input4}
            maxLength={1}
            className="w-14 h-14 border-2 rounded-lg text-center text-2xl"
            onKeyDown={(e) => handleBackspace(e, input3)}
          />

        </div>

        <button
          onClick={() => navigate("/home")}
          className="w-full bg-orange-500 text-white py-3 rounded-lg"
        >
          Verify OTP
        </button>

      </div>

    </div>
  );
}

export default Otp;