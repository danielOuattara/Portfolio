import React from "react";
import { Link, graphql } from "gatsby";
import { Seo } from "./../../components";

//-------------------------------------------------------------------------------

export default function SingleProjectTemplate(props) {
  // console.log(props);
  const projectData = props.data.contentfulPortfolioProjects;
  console.log("projectData = ", projectData);
  return (
    <Seo>
      <main className="project-template-page">
        <h2>{props.pageContext.title}</h2>
        <p>{projectData.description.description}</p>
        <a href={projectData.url} target="_blank" rel="noreferrer">
          <img
            src={projectData.featured_image.publicUrl}
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
  const projectData = props.data.contentfulPortfolioProjects;
  return (
    <Seo
      title={projectData.title}
      description={projectData.description.description}
      image={projectData.featured_image.publicUrl}
    />
  );
};

//-------------------------------------------------------------------------------
export const query = graphql`
  query SingleProjectQuery($title: String) {
    contentfulPortfolioProjects(title: { eq: $title }) {
      id
      title
      grade
      category
      level
      description {
        description
      }
      url_website
      url_github
      featured
      featured_image {
        id
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        publicUrl
      }
      technologies
      images_list {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        id
        publicUrl
      }
    }
  }
`;
