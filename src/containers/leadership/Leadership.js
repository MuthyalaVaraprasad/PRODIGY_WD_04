import React, {useContext} from "react";
import "./Leadership.scss";
import {leadershipExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {motion} from "framer-motion";

export default function Leadership() {
  const {isDark} = useContext(StyleContext);

  if (!leadershipExperiences.display) return null;

  return (
    <div className="main leadership-main" id="leadership">
      <h1 className={isDark ? "dark-mode title" : "title"}>
        {leadershipExperiences.title}
      </h1>
      <p className={isDark ? "dark-mode subtitle" : "subtitle"}>
        {leadershipExperiences.subtitle}
      </p>

      <div className="leadership-cards-div">
        {leadershipExperiences.experience.map((card, i) => (
          <motion.div
            key={i}
            className={isDark ? "leadership-card dark-card" : "leadership-card"}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: i * 0.1}}
            whileHover={{y: -5}}
          >
            <div className="leadership-header-div">
              <div className="leadership-logo-wrapper">
                <img
                  src={card.companylogo}
                  alt={card.company}
                  className="leadership-logo"
                />
              </div>
              <div className="leadership-meta">
                <h2>{card.role}</h2>
                <h3>{card.company}</h3>
                <span className="date-badge">{card.date}</span>
              </div>
            </div>
            <div className="leadership-body-div">
              <p className="desc">{card.desc}</p>
              <ul>
                {card.descBullets.map((bullet, idx) => (
                  <li key={idx} className={isDark ? "dark-bullet" : ""}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
