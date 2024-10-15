

import FeatureBlogCard from "@/components/BlogCard";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import TypingAnimation from "@/components/TypingAnimation";
import { revalidatePath } from "next/cache";




interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    featured: boolean;
  };
}

async function fetchPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`);
  if (!res.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  const posts = await res.json();
  
  return posts;
}



// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
revalidatePath('src/content/blog'); 
const posts = await fetchPosts();
const featuredPosts = posts.filter((post) => post.frontmatter.featured);
  return (
    <section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-32">
      <div className="container mt-6 flex max-w-5xl flex-col items-center gap-4 text-center xl:mt-0">
        <div className="flex items-center space-x-2">
          {SOCIALS.map((social) => (
            <Link
              key={social.label}
              href={social.path}
              rel="noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-primary px-0 hover:bg-primary transition-colors rounded-full p-2 size-8 bg-primary/80",
              )}
            >
              <social.icon className="size-6" />
              <span className="sr-only">{social.label}</span>
            </Link>
          ))}
        </div>
        <h1 className="text-xl text-yellow-500 sm:text-lg md:text-xl lg:text-2xl">
         <TypingAnimation></TypingAnimation>
        </h1>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="space-x-4">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "border",
            )}
          >
            👨‍💻📝 All Posts 📖💻
          </Link>
        </div>
    
        <FeatureBlogCard featuredPosts={featuredPosts} />
       
      </div>
    </section>
  );
}