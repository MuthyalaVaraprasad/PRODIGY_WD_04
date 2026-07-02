import React from "react";
import { certificationsSection } from "../../portfolio";

export default function Certifications() {
  if (!certificationsSection.display) return null;

  return (
    <div className="main" id="certifications">
      <h1>{certificationsSection.title}</h1>

      <ul>
        {certificationsSection.certifications.map((item, i) => (
          <li key={i}>🏆 {item}</li>
        ))}
      </ul>
    </div>
  );
}