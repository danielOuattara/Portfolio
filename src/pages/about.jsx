import React from "react";
import { graphql } from "gatsby";
import image from "./../assets/images/hero2.svg";
import { Title, Seo } from "../components";

//------------------------------------------------------
export default function About(props) {
  const aboutData = props.data.site.siteMetadata.aboutMe;

  return (
    <Seo title={"About"}>
      <section className="about-page">
        <div className="section-center about-center">
          <img src={image} placeholder="blurred" layout="fixed" alt="about" />
          <article className="about-text">
            <Title title={"about"} />
            <p>{aboutData.text}</p>
            <div className="about-stack">
              {aboutData.stack.map((item) => (
                <span key={item}>{item}</span>
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
