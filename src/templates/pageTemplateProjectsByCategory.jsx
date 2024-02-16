// pageTemplateByProjectType.jsx file

import * as React from "react";
import { graphql } from "gatsby";
import { Projects, Seo } from "../components";

//-------------------------------------------------------------------------------
export const query = graphql`
  query AllProjectsByType($category: String) {
    allContentfulPortfolioProjects(filter: { category: { eq: $category } }) {
      nodes {
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
      }
    }
  }
`;

export default function pageTemplateProjectsByCategory({ data, pageContext }) {
  const projects = data.allContentfulPortfolioProjects.nodes;
  return (
    <main>
      <section className="projects-page">
        <Projects
          title={`${pageContext.category} projects`}
          projects={projects}
        />
      </section>
    </main>
  );
}

// export const Head = () => <Seo title={"Backend Projects"} />;
