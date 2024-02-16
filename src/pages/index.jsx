import React from "react";
import { Hero, Services /* Jobs */, Projects, Seo } from "../components";
import { graphql } from "gatsby";

export default function Home(props) {
  const featuredProjects = props.data.allContentfulPortfolioProjects.nodes;

  return (
    <Seo>
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
    </Seo>
  );
}

export const Head = () => <Seo title={"Home"} />;

export const query = graphql`
  query {
    allContentfulPortfolioProjects(filter: { featured: { eq: true } }) {
      totalCount
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
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        technologies
      }
    }
  }
`;
