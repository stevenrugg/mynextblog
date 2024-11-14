'use client'

// app/projects/[id].tsx
import  { useParams, notFound }  from 'next/navigation';
import projects from '@/constants/projects';
import Image from 'next/image';
import Link from 'next/link';
import { MoveLeftIcon } from 'lucide-react';


export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return notFound();
  }

  return (
    <>
    <Link
    href="/projects"
    >
    <MoveLeftIcon className="group ml-14 mr-2 inline-block size-6 text-base text-blue-500 hover:text-violet-500" />
      <span className="text-base text-yellow-500 hover:text-primary">Back to Projects</span>
    </Link>
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="text-center text-5xl  font-bold text-primary">{project.title}</h1>
      <hr className="my-5" />
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={300}
        className="h-96 w-full rounded-lg object-cover"
      />
    
      <p className="mt-4">{project.longDescription}</p>
      <Link
        href={project.href}
        >
        <button className="mt-3 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:bg-violet-500">View Project</button>
      </Link>
    </div>
    </>
  );
}
