import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../molecules/card/Card'
import Paginator from '../../molecules/paginator/Paginator'

import './BlogList.sass'
import BaseLink from '../../molecules/base-link/BaseLink'

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
        <div style={{ textAlign: 'right' }}>
          <BaseLink
            style={{ textDecoration: 'line-through' }}
            to="https://amerikanocls.blogspot.com"
          >
            *Legacy Blog
          </BaseLink>
        </div>
        <section className="BlogList__paginator">
          <Paginator
            currentPage={pageNumber}
            numOfPages={numOfPages}
            cssButtonClass="paginator-button"
            cssActiveButtonClass="paginator-button-active"
          />
        </section>
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
