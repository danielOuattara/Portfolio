import React from "react";
import { Hero, Services /* Jobs */, Projects } from "../components";
import { graphql } from "gatsby";

export default function Home(props) {
  const featuredProjects = props.data.allContentfulPortfolioProjects.nodes;

  return (
    <>
      <main>
        <Hero />
        <Services />
        {/* <Jobs /> */}
        <Projects
          title="featured projects"
          showLinkToProjects
          projects={featuredProjects}
        />
      </main>
    </>
  );
}

export const query = graphql`
  query {
    allContentfulPortfolioProjects(filter: { featured: { eq: true } }) {
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
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        technologies
      }
    }
  }
`;
