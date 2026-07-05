import React, {useContext} from "react";
import "./timeline.css";
import {journeyTimeline} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {motion} from "framer-motion";

export default function Timeline() {
  const {isDark} = useContext(StyleContext);

  if (!journeyTimeline.display) return null;

  return (
    <div className="timeline-main" id="timeline">
      <h1 className={isDark ? "dark-mode section-title" : "section-title"}>
        {journeyTimeline.title}
      </h1>
      <p className={isDark ? "dark-mode section-subtitle" : "section-subtitle"}>
        {journeyTimeline.subtitle}
      </p>

      <div className="timeline">
        {journeyTimeline.timeline.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: index * 0.1}}
          >
            {/* Glowing Dot on center line */}
            <div className="timeline-dot"></div>

            <div
              className={
                isDark ? "timeline-content dark-content" : "timeline-content"
              }
            >
              <span className="timeline-date">{item.year}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
