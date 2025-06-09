import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Button } from '../ui/Button';
import { Project } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-white shadow-sm">
      <CardHeader>
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardTitle className="font-montserrat text-lg text-gray-900">{project.title}</CardTitle>
        <CardDescription className="h-10 text-gray-600">{project.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-xs mb-2 text-gray-700">主な使用技術:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techIcons.map((tech) => (
              <span key={tech} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Button onClick={onViewDetails} className="w-full mt-auto">
          詳細を見る
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard; 