import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import CV from "../../assets/resume.pdf";
import "./index.sass";

const Avatar = ({ widget }) => {
  return (
    <StaticQuery
      query={query}
      render={({ profilePhoto }) => {
        const { childImageSharp } = profilePhoto
        return (
          <>
          <article className="Avatar">
            <GatsbyImage image={childImageSharp.gatsbyImageData} />
          </article>
          </>
        );
      }}
    />
  );
};

export default Avatar

export const query = graphql`
  {
    profilePhoto: file(relativePath: {eq: "images/me.png"}) {
      childImageSharp {
        gatsbyImageData(width: 400, layout: CONSTRAINED)
      }
    }
  }
`;
