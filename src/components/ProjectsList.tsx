'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import projects from '../constants/projects';


interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  href: string;
  longDescription: string;
}


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