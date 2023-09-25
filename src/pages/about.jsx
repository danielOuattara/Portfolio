import React from "react";
import { graphql } from "gatsby";
import { Title, Seo } from "../components";

//------------------------------------------------------

export const query = graphql`
  query {
    strapiAbout {
      title
      info
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`;

//------------------------------------------------------
export default function About(props) {
  const aboutData = props.data.strapiAbout;

  return (
    <Seo>
      <section className="about-page">
        <div className="section-center about-center">
          <img
            src={aboutData.image.localFile.publicURL}
            alt={aboutData.title}
            className="about-img"
          />
          <article className="about-text">
            <Title title={aboutData.title} />
            <p>{aboutData.info}</p>
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
