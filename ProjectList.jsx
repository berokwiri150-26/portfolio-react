import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, onDelete }) {
  return (
    <div>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ProjectList;
