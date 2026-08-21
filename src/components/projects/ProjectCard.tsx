import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Button } from '../ui/Button';
import { Project } from '@/data/projects';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden group">
      <CardHeader>
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {project.badge && (
            <span className="absolute top-2 left-2 bg-accent text-base-white text-xs font-bold px-2.5 py-1 rounded-full">
              {project.badge}
            </span>
          )}
        </div>
        <CardTitle className="text-lg text-text-dark">{project.title}</CardTitle>
        <CardDescription className="min-h-10 text-gray-subtext">{project.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-xs mb-2 text-text-main">主な使用技術:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techIcons.map((tech) => (
              <span key={tech} className="bg-gray-100 text-gray-subtext text-xs font-medium px-2.5 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mt-auto">
          <Button onClick={onViewDetails} variant="secondary" className="flex-1">
            詳細を見る
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          {project.serviceUrl && (
            <a
              href={project.serviceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}のサービスサイトを開く`}
              title="サービスサイトを開く"
              className="inline-flex items-center justify-center rounded-md border border-gray-border px-3 text-gray-subtext hover:text-accent hover:border-accent transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard; 