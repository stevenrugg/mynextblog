import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useEffect, useState } from 'react';

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    featured: boolean;
  };
  content: string;
}

const useFeaturedMdxFiles = (directory: string) => {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const files = fs.readdirSync(directory);
        const featured: BlogPost[] = [];

        for (const file of files) {
          if (file.endsWith('.mdx')) {
            const filePath = path.join(directory, file);
            const fileContents = fs.readFileSync(filePath, 'utf-8');
            const { data: frontmatter, content } = matter(fileContents);

            // Filter for posts with 'featured: true'
            if (frontmatter.featured) {
              featured.push({
                slug: file.replace('.mdx', ''),  // Deriving slug from file name
                frontmatter: {
                  title: frontmatter.title,
                  description: frontmatter.description,
                  date: frontmatter.date,
                  featured: frontmatter.featured,
                },
                content,
              });
            }
          }
        }
        setFeaturedPosts(featured);
      } catch (error) {
        console.error('Error fetching MDX files:', error);
      }
    };

    fetchFeaturedPosts();
  }, [directory]);

  return featuredPosts;
};

export default useFeaturedMdxFiles;
