import React, { PropsWithChildren } from "react";
import SiteHeader from "@/components/site-header";
import { siteConfig } from "@/config/site";
import Link from "next/link";


export default function App({ children }: PropsWithChildren) {
  return (
    
    <div className="flex flex-col space-y-6 min-h-dvh">
      <SiteHeader />
      <main className="flex-1 container">{children}</main>
      <footer className="py-3 border-t border-t-secondary/60 text-center container">
        <p className="text-muted-foreground text-sm">
          &copy; 2024 Created by{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.social.github}
            className="text-primary text-sm"
          >
            {siteConfig.author}
          </Link>{" "}
        </p>
      </footer>
    </div>
   
  );
}
