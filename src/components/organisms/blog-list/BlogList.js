import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Paginator from '../../paginator'
import BlogCard from '../../molecules/blog-card/BlogCard'

import './BlogList.sass'

function BlogList ({ blogs, pageContext }) {
  const { pageNumber, numberOfPages } = pageContext

  return (
    <article className='BlogList row justify-content-center'>
      <section className='BlogList__content col-lg-12'>
        <div className='BlogList__blogs'>
          {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
        </div>
        {
          numberOfPages
            ? (
            <div style={{ textAlign: 'right' }}>
              <Link
                style={{ textDecoration: 'line-through' }}
                to="https://amerikanocls.blogspot.com"
                target="_blank">
                  *Legacy Blog
              </Link>
            </div>
              )
            : null
        }
        <Paginator
          pageNumber={pageNumber}
          numberOfPages={numberOfPages}
        />
      </section>
    </article>
  )
}

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default BlogList
