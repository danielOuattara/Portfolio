import React from "react";
import { Link, graphql } from "gatsby";
import { Seo } from "../components";

//-------------------------------------------------------------------------------
export const query = graphql`
  query SingleProject($title: String) {
    contentfulPortfolioProjects(title: { eq: $title }) {
      id
      title
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

export default function pageTemplateSingleProject({ data, pageContext }) {
  const project = data.contentfulPortfolioProjects;
  console.log("project = ", project);

  return (
    <main className="project-template-page">
      <h2>{pageContext.title}</h2>
      <p>{project.description.description}</p>
      <a href={project.url_website} target="_blank" rel="noreferrer">
        <img src={project.featured_image.publicUrl} alt={project.title} />
      </a>
      <Link to="/projects" className="btn">
        back to projects
      </Link>
    </main>
  );
}

// export const Head = (props) => {
//   const project = props.data.contentfulPortfolioProjects;
//   return (
//     <Seo
//       title={project.title}
//       description={project.description.description}
//       image={project.featured_image.publicUrl}
//     />
//   );
// };
