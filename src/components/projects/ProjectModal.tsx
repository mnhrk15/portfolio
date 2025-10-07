import React from 'react';
import Modal from '../ui/Modal';
import ImageSlider from './ImageSlider';
import { Project } from '@/data/projects';
import { Button } from '../ui/Button';
import { ExternalLink } from 'lucide-react';

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
          <h3 className="font-bold text-lg font-montserrat mb-2 text-gray-900">概要</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{project.description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg font-montserrat mb-2 text-gray-900">課題</h3>
            <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg font-montserrat mb-2 text-gray-900">解決策と成果</h3>
            <div className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 leading-relaxed">
                <div className="mb-2">
                  <strong className="text-gray-900">解決策:</strong> {project.solution}
                </div>
                <div>
                  <strong className="text-gray-900">成果:</strong> <span className="font-bold text-blue-600">{project.result}</span>
                </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg font-montserrat mb-3 text-gray-900">技術スタック</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-2 rounded-full border border-blue-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {project.demoUrl && (
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            <Button as="a" href={project.demoUrl} variant="secondary" className="flex items-center gap-2">
              <ExternalLink size={16} />
              デモを見る
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal; 