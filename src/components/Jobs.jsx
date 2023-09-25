import React, { useState } from "react";
import { Title } from "./";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

export const query = graphql`
  query {
    allStrapiJob(sort: { createdAt: DESC }) {
      nodes {
        id
        position
        company
        date
        description {
          id
          name
        }
      }
    }
  }
`;
export default function Jobs() {
  const data = useStaticQuery(query);
  const jobs = data.allStrapiJob.nodes;

  const [jobIndex, setJobIndex] = useState(0);
  const jobToShow = jobs[jobIndex];

  return (
    <section className="section jobs">
      <Title title="experience" />

      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              key={job.id}
              className={jobIndex === index ? `job-btn active-btn` : `job-btn `}
              onClick={() => setJobIndex(index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        <article className="job-info">
          <h3>{jobToShow.position}</h3>
          <h4>{jobToShow.company}</h4>
          <p className="job-date">{jobToShow.date}</p>
          {jobToShow.description.map((item) => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
}
