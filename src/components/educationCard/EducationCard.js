import React, {useContext} from "react";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";
import {motion} from "framer-motion";

export default function EducationCard({school}) {
  const {isDark} = useContext(StyleContext);

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="bullet-item">
            {item}
          </li>
        ))
      : null;
  };

  return (
    <motion.div
      className={isDark ? "education-card dark-card" : "education-card"}
      initial={{opacity: 0, x: -30}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      transition={{duration: 0.6}}
      whileHover={{y: -4}}
    >
      <div className="education-card-left">
        <div className="school-logo-container">
          {school.logo ? (
            <img
              className="school-logo"
              src={school.logo}
              alt={school.schoolName}
            />
          ) : (
            <span className="school-logo-placeholder">🎓</span>
          )}
        </div>
      </div>

      <div className="education-card-right">
        <div className="card-header">
          <h3 className="school-name">{school.schoolName}</h3>
          <span className="school-duration">{school.duration}</span>
        </div>
        <h4 className="school-degree">{school.subHeader}</h4>
        <p className="school-desc">{school.desc}</p>

        {school.descBullets && (
          <div className="school-bullets">
            <ul>
              <GetDescBullets descBullets={school.descBullets} />
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}
