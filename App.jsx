import React, { useState } from "react";
import AddProjectForm from "./components/AddProjectForm";
/**import ProjectCardfrom  from "./ProjectCard"; = This is supposed to Worker, but it's refusing the app from loading.*/
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of project 1" },
    { id: 2, title: "Project 2", description: "Description of project 2" },
  ]);
  const [search, setSearch] = useState("");

  const addProject = (title, description) => {
    setProjects([...projects, { id: Date.now(), title, description }]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <AddProjectForm onAdd={addProject} />
      <SearchBar value={search} onChange={setSearch} />
      <ProjectList projects={filteredProjects} onDelete={deleteProject} />
    </div>
  );
}

export default App;

