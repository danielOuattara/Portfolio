import React from "react";
import { graphql } from "gatsby";
import { Projects, Seo } from "../components";

export default function ProjectsPage(props) {
  const projects = props.data.allContentfulPortfolioProjects.nodes;
  return (
    <Seo>
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </Seo>
  );
}

export const Head = () => <Seo title={"Projects"} />;

export const query = graphql`
  query {
    allContentfulPortfolioProjects {
      totalCount
      nodes {
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
        }
        technologies
        images_list {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          id
        }
      }
    }
  }
`;
