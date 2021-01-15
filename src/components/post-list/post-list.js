import React from 'react'
import PropTypes, { number } from 'prop-types'
import PostCard from '../post-card/post-card'
import Paginator from '../paginator/paginator'

import './post-list.sass'

function PostList ({ posts, pageContext }) {
  const { previousPagePath, nextPagePath, pageNumber, numberOfPages } = pageContext

  return (
    <section className='PostList row justify-content-center'>
      <section className='PostList-content col-lg-10'>
        <header className='PostList-title'>
          {pageNumber === 0 ? <h2>Últimos Posts</h2> : null}
        </header>
        <div className='PostList-items'>
          {posts.map(post => <PostCard key={post.node.id} post={post.node} />)}
        </div>
        <Paginator
          pageNumber={pageNumber}
          numberOfPages={numberOfPages}
        />
      </section>
    </section>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default PostList
