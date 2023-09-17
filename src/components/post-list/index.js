import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import PostCard from '../post-card'
import Paginator from '../paginator'

import './post-list.sass'

function PostList ({ posts, pageContext }) {
  const { pageNumber, numberOfPages } = pageContext

  return (
    <article className='PostList row justify-content-center'>
      <section className='PostList-content col-lg-12'>
        <div className='PostList-items'>
          {posts.map(post => <PostCard key={post.node.id} post={post.node} />)}
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

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default PostList
