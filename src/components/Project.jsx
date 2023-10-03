import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { Link } from "gatsby";
import { titleToSlug } from "./../utilities/titleToSlug";

export default function Project(props) {
  console.log(props);
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(props.featured_image.gatsbyImageData)}
        className="project-img"
        alt={props.title}
      />

      <div className="project-info">
        <span className="project-number">#{props.index + 1}</span>

        <Link
          to={`/projects/${titleToSlug(props.title)}`}
          className="project-slug"
        >
          <h3>{props.title}</h3>
        </Link>

        <p className="project-desc">{props.description.description}</p>

        <div className="project-stack">
          {props.technologies.map((techno) => (
            <span key={techno}>{techno}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={props.url_github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>

          <a href={props.url_website} target="_blank" rel="noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
}
