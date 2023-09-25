import React from "react";
import { Link, graphql /* Link  */ } from "gatsby";
import { Seo } from "./../../components";

//--------------------------------------------------------------

export const query = graphql`
  query ($title: String) {
    strapiProject(title: { eq: $title }) {
      title
      url
      description
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`;

//--------------------------------------------------------------

export default function ProjectTemplate(props) {
  const projectData = props.data.strapiProject;
  return (
    <Seo>
      <main className="project-template-page">
        <h2>{props.pageContext.title}</h2>
        <p>{projectData.description}</p>
        <a href={projectData.url} target="_blank" rel="noreferrer">
          <img
            src={projectData.image.localFile.publicURL}
            alt={projectData.title}
          />
        </a>
        <Link to="/projects" className="btn">
          back to projects
        </Link>
      </main>
    </Seo>
  );
}

export const Head = (props) => {
  const projectData = props.data.strapiProject;
  return (
    <Seo
      title={projectData.title.toUpperCase()}
      description={projectData.description}
      image={projectData.image.localFile.publicURL}
    />
  );
};
