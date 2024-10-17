// app/projects/page.tsx
import Link from 'next/link';
import projects from '@/constants/projects'; // Assuming you store the projects data in a separate file.
import Image from 'next/image';
import PageHeader from '@/components/page-header';


export default function ProjectsPage() {
 
  
 
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
       <PageHeader
        title="Projects"
        description="This is a showcase of my work, where I've applied a range of web development technologies to solve real-world problems and explore new ideas. Take a look through the projects to see my skills in action."
      />
      <hr className="my-8" />
    <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-2">
    {projects.map((project) => (
      <div key={project.id} className="group relative flex flex-col items-center space-y-2 rounded-lg border bg-secondary p-4 shadow-lg">
        {/* Center the image */}
        <div className="flex justify-center">
          <Image
            src={project.image}
            alt={project.title}
            width={804}
            height={452}
            className="border bg-muted transition-colors"
          />
        </div>

        {/* Center the title */}
        <h2 className="mt-4 text-center text-2xl font-bold text-primary">{project.title}</h2>

        {/* Left-aligned description */}
        <p className="mt-2 w-full text-left text-slate-200">{project.description}</p>

        {/* Center the button */}
        <div className="mt-auto flex w-full justify-center">
          <Link href={`projects/${project.id}`}>
            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-900 focus:bg-violet-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
  </div>
);
}
