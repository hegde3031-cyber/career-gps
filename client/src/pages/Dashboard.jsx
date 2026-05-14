import { useState } from "react";

const Dashboard = () => {
  const [skills, setSkills] = useState("");
  const [careerResult, setCareerResult] = useState("");

  const handleCareerSearch = () => {
    if (!skills.trim()) {
      alert("Please enter your skills");
      return;
    }

    const input = skills.toLowerCase();

    let careers = [];
    let learn = [];

    // VIDEO EDITING
    if (
      input.includes("video") ||
      input.includes("editing") ||
      input.includes("premiere") ||
      input.includes("after effects")
    ) {
      careers = [
        "🎬 Video Editor — 94% Match",
        "🎥 Motion Graphics Designer — 90% Match",
        "📹 Content Creator — 88% Match",
        "🎞️ Cinematic Editor — 85% Match",
      ];

      learn = [
        "🎨 Learn After Effects → Create professional motion graphics",
        "🎬 Learn Color Grading → Improve cinematic quality",
        "📱 Learn Social Media Editing → Become content creator/editor",
      ];
    }

    // AI / ML
    else if (
      input.includes("python") ||
      input.includes("machine learning") ||
      input.includes("tensorflow") ||
      input.includes("ai")
    ) {
      careers = [
        "🤖 AI Engineer — 95% Match",
        "🧠 Machine Learning Engineer — 93% Match",
        "📊 Data Scientist — 90% Match",
        "☁️ AI Cloud Engineer — 86% Match",
      ];

      learn = [
        "📚 Learn Deep Learning → Build AI models",
        "🐍 Master Python Advanced → Become AI developer",
        "☁️ Learn Cloud AI → Deploy intelligent applications",
      ];
    }

    // WEB DEVELOPMENT
    else if (
      input.includes("react") ||
      input.includes("javascript") ||
      input.includes("html") ||
      input.includes("css") ||
      input.includes("node")
    ) {
      careers = [
        "💻 Full Stack Developer — 96% Match",
        "🎨 Frontend Developer — 92% Match",
        "⚙️ Backend Developer — 89% Match",
        "☁️ MERN Stack Engineer — 87% Match",
      ];

      learn = [
        "⚛️ Learn React Advanced → Build modern websites",
        "🟢 Learn Node.js → Create backend systems",
        "🗄️ Learn MongoDB → Manage databases",
      ];
    }

    // CYBER SECURITY
    else if (
      input.includes("cyber") ||
      input.includes("security") ||
      input.includes("ethical hacking")
    ) {
      careers = [
        "🛡️ Cyber Security Analyst — 96% Match",
        "👨‍💻 Ethical Hacker — 93% Match",
        "🔐 Security Engineer — 90% Match",
        "🌐 Network Security Specialist — 88% Match",
      ];

      learn = [
        "🐧 Learn Kali Linux → Ethical hacking",
        "🌐 Learn Networking → Security foundations",
        "🔐 Learn Penetration Testing → Security auditing",
      ];
    }

    // MOBILE DEVELOPMENT
    else if (
      input.includes("flutter") ||
      input.includes("android") ||
      input.includes("kotlin") ||
      input.includes("react native")
    ) {
      careers = [
        "📱 Mobile App Developer — 95% Match",
        "🤖 Android Developer — 91% Match",
        "🍎 iOS Developer — 86% Match",
        "🚀 Cross Platform Developer — 89% Match",
      ];

      learn = [
        "📲 Learn Flutter Advanced → Cross platform apps",
        "🔥 Learn Firebase → Backend integration",
        "🎨 Learn UI/UX → Better mobile experience",
      ];
    }

    // DATA ANALYTICS
    else if (
      input.includes("excel") ||
      input.includes("power bi") ||
      input.includes("sql") ||
      input.includes("tableau")
    ) {
      careers = [
        "📊 Data Analyst — 94% Match",
        "📈 Business Intelligence Analyst — 90% Match",
        "💹 Business Analyst — 87% Match",
        "🧮 Reporting Specialist — 84% Match",
      ];

      learn = [
        "📚 Learn Advanced SQL → Data querying",
        "📊 Learn Power BI → Dashboard building",
        "📈 Learn Tableau → Data visualization",
      ];
    }

    // DEFAULT
    else {
      careers = [
        "💼 Software Engineer — 75% Match",
        "🌐 Web Developer — 72% Match",
        "📊 Tech Consultant — 68% Match",
      ];

      learn = [
        "📚 Learn JavaScript → Strong programming base",
        "⚛️ Learn React → Modern frontend development",
        "🗄️ Learn Databases → Backend understanding",
      ];
    }

    setCareerResult(`
🌟 Career Insights

🚀 Top Career Matches

${careers.join("\n")}

📘 Recommended Skills To Learn

${learn.join("\n")}
    `);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #020024, #090979, #000000)",
        padding: "40px",
        color: "white",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "60px",
            color: "#00ffff",
            marginBottom: "10px",
            textShadow: "0px 0px 25px cyan",
            letterSpacing: "2px",
          }}
        >
          🚀 Career GPS
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "22px",
            marginBottom: "40px",
            color: "#c9f9ff",
          }}
        >
          Discover Your Future Career Path ✨
        </p>

        <div
          style={{
            padding: "30px",
            borderRadius: "25px",
            background: "rgba(0,0,0,0.35)",
            border: "2px solid cyan",
            boxShadow: "0px 0px 25px cyan",
            backdropFilter: "blur(10px)",
          }}
        >
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="💡 Enter your skills here... (Example: Python, React, Video Editing, Cyber Security)"
            style={{
              width: "100%",
              height: "180px",
              borderRadius: "20px",
              border: "2px solid cyan",
              background: "#081b29",
              color: "white",
              padding: "20px",
              fontSize: "20px",
              outline: "none",
              resize: "none",
              boxShadow: "0px 0px 15px cyan",
            }}
          />

          <button
            onClick={handleCareerSearch}
            style={{
              width: "100%",
              marginTop: "25px",
              padding: "18px",
              borderRadius: "18px",
              border: "none",
              background: "linear-gradient(to right, cyan, #00ff99)",
              color: "black",
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0px 0px 20px cyan",
            }}
          >
            🎯 Analyze My Career Path
          </button>
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "35px",
            borderRadius: "25px",
            background: "rgba(0,0,0,0.35)",
            border: "2px solid cyan",
            boxShadow: "0px 0px 25px cyan",
            whiteSpace: "pre-wrap",
            lineHeight: "2",
            fontSize: "22px",
            minHeight: "300px",
            backdropFilter: "blur(10px)",
          }}
        >
          {careerResult || "✨ Your career insights will appear here..."}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;