import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, onClick}) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        onClick={onClick}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  );
}
