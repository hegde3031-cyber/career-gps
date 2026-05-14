import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // CLEAR INPUTS ON PAGE LOAD
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  // LOGIN FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login Successful!");
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#081229] px-5">

      <form
        autoComplete="off"
        onSubmit={handleLogin}
        className="w-full max-w-md bg-[#13203b] border border-cyan-400 rounded-3xl p-8 shadow-lg"
      >

        <h1 className="text-5xl font-bold text-cyan-400 text-center mb-8">
          🔐 Login
        </h1>

        {/* EMAIL */}
        <input
          type="email"
          name="random_email_input"
          autoComplete="off"
          autoSave="off"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-5 p-4 rounded-xl bg-[#081229] border border-cyan-400 text-white outline-none"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="random_password_input"
          autoComplete="new-password"
          autoSave="off"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-4 rounded-xl bg-[#081229] border border-cyan-400 text-white outline-none"
        />

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-105 duration-300"
        >
          🚀 Login
        </button>

      </form>

    </div>
  );
};

export default Login;