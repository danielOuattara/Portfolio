import React from "react";
import { graphql } from "gatsby";
import { Projects, Seo } from "../../components";

export default function FrontendProjectsPage(props) {
  console.log("props = ", props);
  const projects = props.data.allContentfulPortfolioProjects.nodes;
  return (
    <Seo>
      <main>
        <section className="projects-page">
          <Projects title="mobile projects" projects={projects} />
        </section>
      </main>
    </Seo>
  );
}

export const Head = () => <Seo title={"Mobile Projects"} />;

export const query = graphql`
  query allProjectByGrade {
    allContentfulPortfolioProjects(filter: { type: { eq: "mobile" } }) {
      totalCount
      nodes {
        id
        title
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
  }
`;
