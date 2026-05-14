import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#050816] px-6">

      {/* Animated Glow Circles */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10">

        <h1 className="text-7xl font-black leading-tight text-white">
          🧭 Career
          <span className="text-cyan-400"> GPS</span>
        </h1>

        <p className="text-2xl text-gray-300 mt-8 max-w-3xl leading-10">
          🚀 AI-powered platform helping students discover careers,
          analyze skills, explore opportunities, and navigate their future.
        </p>

        <div className="flex gap-6 justify-center mt-12 flex-wrap">

          <button
            onClick={() => navigate("/login")}
            className="bg-cyan-400 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-110 duration-300 shadow-lg shadow-cyan-500/40"
          >
            🚀 Explore Careers
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="border border-cyan-400 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-cyan-400 hover:text-black duration-300"
          >
            📍 Start Journey
          </button>

        </div>

        {/* Tech Stack Emojis */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 text-3xl">

          <span>🐍 Python</span>
          <span>⚛️ React</span>
          <span>☕ Java</span>
          <span>☁️ Cloud</span>
          <span>🔐 Cyber Security</span>
          <span>🤖 AI</span>

        </div>

      </div>
    </section>
  );
};

export default Hero;