const Features = () => {
  const features = [
    {
      title: "🧭 Career Navigation",
      description:
        "Discover the best career paths based on your technical skills and interests.",
    },

    {
      title: "🎯 Skill Match Analysis",
      description:
        "Analyze your skills and find careers with percentage-based matching.",
    },

    {
      title: "🚀 Career Roadmaps",
      description:
        "Get guided learning paths and roadmap suggestions for future growth.",
    },

    {
      title: "💻 Technical Skill Mapping",
      description:
        "Explore trending technologies and discover modern tech career opportunities.",
    },

    {
      title: "📊 Career Insights",
      description:
        "Understand salary trends, future demand, and industry growth opportunities.",
    },

    {
      title: "🌐 Smart Career Guidance",
      description:
        "AI-powered guidance system helping students choose the right direction.",
    },
  ];

  return (
    <section className="py-20 px-5 bg-[#081229]">
      <h1 className="text-5xl font-bold text-center text-cyan-400 mb-14">
        🚀 Platform Features
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#13203b] border border-cyan-400 rounded-3xl p-8 hover:scale-105 duration-300 shadow-lg hover:shadow-cyan-500/30"
          >
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">
              {feature.title}
            </h2>

            <p className="text-gray-300 leading-7">
              {feature.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;