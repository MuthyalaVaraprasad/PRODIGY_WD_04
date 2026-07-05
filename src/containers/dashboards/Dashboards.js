import React, {useState, useEffect, useRef, useContext} from "react";
import "./Dashboards.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  FaGraduationCap,
  FaCodeBranch,
  FaCheckCircle,
  FaExclamationTriangle,
  FaServer,
  FaCheck,
  FaQuestionCircle,
  FaGamepad,
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";
import {motion, AnimatePresence} from "framer-motion";

// Sample Flashcards for AI Interview Simulator
const flashcards = [
  {
    question:
      "What is the difference between Virtual DOM and Real DOM in React?",
    answer:
      "Virtual DOM is a lightweight, in-memory representation of the Real DOM. React uses it to compute diffs and batch updates efficiently (reconciliation) without reloading the entire page layout."
  },
  {
    question: "Explain the difference between SQL's JOIN and UNION operations.",
    answer:
      "JOIN combines columns from different tables based on a related column, expanding horizontally. UNION combines rows from queries with matching column counts and types, expanding vertically."
  },
  {
    question: "What is the purpose of useEffect hook in React?",
    answer:
      "useEffect performs side effects in functional components, such as API fetching, subscribing to events, or manipulating the DOM. It runs after rendering, based on its dependency array."
  },
  {
    question: "Explain the concept of REST APIs and status codes.",
    answer:
      "REST stands for Representational State Transfer, utilizing standard HTTP methods (GET, POST, PUT, DELETE). Status codes signify outcomes: 200 (Success), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error)."
  },
  {
    question: "What is a Promise in JavaScript and how does async/await work?",
    answer:
      "A Promise represents the eventual completion (or failure) of an asynchronous operation. Async/await is syntactic sugar over promises, allowing asynchronous code to be written sequentially using try/catch."
  }
];

// Grid settings for Snake Game
const GRID_SIZE = 15;
const INITIAL_SPEED = 180;
const TECH_FOODS = [
  "React",
  "JavaScript",
  "Python",
  "MongoDB",
  "SQL",
  "HTML5",
  "CSS3"
];

