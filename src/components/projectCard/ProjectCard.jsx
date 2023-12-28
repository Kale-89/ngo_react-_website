import React from "react";
import "./projectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="card">
      <div className="number">{props.quantity}</div>
      <div className="type">{props.type}</div>
      <button>Learn More</button>
    </div>
  );
}
