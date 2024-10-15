import { cn } from '@/lib/utils'
import BlogCard from '@/components/BlogCard'
import React from 'react'
import { Blog } from '#site/content'

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    featured: boolean;
  };
}

interface BlogListProps {
  title: string
  blogs: Array<Blog>
  layout?: 'column' | 'row'
  className?: string
  featured?: boolean;
  children?: React.ReactNode
}

const BlogList: React.FunctionComponent<BlogListProps> = ({ blogs, children, title, className, layout = 'row' }) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {blogs.length > 0 && (
        <ul className={cn('grid grid-cols-1 gap-4 flex-auto my-4', layout === 'row' && 'md:grid-cols-2')}>
          {blogs.map((val) => {
            const blogPost: BlogPost = {
              slug: val.slug,
              frontmatter: {
                title: val.title,
                description: val.description,
                date: val.date,
                featured: val.featured,
              },
            };
            return (
              <li key={val.slug}>
                <BlogCard featuredPosts={[blogPost]} />
              </li>
            );
          })}
        </ul>
      )}
      {children}
    </section>
  )
}

export default BlogList