export default function Dashboards() {
  const {isDark} = useContext(StyleContext);
  const [activeTab, setActiveTab] = useState("career"); // "career", "devops", or "sandbox"

  // Dashboard 1 States (AI Career)
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [roadmapTopic, setRoadmapTopic] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);

  // Dashboard 2 States (DevOps Hub)
  const [isPinging, setIsPinging] = useState(false);
  const [pingData, setPingData] = useState([
    {
      name: "Crescence 2K26 Platform",
      status: "ONLINE",
      latency: "112ms",
      url: "https://crescence2k26.in/"
    },
    {
      name: "Weather Forecast App",
      status: "ONLINE",
      latency: "88ms",
      url: "https://weatherapp-smoky-three.vercel.app/"
    },
    {
      name: "AI Resume Analyzer",
      status: "ONLINE",
      latency: "145ms",
      url: "https://resumeanalyzer-one-zeta.vercel.app/"
    },
    {
      name: "Personal Portfolio site",
      status: "ONLINE",
      latency: "65ms",
      url: "https://varaprasad-blush.vercel.app/"
    },
    {
      name: "Industrial AI Platform",
      status: "ONLINE",
      latency: "190ms",
      url: "https://industrial-ai-hackathon.vercel.app/"
    },
    {
      name: "Crisis Detection System",
      status: "ONLINE",
      latency: "124ms",
      url: "https://economiccrisis.netlify.app/"
    }
  ]);

  // Dashboard 3 States (Retro Snake Game)
  const [snake, setSnake] = useState([{x: 7, y: 7}]);
  const [direction, setDirection] = useState({x: 0, y: -1}); // Default Up
  const [food, setFood] = useState({x: 3, y: 3, name: "React"});
  const [gameScore, setGameScore] = useState(0);
  const [gameHighScore, setGameHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [retroLogs, setRetroLogs] = useState([
    "[SYSTEM] Ready to deploy. Press Start!"
  ]);

  // Game Keyboard controller reference
  const gameAreaRef = useRef(null);

  // AI Career Analyzer Logic
  const handleAnalyze = e => {
    e.preventDefault();
    if (!jobDescription.trim()) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);
    setRoadmapTopic(null);

    setTimeout(() => {
      const text = jobDescription.toLowerCase();
      const skillsMatch = [];
      const gaps = [];

      // Keyword definitions
      const keywordMap = {
        react: "React.js",
        javascript: "JavaScript",
        python: "Python",
        node: "Node.js",
        express: "Express.js",
        mongodb: "MongoDB",
        mysql: "MySQL",
        api: "REST APIs",
        cloud: "Oracle Cloud (OCI)",
        git: "Git & GitHub",
        aws: "AWS Fundamentals",
        azure: "Azure Fundamentals",
        dsa: "Data Structures & Algorithms",
        ai: "Generative AI Foundations"
      };

      // Match skills
      Object.keys(keywordMap).forEach(key => {
        if (text.includes(key)) {
          skillsMatch.push(keywordMap[key]);
        }
      });

      // Mock gap checker for skills the recruiter wants but are not in the core stack
      const possibleGaps = {
        docker: "Docker Containers",
        kubernetes: "Kubernetes orchestration",
        "docker/kubernetes": "Docker & Kubernetes",
        "ci/cd": "CI/CD Pipelines",
        jenkins: "Jenkins automation",
        graphql: "GraphQL querying",
        typescript: "TypeScript",
        redis: "Redis caching",
        next: "Next.js Framework",
        redux: "Redux State Management"
      };

      Object.keys(possibleGaps).forEach(key => {
        if (text.includes(key)) {
          gaps.push(possibleGaps[key]);
        }
      });

      // Default fallback if no matches or gaps
      if (skillsMatch.length === 0) {
        skillsMatch.push("HTML5", "CSS3", "JavaScript", "React.js");
      }
      if (gaps.length === 0) {
        gaps.push("Docker Containers", "CI/CD Pipelines");
      }

      // Calculate score out of 100
      const totalKeywords = skillsMatch.length + gaps.length;
      const calculatedScore = Math.min(
        100,
        Math.max(65, Math.round((skillsMatch.length / totalKeywords) * 100))
      );

      setAnalysisResult({
        score: calculatedScore,
        matched: skillsMatch,
        gaps: gaps
      });
      setIsAnalyzing(false);
    }, 1200);
  };

  const getRoadmapContent = topic => {
    switch (topic) {
      case "Docker Containers":
      case "Docker & Kubernetes":
        return {
          steps: [
            "Step 1: Learn containerization fundamentals (Virtual Machines vs. Containers).",
            "Step 2: Write custom Dockerfiles to containerize React & Express apps.",
            "Step 3: Master multi-container orchestration using Docker Compose.",
            "Step 4: Practice deploying containerized images to AWS ECS or Azure Container Instances."
          ],
          source:
            "Recommended Courses: GeeksforGeeks Docker Hub Course / AWS Container Foundations"
        };
      case "CI/CD Pipelines":
      case "Jenkins automation":
        return {
          steps: [
            "Step 1: Understand continuous integration principles & automated testing.",
            "Step 2: Build automation workflows using GitHub Actions YAML scripts.",
            "Step 3: Setup Jenkins pipelines to trigger builds on repository pushes.",
            "Step 4: Integrate automated Slack or Telegram notifications on successful builds."
          ],
          source:
            "Recommended Resources: GitHub Actions Docs / GeeksforGeeks DevOps Pipelines"
        };
      default:
        return {
          steps: [
            `Step 1: Learn basic syntax and configuration standards for ${topic}.`,
            "Step 2: Build a small prototype integrating it into your local React app.",
            "Step 3: Write test cases to verify error handling and state persistence.",
            "Step 4: Deploy the update and document integration workflows."
          ],
          source:
            "Recommended Resources: GeeksforGeeks technical blogs & AWS Learn portal."
        };
    }
  };

  // Run ping checker simulator
  const handlePingCheck = () => {
    setIsPinging(true);
    const updated = pingData.map(d => ({...d, latency: "Checking..."}));
    setPingData(updated);

    setTimeout(() => {
      const refreshed = pingData.map(d => {
        const randTime = Math.floor(Math.random() * 80) + 40; // Latencies 40ms to 120ms
        return {...d, latency: `${randTime}ms`, status: "ONLINE"};
      });
      setPingData(refreshed);
      setIsPinging(false);
    }, 1500);
  };

  // 🎮 RETRO SNAKE GAME LOGIC
  const generateRandomFood = currentSnake => {
    let foodCandidate;
    let isOnSnake = true;
    while (isOnSnake) {
      const rx = Math.floor(Math.random() * GRID_SIZE);
      const ry = Math.floor(Math.random() * GRID_SIZE);
      isOnSnake = currentSnake.some(
        segment => segment.x === rx && segment.y === ry
      );
      if (!isOnSnake) {
        foodCandidate = {
          x: rx,
          y: ry,
          name: TECH_FOODS[Math.floor(Math.random() * TECH_FOODS.length)]
        };
      }
    }
    return foodCandidate;
  };

  const handleGameStart = () => {
    setSnake([{x: 7, y: 7}]);
    setDirection({x: 0, y: -1});
    setGameScore(0);
    setIsGameOver(false);
    setIsPlaying(true);
    setFood(generateRandomFood([{x: 7, y: 7}]));
    setRetroLogs([
      "[SYSTEM] Dev Sandbox initialized.",
      "[CMD] Snake process running..."
    ]);
    if (gameAreaRef.current) gameAreaRef.current.focus();
  };

  const handleKeyPress = e => {
    if (!isPlaying || isGameOver) return;
    const key = e.key;
    if ((key === "ArrowUp" || key.toLowerCase() === "w") && direction.y !== 1) {
      setDirection({x: 0, y: -1});
    } else if (
      (key === "ArrowDown" || key.toLowerCase() === "s") &&
      direction.y !== -1
    ) {
      setDirection({x: 0, y: 1});
    } else if (
      (key === "ArrowLeft" || key.toLowerCase() === "a") &&
      direction.x !== 1
    ) {
      setDirection({x: -1, y: 0});
    } else if (
      (key === "ArrowRight" || key.toLowerCase() === "d") &&
      direction.x !== -1
    ) {
      setDirection({x: 1, y: 0});
    }
  };

  const changeMobileDirection = newDir => {
    if (!isPlaying || isGameOver) return;
    if (newDir === "UP" && direction.y !== 1) setDirection({x: 0, y: -1});
    if (newDir === "DOWN" && direction.y !== -1) setDirection({x: 0, y: 1});
    if (newDir === "LEFT" && direction.x !== 1) setDirection({x: -1, y: 0});
    if (newDir === "RIGHT" && direction.x !== -1) setDirection({x: 1, y: 0});
  };

  // Game Loop Tick
  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    const gameInterval = setInterval(() => {
      setSnake(prevSnake => {
        const head = prevSnake[0];
        const newHead = {x: head.x + direction.x, y: head.y + direction.y};

        // Grid Boundaries collision checks
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setIsGameOver(true);
          setIsPlaying(false);
          setRetroLogs(prev => [...prev, "[FATAL] Collision. Deploy failed."]);
          return prevSnake;
        }

        // Tail collision checks
        const hitSelf = prevSnake.some(
          segment => segment.x === newHead.x && segment.y === newHead.y
        );
        if (hitSelf) {
          setIsGameOver(true);
          setIsPlaying(false);
          setRetroLogs(prev => [
            ...prev,
            "[FATAL] Logic Loop crash. Restart stack."
          ]);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Eat tech food
        if (newHead.x === food.x && newHead.y === food.y) {
          setGameScore(prevScore => {
            const added = prevScore + 10;
            if (added > gameHighScore) setGameHighScore(added);
            return added;
          });
          setRetroLogs(prev => [
            ...prev,
            `[DEBUG] Installed: ${food.name} module. Score +10 XP.`
          ]);
          setFood(generateRandomFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, INITIAL_SPEED);

    return () => clearInterval(gameInterval);
  }, [isPlaying, isGameOver, direction, food, gameHighScore]);

  return (
    <div className="main dashboards-main" id="dashboards">
      <h1 className={isDark ? "dark-mode title" : "title"}>
        📊 Interactive Developer Dashboards
      </h1>
      <p className={isDark ? "dark-mode subtitle" : "subtitle"}>
        Auditing skills matching, tracking deployment health, and testing stack
        logic games
      </p>

      {/* Tabs Menu */}
      <div className="dashboards-tabs">
        <button
          onClick={() => setActiveTab("career")}
          className={activeTab === "career" ? "tab-btn active-tab" : "tab-btn"}
        >
          <FaGraduationCap size={18} />
          <span>AI Career Auditor</span>
        </button>
        <button
          onClick={() => setActiveTab("devops")}
          className={activeTab === "devops" ? "tab-btn active-tab" : "tab-btn"}
        >
          <FaCodeBranch size={16} />
          <span>DevOps & Git Hub</span>
        </button>
        <button
          onClick={() => setActiveTab("sandbox")}
          className={activeTab === "sandbox" ? "tab-btn active-tab" : "tab-btn"}
        >
          <FaGamepad size={18} />
          <span>Retro Gamified Sandbox</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className={isDark ? "tab-panel dark-panel" : "tab-panel"}>
        {activeTab === "career" ? (
          <div className="career-panel-grid">
            {/* Left Column: Job Analyzer Form */}
            <div className="analyzer-column">
              <h3>Job Compatibility Scorer 🕵️‍♂️</h3>
              <p className="column-desc">
                Paste a target Full Stack or React job description to calculate
                Varaprasad's suitability index and identify skill alignments.
              </p>
              <form onSubmit={handleAnalyze}>
                <textarea
                  placeholder="Paste Job Description here (e.g. 'Seeking a React developer with experience in Node, MongoDB, REST APIs, and Docker containerization...')"
                  value={jobDescription}
                  onChange={e => setJobDescription(e.target.value)}
                  rows={6}
                />
                <button
                  type="submit"
                  disabled={isAnalyzing || !jobDescription.trim()}
                  className="action-button"
                >
                  {isAnalyzing ? "AI Auditing..." : "Calculate ATS Match %"}
                </button>
              </form>

              {/* Analysis Results Display */}
              <AnimatePresence>
                {analysisResult && (
                  <motion.div
                    className="analysis-results-card"
                    initial={{opacity: 0, y: 15}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.4}}
                  >
                    <div className="results-header">
                      <div className="gauge-score">
                        <svg viewBox="0 0 36 36" className="circular-chart">
                          <path
                            className="circle-bg"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="circle"
                            strokeDasharray={`${analysisResult.score}, 100`}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <text x="18" y="20.35" className="percentage">
                            {analysisResult.score}%
                          </text>
                        </svg>
                      </div>
                      <div>
                        <h4>Compatibility Index</h4>
                        <p>
                          {analysisResult.score >= 80
                            ? "🔥 Excellent Fit Profile!"
                            : "👍 Solid Foundation Match"}
                        </p>
                      </div>
                    </div>

                    <div className="skills-split">
                      <div className="matched-box">
                        <h5>
                          <FaCheckCircle color="#25D366" /> Aligned Stack (
                          {analysisResult.matched.length})
                        </h5>
                        <div className="chips">
                          {analysisResult.matched.map((m, idx) => (
                            <span key={idx} className="match-chip">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="gaps-box">
                        <h5>
                          <FaExclamationTriangle color="#FFA116" /> Skill Gaps
                          Identified ({analysisResult.gaps.length})
                        </h5>
                        <div className="chips">
                          {analysisResult.gaps.map((g, idx) => (
                            <button
                              key={idx}
                              onClick={() => setRoadmapTopic(g)}
                              className="gap-chip-btn"
                            >
                              {g} 💡
                            </button>
                          ))}
                        </div>
                        <p className="tip-text">
                          Tap a gap skill above to audit learning roadmap!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Roadmap Generator Display */}
              <AnimatePresence>
                {roadmapTopic && (
                  <motion.div
                    className="roadmap-display-card"
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0}}
                  >
                    <div className="roadmap-header">
                      <h4>Learning Path: {roadmapTopic} 🛣️</h4>
                      <button
                        onClick={() => setRoadmapTopic(null)}
                        className="close-btn-mini"
                      >
                        ×
                      </button>
                    </div>
                    <div className="roadmap-body">
                      <ul>
                        {getRoadmapContent(roadmapTopic).steps.map(
                          (step, idx) => (
                            <li key={idx}>{step}</li>
                          )
                        )}
                      </ul>
                      <span className="roadmap-src">
                        {getRoadmapContent(topic => topic).source}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Flip Interview Simulator */}
            <div className="simulator-column">
              <h3>AI Interview Flashcard Simulator 💡</h3>
              <p className="column-desc">
                Select a card, review the core conceptual questions, and click
                to flip the card to audit correct response blueprints instantly.
              </p>
              <div className="flashcards-container">
                {flashcards.map((card, idx) => (
                  <div
                    key={idx}
                    className={`flashcard-scene ${
                      flippedCard === idx ? "is-flipped" : ""
                    }`}
                    onClick={() =>
                      setFlippedCard(flippedCard === idx ? null : idx)
                    }
                  >
                    <div className="flashcard-inner">
                      {/* Front Side */}
                      <div className="flashcard-face flashcard-front">
                        <div className="card-q-header">
                          <FaQuestionCircle size={20} className="q-icon" />
                          <span>Question {idx + 1}</span>
                        </div>
                        <p className="question-text">{card.question}</p>
                        <span className="tap-hint">
                          Tap to flip & audit response →
                        </span>
                      </div>
                      {/* Back Side */}
                      <div className="flashcard-face flashcard-back">
                        <div className="card-a-header">
                          <FaCheck size={18} className="a-icon" />
                          <span>Correct Blueprint Response</span>
                        </div>
                        <p className="answer-text">{card.answer}</p>
                        <span className="tap-hint">
                          Tap to return to question ←
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : activeTab === "devops" ? (
          <div className="devops-panel-grid">
            {/* Left Column: Real-time Commit Chart & Stats */}
            <div className="chart-column">
              <h3>Weekly Coding Distribution 📈</h3>
              <p className="column-desc">
                Language distribution and commit activity ratios calculated
                across active project repos.
              </p>

              {/* Mock Bar Chart using SVGs */}
              <div className="mock-chart-container">
                <svg viewBox="0 0 400 240" className="chart-svg">
                  {/* Grid Lines */}
                  <line
                    x1="40"
                    y1="200"
                    x2="380"
                    y2="200"
                    stroke="#cccccc"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="40"
                    y1="150"
                    x2="380"
                    y2="150"
                    stroke="#cccccc"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="40"
                    y1="100"
                    x2="380"
                    y2="100"
                    stroke="#cccccc"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="40"
                    y1="50"
                    x2="380"
                    y2="50"
                    stroke="#cccccc"
                    strokeWidth="1"
                    opacity="0.3"
                  />

                  {/* Bars (React, JS, Python, SQL) */}
                  <rect
                    x="70"
                    y="70"
                    width="40"
                    height="130"
                    fill="#645beb"
                    rx="4"
                  />
                  <rect
                    x="150"
                    y="110"
                    width="40"
                    height="90"
                    fill="#00f2fe"
                    rx="4"
                  />
                  <rect
                    x="230"
                    y="155"
                    width="40"
                    height="45"
                    fill="#FFA116"
                    rx="4"
                  />
                  <rect
                    x="310"
                    y="170"
                    width="40"
                    height="30"
                    fill="#2ec4b6"
                    rx="4"
                  />

                  {/* Axis labels */}
                  <text
                    x="90"
                    y="220"
                    textAnchor="middle"
                    fill="#666"
                    fontSize="11"
                    fontWeight="600"
                  >
                    React.js
                  </text>
                  <text
                    x="170"
                    y="220"
                    textAnchor="middle"
                    fill="#666"
                    fontSize="11"
                    fontWeight="600"
                  >
                    JS/TS
                  </text>
                  <text
                    x="250"
                    y="220"
                    textAnchor="middle"
                    fill="#666"
                    fontSize="11"
                    fontWeight="600"
                  >
                    Python
                  </text>
                  <text
                    x="330"
                    y="220"
                    textAnchor="middle"
                    fill="#666"
                    fontSize="11"
                    fontWeight="600"
                  >
                    SQL/DB
                  </text>

                  {/* Score labels */}
                  <text
                    x="90"
                    y="60"
                    textAnchor="middle"
                    fill="#645beb"
                    fontSize="12"
                    fontWeight="700"
                  >
                    45%
                  </text>
                  <text
                    x="170"
                    y="100"
                    textAnchor="middle"
                    fill="#00f2fe"
                    fontSize="12"
                    fontWeight="700"
                  >
                    30%
                  </text>
                  <text
                    x="250"
                    y="145"
                    textAnchor="middle"
                    fill="#FFA116"
                    fontSize="12"
                    fontWeight="700"
                  >
                    15%
                  </text>
                  <text
                    x="330"
                    y="160"
                    textAnchor="middle"
                    fill="#2ec4b6"
                    fontSize="12"
                    fontWeight="700"
                  >
                    10%
                  </text>
                </svg>
              </div>

              {/* Dev stats summary */}
              <div className="dev-stats-summary">
                <div className="stat-box">
                  <h4>800+</h4>
                  <p>LeetCode/GFG Solved</p>
                </div>
                <div className="stat-box">
                  <h4>15+</h4>
                  <p>Projects Maintained</p>
                </div>
                <div className="stat-box">
                  <h4>98.8%</h4>
                  <p>Deployment Uptime</p>
                </div>
              </div>
            </div>

            {/* Right Column: Live Status Ping Monitor & Release Logs */}
            <div className="status-column">
              <div className="status-header">
                <h3>Live Deployment Health Monitor 🟢</h3>
                <button
                  onClick={handlePingCheck}
                  disabled={isPinging}
                  className="ping-btn"
                >
                  {isPinging ? "Scanning Links..." : "Run PING Check"}
                </button>
              </div>
              <p className="column-desc">
                Real-time connection handshake checks for active portfolios and
                applications.
              </p>

              {/* Ping List */}
              <div className="ping-grid">
                {pingData.map((d, i) => (
                  <div key={i} className="ping-row">
                    <div className="ping-name-div">
                      <FaServer size={14} className="server-icon" />
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="app-link"
                      >
                        {d.name}
                      </a>
                    </div>
                    <div className="ping-indicators">
                      <span className="status-badge-mini">{d.status}</span>
                      <span className="latency-badge">{d.latency}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Deployment Log Timeline */}
              <div className="deploy-timeline">
                <h4>Recent Release logs 📜</h4>
                <div className="timeline-items">
                  <div className="timeline-item-log">
                    <span className="log-date">Today</span>
                    <p className="log-text">
                      <strong>feat:</strong> Integrated 18 analytical commands
                      into chatbot panel.
                    </p>
                  </div>
                  <div className="timeline-item-log">
                    <span className="log-date">Yesterday</span>
                    <p className="log-text">
                      <strong>feat:</strong> Added glassmorphic Contact Modal
                      and 3D portal transitions.
                    </p>
                  </div>
                  <div className="timeline-item-log">
                    <span className="log-date">3 days ago</span>
                    <p className="log-text">
                      <strong>refactor:</strong> Re-designed education summaries
                      & certifications grid cards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 3: Retro Gamified Sandbox (Snake Game) */
          <div className="sandbox-panel-grid">
            <div
              className="game-column"
              ref={gameAreaRef}
              tabIndex={0}
              onKeyDown={handleKeyPress}
              style={{outline: "none"}}
            >
              <div className="game-header-bar">
                <h3>🎮 Tech Stack Dev-Snake</h3>
                <div className="game-scores">
                  <span>
                    Score: <strong>{gameScore}</strong>
                  </span>
                  <span>
                    High Score: <strong>{gameHighScore}</strong>
                  </span>
                </div>
              </div>
              <p className="column-desc">
                Install coding modules (React, JavaScript, Python) by
                maneuvering the snake. Avoid walls and loops!
                {isPlaying && (
                  <span className="keyboard-alert">
                    {" "}
                    (Use Arrow Keys or WASD)
                  </span>
                )}
              </p>

              {/* Grid Canvas */}
              <div className="snake-grid-container">
                {Array.from({length: GRID_SIZE}).map((_, y) => (
                  <div key={y} className="snake-grid-row">
                    {Array.from({length: GRID_SIZE}).map((_, x) => {
                      const isHead = snake[0].x === x && snake[0].y === y;
                      const isBody = snake
                        .slice(1)
                        .some(s => s.x === x && s.y === y);
                      const isFood = food.x === x && food.y === y;

                      let cellClass = "snake-cell";
                      if (isHead) cellClass += " snake-head";
                      else if (isBody) cellClass += " snake-body";
                      else if (isFood) cellClass += " snake-food";

                      return (
                        <div key={x} className={cellClass}>
                          {isFood && (
                            <span className="food-label">{food.name[0]}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}

                {/* Overlay Screen */}
                {(!isPlaying || isGameOver) && (
                  <div className="game-start-overlay">
                    {isGameOver ? (
                      <div className="overlay-content">
                        <h4 className="game-over-title">⚠️ SYSTEM CRASH</h4>
                        <p>Core code loop crashed. Score: {gameScore} XP</p>
                        <button
                          onClick={handleGameStart}
                          className="game-action-btn"
                        >
                          Restart Dev Stack
                        </button>
                      </div>
                    ) : (
                      <div className="overlay-content">
                        <h4>READY TO DEPLOY?</h4>
                        <p>Install tech modules to build the ultimate stack.</p>
                        <button
                          onClick={handleGameStart}
                          className="game-action-btn"
                        >
                          Launch Game
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile controls */}
              <div className="mobile-game-dpad">
                <div className="dpad-row">
                  <button
                    onClick={() => changeMobileDirection("UP")}
                    className="dpad-btn up-btn"
                  >
                    <FaArrowUp />
                  </button>
                </div>
                <div className="dpad-row">
                  <button
                    onClick={() => changeMobileDirection("LEFT")}
                    className="dpad-btn"
                  >
                    <FaArrowLeft />
                  </button>
                  <div className="dpad-spacer"></div>
                  <button
                    onClick={() => changeMobileDirection("RIGHT")}
                    className="dpad-btn"
                  >
                    <FaArrowRight />
                  </button>
                </div>
                <div className="dpad-row">
                  <button
                    onClick={() => changeMobileDirection("DOWN")}
                    className="dpad-btn"
                  >
                    <FaArrowDown />
                  </button>
                </div>
              </div>
            </div>

            {/* Console Log column */}
            <div className="console-column">
              <h3>Retro Console Terminal 💻</h3>
              <p className="column-desc">
                Live compiler output log tracking code installs and build
                errors.
              </p>
              <div className="terminal-screen">
                <div className="terminal-header">
                  <span className="term-dot red"></span>
                  <span className="term-dot yellow"></span>
                  <span className="term-dot green"></span>
                  <span className="term-title">bash - developer-sandbox</span>
                </div>
                <div className="terminal-body">
                  {retroLogs.map((log, idx) => (
                    <div key={idx} className="terminal-line">
                      <span className="term-prompt">$</span> {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
