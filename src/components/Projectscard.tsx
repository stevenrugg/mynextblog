import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';


interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  href: string;
  longDescription: string;
  githubURL?: string;
}

const projects: Project[] = [
  {
    id: '1',
    image: '/images/blog/animatedanimalsthumb.png',
    title: 'Animated Animals',
    description: 'HTML5, CSS3, and vanilla JavaScript. A cat, deer, wolf, and bear split up into SVG segments and animated.',
    href: '/projects/1',
    longDescription: 'I created this animation using plain HTML5, CSS3 and javascript. I got the images of a cat, bear, deer and wolf and split them up into triangular svg segments then used the colors of the rainbow to animate the shape and fill in the svg triangular segments with the colors of the rainbow and scale the image up a little before switching to the next image.',
    githubURL: 'https://stevenrugg.github.io/animated-animals',
  },
  {
    id: '2',
    image: '/images/blog/ioscalculatorthumb.png',
    title: 'iOS Calculator Clone',
    description: 'Description for project 2',
    href: '/projects/2',
    longDescription: 'Long description for project 2',
    githubURL: 'https://github.com/user/project2',
  },
  {
    id: '3',
    image: '/images/blog/webrtcthumb.png',
    title: 'WebRTC Video Chat App',
    description: 'Implementing WebRTC to create a video chat app. Signal.io for the signaling server. React for the front end.',
    href: '/projects/3',
    longDescription: 'WebRTC is a free, open-source project that provides web browsers and mobile applications with real-time communication via simple application programming interfaces. It allows audio and video communication to work inside web pages by allowing direct peer-to-peer communication, eliminating the need to install plugins or download native apps. This project uses WebRTC to create a video chat app. Signal.io is used for the signaling server and React is used for the front end.',
    githubURL: 'https://github.com/stevenrugg/webrtc-videochat',
  },
  {
    id: '4',
    image: '/images/blog/seattlesupergeekthumb.png',
    title: 'SeattleSuperGeek',
    description: 'This blog!',
    href: '/projects/4',
    longDescription: 'My blog is built with Next.js, Tailwind CSS, and MDX. It is hosted on Vercel. I write about web development, programming, and technology.',
    githubURL: 'https://seattlesupergeek.io',
  },
  {
    id: '5',
    image: '/images/blog/sunsaurthumb.png',
    title: 'SunSauna.com',
    description: 'Sunsauna.com is one of the first websites I created. It is a static site built with HTML, CSS, and JavaScript.',
    href: '/projects/5',
    longDescription: 'Sunsauna.com is one of the first websites I created. It is a static site built with HTML, CSS, and JavaScript. It is a simple site that showcases a product called the SunSauna which is an infrared sauna that helps with vitaminD deficiancy and Seasonal Affective Disorder. The site is hosted on Netlify.',
    githubURL: 'https://sunsauna.com',
  },
  {
    id: '6',
    image: '/images/blog/artthumb.png',
    title: 'Art of the Table',
    description: 'Art of the Table is a local fine dining restaurant in Seattle. I created a website for them using Next.js, Tailwind CSS, and MDX.',
    href: '/projects/6',
    longDescription: 'This website was created for a local fine dining restaurant in Seattle called Art of the Table. The site is built with Next.js, Tailwind CSS, and MDX. It is hosted on Vercel. The site features a menu, a gallery of images, and a contact form.',
    githubURL: 'https://artofthetable.net',
  },
]


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push(`/projects/${project.id}`);
    };
  
    return (
      <div className="m-4 max-w-sm overflow-hidden rounded shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
        <Image 
          className="h-48 w-full object-cover" 
          src={project.image} 
          alt={project.title}
          
          height={300}
          width={300}
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{project.title}</div>
          <p className="text-base text-gray-700">{project.description}</p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <button
            onClick={handleClick}
            className="relative overflow-hidden rounded-full bg-blue-500 px-4 py-2 font-bold text-white transition-colors before:absolute before:right-[-20px] before:transition-all before:duration-300 before:content-['→'] hover:bg-blue-700 hover:before:right-2"
          >
            View Details
          </button>
        </div>
      </div>
    );
  };
  
  const ProjectsList: React.FC = () => {
    return (
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  };
  
  export default ProjectsList;