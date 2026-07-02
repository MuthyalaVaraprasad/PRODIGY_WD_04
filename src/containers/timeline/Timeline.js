import React from "react";
import "./timeline.css";

export default function Timeline() {
  const timelineData = [
    {
      date: "2022 - Present",
      title: "B.Tech CSE Journey",
      desc: "Pursuing Computer Science Engineering at JNTUH with focus on Full Stack Development, AI, and Software Engineering."
    },
    {
      date: "2023 - 2024",
      title: "Frontend Development Phase",
      desc: "Started building projects using HTML, CSS, JavaScript and React.js. Developed strong UI/UX fundamentals."
    },
    {
      date: "2024",
      title: "Project Building Stage",
      desc: "Built real-world applications like Resume Analyzer, FlashCard App, QuoteVerse, and FitLife projects."
    },
    {
      date: "2025",
      title: "Internship Experience",
      desc: "Completed internships at Prodigy Infotech and CodeAlpha working on React.js, JavaScript, and API integration."
    },
    {
      date: "2025 - 2026",
      title: "Advanced Full Stack + AI",
      desc: "Working on MERN stack applications, AI-based tools, and deploying real-world scalable projects."
    }
  ];

  return (
    <div className="timeline-main">
      <h1 className="section-title">📈 Journey Timeline</h1>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}