import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Bot, Rss, Folder, Home, Mail } from "lucide-react";

export const NAV_LIST = [
  { label: "Home", path: "/", icon: Home },
  { label: "Blog", path: "/blog", icon: Rss },
  { label: "About", path: "/about", icon: Bot },
  { label: "Projects", path: "/projects", icon: Folder },
  { label: "Contact", path: "/contact", icon: Mail }
];

export const SOCIALS = [
  { label: "Github", path: siteConfig.social.github, icon: Icons.github },
  { label: "Facebook", path: siteConfig.social.facebook, icon: Icons.facebook },
  { label: "Twitter", path: siteConfig.social.twitter, icon: Icons.x },
  { label: "LinkedIn", path: siteConfig.social.linkedin, icon: Icons.linkedin}
];
