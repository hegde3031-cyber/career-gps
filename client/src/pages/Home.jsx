import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Quotes from "../components/Quotes";

const Home = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
      <Navbar />
      <Hero />
      <Features />
      <Quotes />
    </div>
  );
};

export default Home;