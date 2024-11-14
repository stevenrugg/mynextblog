import { formatDate } from '../lib/utils';

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    featured?: boolean;
  };
}

interface Props {
  featuredPosts: BlogPost[];
}

export default function FeatureBlogCard({ featuredPosts }: Props) {
  return (
    <div className="mt-12 w-full">
      <h2 className="text-center text-3xl font-bold">Featured Posts</h2>
      <div className="mt-6 grid content-evenly gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {featuredPosts.map((blog) => (
          <div key={blog.slug} className="rounded-lg border bg-secondary p-4">
            <a href={`/blog/${blog.slug}`}>
              <h3 className="m-1 text-left text-xl font-semibold text-primary">{blog.frontmatter.title}</h3>
              <p className="m-2 text-left text-sm text-muted-foreground">{blog.frontmatter.description}</p>
              <p className="text-center text-xs text-yellow-500">{formatDate(blog.frontmatter.date)}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
