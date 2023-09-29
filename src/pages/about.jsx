import React from "react";
import { graphql } from "gatsby";
import { Title, Seo } from "../components";
//------------------------------------------------------
export default function About(props) {
  const aboutData = props.data.site.siteMetadata.aboutMe;

  return (
    <Seo>
      <section className="about-page">
        <div className="section-center about-center">
          <h1>About page</h1>
          <img
            src="/src/assets/images/hero.svg"
            alt={"about"}
            className="about-img"
          />
          <article className="about-text">
            <Title title={"about"} />
            <p>{aboutData.text}</p>
            <div className="about-stack">
              {aboutData.stack.map((item) => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Seo>
  );
}

export const Head = () => <Seo title={"About"} />;

//------------------------------------------------------

export const query = graphql`
  query {
    site {
      siteMetadata {
        aboutMe {
          text
          stack
          image
        }
      }
    }
  }
`;
