const skillData = {
  // PROGRAMMING LANGUAGES

  python: {
    careers: [
      "🤖 AI/ML Engineer — 90% Match",
      "📊 Data Scientist — 87% Match",
      "🐍 Python Developer — 85% Match",
    ],
    learn: [
      "🧠 Deep Learning → Build advanced AI systems",
      "☁️ Cloud AI → Deploy ML projects",
      "📊 Data Analytics → Analyze business data",
    ],
  },

  java: {
    careers: [
      "☕ Java Backend Developer — 89% Match",
      "🏢 Software Engineer — 84% Match",
    ],
    learn: [
      "🌱 Spring Boot → Build enterprise applications",
      "🗄️ SQL → Handle databases professionally",
      "🔐 API Security → Secure backend systems",
    ],
  },

  javascript: {
    careers: [
      "🌐 Web Developer — 91% Match",
      "💻 JavaScript Developer — 88% Match",
    ],
    learn: [
      "⚛️ React → Build dynamic interfaces",
      "🟢 Node.js → Create backend systems",
      "🎨 UI Animations → Improve user experience",
    ],
  },

  typescript: {
    careers: [
      "⚡ Frontend Engineer — 89% Match",
      "🚀 Full Stack Developer — 86% Match",
    ],
    learn: [
      "⚛️ Next.js → Advanced frontend apps",
      "🧠 System Design → Scalable applications",
    ],
  },

  c: {
    careers: [
      "💻 System Programmer — 80% Match",
      "🖥️ Embedded Engineer — 78% Match",
    ],
    learn: [
      "⚙️ Data Structures → Better logic building",
      "🧠 Operating Systems → Low-level systems",
    ],
  },

  cpp: {
    careers: [
      "🎮 Game Developer — 84% Match",
      "💻 Competitive Programmer — 82% Match",
    ],
    learn: [
      "🧠 Advanced DSA → Improve coding skills",
      "🎮 Unreal Engine → Build games",
    ],
  },

  csharp: {
    careers: [
      "🎮 Unity Game Developer — 86% Match",
      "🏢 .NET Developer — 84% Match",
    ],
    learn: [
      ".NET Core → Enterprise applications",
      "🎮 Unity → Build games",
    ],
  },

  go: {
    careers: [
      "☁️ Cloud Backend Engineer — 88% Match",
    ],
    learn: [
      "🐳 Docker → Container deployment",
      "⚙️ Microservices → Scalable architecture",
    ],
  },

  rust: {
    careers: [
      "🔒 Systems Engineer — 84% Match",
      "⚡ Performance Engineer — 82% Match",
    ],
    learn: [
      "🧠 Memory Management → System optimization",
      "☁️ Backend Systems → High-performance servers",
    ],
  },

  php: {
    careers: [
      "🌐 PHP Web Developer — 83% Match",
    ],
    learn: [
      "🗄️ MySQL → Database handling",
      "⚡ Laravel → Modern PHP framework",
    ],
  },

  ruby: {
    careers: [
      "💎 Ruby on Rails Developer — 84% Match",
    ],
    learn: [
      "🚀 Rails Framework → Web applications",
      "🗄️ PostgreSQL → Database systems",
    ],
  },

  swift: {
    careers: [
      "🍎 iOS Developer — 91% Match",
    ],
    learn: [
      "📱 SwiftUI → Modern iOS interfaces",
      "🔥 Firebase → App backend",
    ],
  },

  kotlin: {
    careers: [
      "📱 Android Developer — 90% Match",
    ],
    learn: [
      "📲 Jetpack Compose → Android UI",
      "🔥 Firebase → Authentication & database",
    ],
  },

  r: {
    careers: [
      "📈 Data Analyst — 86% Match",
      "📊 Statistician — 82% Match",
    ],
    learn: [
      "📉 Data Visualization → Better reports",
      "🧠 Machine Learning → Predictive systems",
    ],
  },

  scala: {
    careers: [
      "☁️ Big Data Engineer — 85% Match",
    ],
    learn: [
      "🔥 Apache Spark → Big data processing",
      "🗄️ Hadoop → Distributed systems",
    ],
  },

  perl: {
    careers: [
      "🖥️ Automation Engineer — 78% Match",
    ],
    learn: [
      "⚙️ Shell Scripting → System automation",
      "☁️ Linux Servers → Infrastructure handling",
    ],
  },

  // FRONTEND

  html: {
    careers: [
      "🌐 Frontend Developer — 86% Match",
    ],
    learn: [
      "🎨 CSS Animations → Better design",
      "⚛️ React → Dynamic websites",
    ],
  },

  css: {
    careers: [
      "🎨 UI Developer — 85% Match",
    ],
    learn: [
      "✨ Tailwind CSS → Modern styling",
      "🎬 Framer Motion → Smooth animations",
    ],
  },

  react: {
    careers: [
      "⚛️ Frontend Developer — 92% Match",
      "👨‍💻 Full Stack Developer — 88% Match",
    ],
    learn: [
      "🚀 Next.js → Production-grade applications",
      "🎨 UI/UX → Better interfaces",
      "⚡ Redux → State management",
    ],
  },

  nextjs: {
    careers: [
      "🚀 React Production Developer — 91% Match",
    ],
    learn: [
      "☁️ Vercel Deployment → Deploy websites",
      "⚡ SSR → Faster applications",
    ],
  },

  tailwind: {
    careers: [
      "🎨 UI Engineer — 87% Match",
    ],
    learn: [
      "✨ Responsive Design → Mobile-friendly UI",
      "🎬 Animations → Attractive interfaces",
    ],
  },

  // MOBILE DEVELOPMENT

  flutter: {
    careers: [
      "📱 Mobile App Developer — 91% Match",
    ],
    learn: [
      "🔥 Firebase → Backend integration",
      "🎨 App Animations → Better UI",
      "📲 Play Store Deployment → Publish apps",
    ],
  },

  reactnative: {
    careers: [
      "📱 Cross Platform Developer — 89% Match",
    ],
    learn: [
      "🔥 Firebase → Authentication systems",
      "📲 Native APIs → Device features",
    ],
  },

  android: {
    careers: [
      "📱 Android Developer — 88% Match",
    ],
    learn: [
      "📲 Kotlin → Better Android apps",
      "🔥 Firebase → Backend services",
    ],
  },

  // CLOUD & DEVOPS

  aws: {
    careers: [
      "☁️ Cloud Engineer — 90% Match",
      "⚙️ DevOps Engineer — 85% Match",
    ],
    learn: [
      "🐳 Docker → Application deployment",
      "☸️ Kubernetes → Container orchestration",
      "⚡ CI/CD → Deployment automation",
    ],
  },

  docker: {
    careers: [
      "⚙️ DevOps Engineer — 88% Match",
    ],
    learn: [
      "☸️ Kubernetes → Scaling containers",
      "☁️ AWS → Cloud deployment",
    ],
  },

  kubernetes: {
    careers: [
      "☁️ Cloud DevOps Engineer — 90% Match",
    ],
    learn: [
      "⚡ CI/CD → Automation pipelines",
      "🐳 Docker → Container management",
    ],
  },

  // AI & DATA

  machinelearning: {
    careers: [
      "🤖 Machine Learning Engineer — 92% Match",
    ],
    learn: [
      "🧠 Neural Networks → Advanced AI systems",
      "📊 Data Science → Better predictions",
    ],
  },

  ai: {
    careers: [
      "🤖 AI Engineer — 93% Match",
    ],
    learn: [
      "🧠 Deep Learning → Build AI models",
      "☁️ Cloud AI → Deploy AI systems",
    ],
  },

  tensorflow: {
    careers: [
      "🧠 Deep Learning Engineer — 91% Match",
    ],
    learn: [
      "🤖 Neural Networks → AI systems",
      "📊 Computer Vision → Image AI",
    ],
  },

  pytorch: {
    careers: [
      "🤖 AI Research Engineer — 90% Match",
    ],
    learn: [
      "🧠 NLP → AI language systems",
      "📊 Model Optimization → Faster AI",
    ],
  },

  tableau: {
    careers: [
      "📈 Data Analyst — 88% Match",
    ],
    learn: [
      "📊 Power BI → Business analytics",
      "🗄️ SQL → Querying business data",
    ],
  },

  powerbi: {
    careers: [
      "📊 Business Intelligence Analyst — 87% Match",
    ],
    learn: [
      "📈 Dashboard Design → Better analytics",
      "🗄️ SQL → Business data analysis",
    ],
  },

  // DESIGN

  figma: {
    careers: [
      "🎨 UI/UX Designer — 90% Match",
    ],
    learn: [
      "🧠 User Research → Improve UX",
      "📱 Prototyping → App design",
    ],
  },

  canva: {
    careers: [
      "🖌️ Graphic Designer — 84% Match",
      "📢 Social Media Designer — 82% Match",
    ],
    learn: [
      "🎨 Branding → Visual identity",
      "📈 Marketing Design → Better creatives",
    ],
  },

  photoshop: {
    careers: [
      "🖼️ Graphic Designer — 88% Match",
    ],
    learn: [
      "🎨 Advanced Editing → Professional graphics",
      "📢 Advertisement Design → Marketing visuals",
    ],
  },

  // CYBER SECURITY

  cybersecurity: {
    careers: [
      "🛡️ Cybersecurity Analyst — 90% Match",
    ],
    learn: [
      "🔐 Penetration Testing → Find vulnerabilities",
      "🐧 Linux → Security systems",
    ],
  },

  ethicalhacking: {
    careers: [
      "🕵️ Ethical Hacker — 89% Match",
    ],
    learn: [
      "🔒 Network Security → Protect systems",
      "🐧 Kali Linux → Security testing",
    ],
  },

  networking: {
    careers: [
      "🌐 Network Engineer — 84% Match",
    ],
    learn: [
      "☁️ Cloud Networking → Modern infrastructure",
      "🔐 Firewall Security → Secure networks",
    ],
  },

  // BLOCKCHAIN

  blockchain: {
    careers: [
      "⛓️ Blockchain Developer — 91% Match",
    ],
    learn: [
      "🪙 Smart Contracts → Web3 apps",
      "🔒 Solidity → Blockchain programming",
    ],
  },

  solidity: {
    careers: [
      "🪙 Web3 Developer — 90% Match",
    ],
    learn: [
      "⛓️ Ethereum → Blockchain systems",
      "🔐 Smart Contracts → Decentralized apps",
    ],
  },
};

export default skillData;