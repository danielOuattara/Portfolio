import React from "react";
import { graphql } from "gatsby";
import { Projects, Seo } from "../../../components";

export default function FullstackProjectsPage(props) {
  console.log("props = ", props);
  const projects = props.data.allContentfulPortfolioProjects.nodes;
  return (
    <Seo>
      <main>
        <section className="projects-page">
          <Projects
            title="fullstack projects"
            projects={projects}
            gradePath={"fullstack"}
          />
        </section>
      </main>
    </Seo>
  );
}

export const Head = () => <Seo title={"Fullstack Projects"} />;

export const query = graphql`
  query allProjectByGrade {
    allContentfulPortfolioProjects(filter: { type: { eq: "fullstack" } }) {
      totalCount
      nodes {
        id
        title
        type
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
