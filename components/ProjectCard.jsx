import React from "react";

function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={() => onDelete(project.id)}>X</button>
    </div>
  );
}

export default ProjectCard;
