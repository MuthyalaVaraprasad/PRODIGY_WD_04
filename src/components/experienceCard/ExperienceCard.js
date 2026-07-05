import React, {useState, createRef, useContext} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";
import StyleContext from "../../contexts/StyleContext";
import {motion} from "framer-motion";

export default function ExperienceCard({cardInfo}) {
  const [colorArrays, setColorArrays] = useState([100, 91, 235]); // Default brand purple
  const imgRef = createRef();
  const {isDark} = useContext(StyleContext);

  function getColorArrays() {
    try {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(imgRef.current);
      if (color) {
        setColorArrays(color);
      }
    } catch (err) {
      console.warn(
        "ColorThief failed to extract color, falling back to brand default.",
        err
      );
      // Fallback is already initialized in state
    }
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? "rgb(100, 91, 235)"
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <motion.div
      className={isDark ? "experience-card-dark" : "experience-card"}
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.6}}
      whileHover={{y: -5}}
    >
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        {cardInfo.companylogo ? (
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={() => getColorArrays()}
            onError={() => {
              console.warn(`Failed to load logo for ${cardInfo.company}`);
              setColorArrays([100, 91, 235]); // Fallback
            }}
          />
        ) : (
          <div className="experience-roundedimg-placeholder">💼</div>
        )}
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </motion.div>
  );
}
