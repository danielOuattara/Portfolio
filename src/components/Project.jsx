import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "gatsby";
import { titleToSlug } from "./../utilities/titleToSlug";

export default function Project(props) {
  console.log("props = ", props);
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(props.featured_image.gatsbyImageData)}
        className="project-img"
        alt={props.title}
      />

      <div className="project-info">
        <Link
          to={`/projects/${props.type}/${titleToSlug(props.title)}`}
          className="project-slug"
        >
          <h3>
            {" "}
            <span className="project-number">#{props.index + 1}</span>&nbsp;
            {props.title} &nbsp;
            <BsBoxArrowInUpRight className="goto project-number" />
          </h3>
        </Link>

        <p className="project-desc">
          {props.description.description.slice(0, 85) + "..."}
        </p>

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
            <HiAtSymbol className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
}
