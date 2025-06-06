import React from 'react';
import Modal from '../ui/Modal';
import ImageSlider from './ImageSlider';
import { Project } from '@/data/projects';
import { Button } from '../ui/Button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        <ImageSlider screenshots={project.screenshots} />
        
        <div>
          <h3 className="font-bold text-lg font-montserrat mb-2">概要</h3>
          <p className="text-sm text-text-main">{project.description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg font-montserrat mb-2">課題</h3>
            <p className="text-sm text-text-main bg-light-gray p-3 rounded-md">{project.challenge}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg font-montserrat mb-2">解決策と成果</h3>
            <p className="text-sm text-text-main bg-light-gray p-3 rounded-md">
                <strong>解決策:</strong> {project.solution}<br/>
                <strong>成果:</strong> <span className="font-bold text-accent">{project.result}</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg font-montserrat mb-2">技術スタック</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-gray-200 text-gray-subtext text-xs font-medium px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4 pt-4 border-t">
          {project.githubUrl && (
            <Button as="a" href={project.githubUrl} variant="secondary" className="flex items-center gap-2">
              <Github size={16} />
              GitHub
            </Button>
          )}
          {project.demoUrl && (
            <Button as="a" href={project.demoUrl} variant="secondary" className="flex items-center gap-2">
              <ExternalLink size={16} />
              デモを見る
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal; 