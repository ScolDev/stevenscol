import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import './post-card.sass'

function PostCard (props) {
  const { excerpt, frontmatter } = props.post
  const { title, image, author, date, path } = frontmatter

  const pathToBlogPost = `/blog${path}`
  return (
    <article className='PostCard'>
      <div className='HighContrast PostCard-wrap'>
        <div className='PostCard-content'>
          <div className='PostCard-info'>
            <Link to={pathToBlogPost}>
              <h3 className='PostCard-title'>{title}</h3>
            </Link>
            <span className="PostCard-date">
              <em>{date}</em>
            </span>
            {/* <div className='PostCard-excerpt'
              dangerouslySetInnerHTML={{ __html: excerpt }}
            /> */}
          </div>
          <Link to={pathToBlogPost}>
            <div className='PostCard-image'>
              {
                image
                  ? (
                    <Img
                      style={{ height: "100%", width: "100%" }}
                      fluid={ image.childImageSharp.fluid }
                      objectFit="cover"
                      objectPosition="50% 50%"
                      alt={ title } />
                  ) : <span>{title ? title.charAt(0) : '' }</span>
              }
            </div>
          </Link>
        </div>
      </div>
    </article>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostCard
