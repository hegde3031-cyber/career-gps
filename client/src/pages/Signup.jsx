import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,

      options: {
        data: {
          full_name: fullName,
          mobile_number: mobile,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("🎉 Account Created Successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#081229] via-[#0d1b3d] to-[#081229] px-5 overflow-hidden">

      {/* GLOW EFFECT */}
      <div className="absolute w-96 h-96 bg-cyan-500 opacity-20 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* SIGNUP CARD */}
      <form
        autoComplete="off"
        onSubmit={handleSignup}
        className="relative z-10 w-full max-w-md bg-[#13203b]/80 backdrop-blur-lg border border-cyan-400 rounded-3xl p-8 shadow-[0_0_40px_#00ffff55] duration-500 hover:shadow-[0_0_60px_#00ffff99]"
      >

        {/* TITLE */}
        <h1 className="text-5xl font-extrabold text-cyan-400 text-center mb-3 tracking-wide leading-tight">
          🚀 Create Account
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Start your AI-powered career journey 🌍✨
        </p>

        {/* FULL NAME */}
        <input
          type="text"
          placeholder="👤 Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full mb-4 p-4 rounded-xl bg-[#081229] border border-cyan-400 text-white outline-none focus:scale-105 focus:border-cyan-200 duration-300"
        />

        {/* MOBILE NUMBER */}
        <input
          type="text"
          placeholder="📱 Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full mb-4 p-4 rounded-xl bg-[#081229] border border-cyan-400 text-white outline-none focus:scale-105 focus:border-cyan-200 duration-300"
        />

        {/* EMAIL */}
        <input
          type="text"
          name="new_random_user_mail"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="📧 Create Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-4 rounded-xl bg-[#081229] border border-cyan-400 text-white outline-none focus:scale-105 focus:border-cyan-200 duration-300"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="new_random_user_pass"
          autoComplete="new-password"
          placeholder="🔐 Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-4 rounded-xl bg-[#081229] border border-cyan-400 text-white outline-none focus:scale-105 focus:border-cyan-200 duration-300"
        />

        {/* SIGNUP BUTTON */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-300 to-cyan-500 text-black py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_25px_cyan] duration-300"
        >
          🚀 Sign Up
        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-gray-300 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 font-bold hover:text-cyan-200 duration-300"
          >
            Login
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Signup;