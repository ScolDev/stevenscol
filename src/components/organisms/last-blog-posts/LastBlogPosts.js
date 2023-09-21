import React from 'react'
import BaseLink from '../../molecules/base-link/BaseLink'
import Card from '../../molecules/card/Card'
import useLastBlogPostsQuery from '../../../hooks/useLastBlogPostsQuery'

import './LastBlogPosts.sass'

const LastBlogPosts = () => {
  const blogs = useLastBlogPostsQuery()
  return (
    <section className="LastBlogPosts">
      <div className="LastBlogPosts__blogs">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            item={blog}
          />
        ))}
      </div>
      <article className="LastBlogPosts__cta cta">
        <BaseLink
          to="/blog"
          className="round-button"
        >
          Ver todos
        </BaseLink>
      </article>
    </section>
  )
}

export default LastBlogPosts
