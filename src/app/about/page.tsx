import React from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  revalidatePath('/about')
  return (
    <>
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <PageHeader title="About" description="Exploring the Future of Frontend Development, Technology, and Quantum Computing" />
      <hr className="my-8" />

      <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6 lg:space-y-0">
        <div className="mx-auto mt-8 w-[400px]">
          <div className="relative flex flex-col items-center gap-2 rounded-md bg-secondary px-4 py-6">
            <Image
              src={siteConfig.authorImage}
              width={82}
              height={82}
              alt={siteConfig.name}
              className="absolute -top-8 mb-4 rounded-full border bg-primary"
            />
            <h3 className="mt-8 text-lg font-semibold">{siteConfig.author}</h3>
            <p className="text-center text-sm text-muted-foreground">
              Full Stack Software Engineer
            </p>
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
          </div>
        </div>
        <p className="flex-1 text-center text-sm text-muted-foreground lg:text-start xl:text-base">
        Welcome to my blog, where I explore the ever-evolving world of technology. As a passionate frontend web 
        developer and tech enthusiast, I delve into topics ranging from web development and cutting-edge 
        technology to quantum computing. I also keep a close eye on current events and the latest tech news, 
        offering insights into how these innovations shape our future. Whether you&apos;re a fellow developer, 
        a tech aficionado, or just curious about where the digital world is headed, you&apos;ll find thoughtful 
        articles and updates that keep you informed and inspired. 
        <br></br>
        <br/>
        Outside of work and blogging I love hiking, 
        mountaineering, and hanging out with my Cane Corso and Stafforshire Terrier mix named Nipsey Hussle. 
        He&apos;s my best buddy. 
       
        </p>
      </div>
    </div>  
    <div className="group flex flex-row flex-wrap gap-3 p-3">
          <Image
          src="/images/blog/nipseyonepng.png"
          height={300}
          width={250}
          alt="Nipsey Hussle"
          className="row-auto ml-20 mr-2 border border-slate-100"
          ></Image>
          <Image
          src="/images/blog/nipseytwopng.png"
          height={300}
          width={250}
          alt="Nipsey Hussle"
          className="row-auto mr-2 border border-slate-100"
          ></Image>
          <Image
          src="/images/blog/nipseythreepng.png"
          height={300}
          width={250}
          alt="Nipsey Hussle"
          className="row-auto border border-slate-100"
          ></Image>
           <Image
          src="/images/blog/nipseyfive.png"
          height={300}
          width={250}
          alt="Nipsey Hussle"
          className="row-auto border border-slate-100"
          ></Image>
       </div>
       </>
    );
}
