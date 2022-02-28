import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import CV from "../../assets/resume.pdf";
import "./me.sass";

const Me = ({ widget }) => {
  const className = ["Me", widget ? "widget" : ""];
  return (
    <StaticQuery
      query={query}
      render={({ profilePhoto, site, skills }) => {
        return (
          <section className={className.join(" ")}>
            <div className="Me-content">
              <div className="Me-photo">
                <Img fluid={profilePhoto.childImageSharp.fluid} />
              </div>
              <div className="Me-bio">
                {!widget ? (
                  <>
                    <h1>{site.siteMetadata.author}</h1>
                    <p>{site.siteMetadata.bio}</p>
                  </>
                ) : (
                  <>
                    <h2>{site.siteMetadata.nickname}</h2>
                    <div className="Me-bio-content white-box">
                      <p>{site.siteMetadata.bio}</p>
                      <Link to="/profile">Ver perfil</Link>
                    </div>
                  </>
                )}
              </div>
              <div className="Me-resume">
                {!widget ? (
                  <a
                    href={CV}
                    alt="Resume"
                    target="_blank"
                    className="round-button"
                  >
                    Descargar CV
                  </a>
                ) : ''}
              </div>
              {!widget ? (
                <>
                  <div className="Me-skills Section">
                    <h2>Skills</h2>
                    <p>{site.siteMetadata.skills}</p>
                    <div className="Me-skills-topics">
                      {skills.edges.map(({ node }) => {
                        return (
                          <div className="Me-skills-topics-item">
                            <Img
                              fluid={node.childImageSharp.fluid}
                              className="Me-skills-topics-img"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="Me-skills Section">
                    <h2>Experiencia</h2>
                    <p>{site.siteMetadata.experience}</p>
                  </div>
                </>
              ) : null}
            </div>
          </section>
        );
      }}
    />
  );
};

Me.propTypes = {
  widget: PropTypes.bool,
};

Me.defaultProps = {
  widget: false,
};

export default Me;

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        nickname,
        bio
        skills
        experience
      }
    }
    profilePhoto: file(relativePath: { eq: "images/me.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    skills: allFile(
      filter: {
        extension: { eq: "png" }
        relativeDirectory: { eq: "images/skills" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 100, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
