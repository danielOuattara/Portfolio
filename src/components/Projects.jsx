import React from "react";
import { Title, Project } from "./index";
import { Link } from "gatsby";

export default function Projects(props) {
  return (
    <section className="section projects">
      <Title title={props.title} />

      <div className="section-center projects-center">
        {props.projects.map((project, index) => (
          <Project key={project.id} index={index} {...project}></Project>
        ))}
      </div>

      {props.showLinkToProjects && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  );
}
