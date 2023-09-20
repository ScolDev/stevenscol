import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Card from '../../molecules/card/Card'
import Paginator from '../../molecules/paginator/Paginator'

import './BlogList.sass'

function BlogList ({ blogs, pageNumber, numOfPages }) {
  return (
    <article className="BlogList row justify-content-center">
      <section className="BlogList__content col-lg-12">
        <div className="BlogList__blogs">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              item={blog}
            />
          ))}
        </div>
        {numOfPages
          ? (
          <div style={{ textAlign: 'right' }}>
            <Link
              style={{ textDecoration: 'line-through' }}
              to="https://amerikanocls.blogspot.com"
              target="_blank"
            >
              *Legacy Blog
            </Link>
          </div>
            )
          : null}
        <Paginator
          currentPage={pageNumber}
          numOfPages={numOfPages}
          cssButtonClass="paginator-button"
          cssActiveButtonClass="paginator-button-active"
        />
      </section>
    </article>
  )
}

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
  pageNumber: PropTypes.number,
  numOfPages: PropTypes.number
}

export default BlogList
