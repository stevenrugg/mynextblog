// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';


interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    featured: boolean;
  };
}

// API route to fetch blog posts
export async function GET() {
  const directory = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(directory);

  const posts: BlogPost[] = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(directory, file);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data: frontmatter } = matter(fileContents);
      
      return {
        slug: file.replace('.mdx', ''),
        frontmatter: {
          title: frontmatter.title,
          description: frontmatter.description,
          date: frontmatter.date,
          featured: frontmatter.featured,
        },
      }
    });
  

  return NextResponse.json(posts);
}
