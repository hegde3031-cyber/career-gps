import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-cyan-400">
          Career GPS
        </h1>

        <div className="flex items-center gap-5">

          <Link
            to="/login"
            className="text-white hover:text-cyan-400 duration-300"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-cyan-400 text-black px-5 py-2 rounded-xl hover:scale-105 duration-300"
          >
            Signup
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;