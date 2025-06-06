import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Button } from '../ui/Button';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <CardHeader>
        <div className="relative w-full h-48 mb-4">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-t-lg object-cover"
          />
        </div>
        <CardTitle className="font-montserrat text-lg">{project.title}</CardTitle>
        <CardDescription className="h-10">{project.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-xs mb-2 text-text-main">主な使用技術:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techIcons.map((tech) => (
              <span key={tech} className="bg-light-gray text-gray-subtext text-xs font-medium px-2.5 py-0.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Button onClick={onViewDetails} className="w-full mt-auto">
          詳細を見る
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard; 