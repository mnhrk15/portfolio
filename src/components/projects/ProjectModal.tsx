"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Modal from '../ui/Modal';
import ImageSlider from './ImageSlider';
import { Project } from '@/data/projects';
import { Button } from '../ui/Button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const titleId = `project-modal-title-${project.id}`;

  return (
    <Modal
      onClose={onClose}
      labelledBy={titleId}
      header={
        <h2 id={titleId} className="text-xl font-bold text-text-dark truncate">
          {project.title}
        </h2>
      }
    >
      <div className="space-y-6">
        {project.screenshots.length > 0 && (
          /* バッジはスライダー枠の外に置く。共有要素である枠の内側に入れると
             親の projection にネストして位置補正が二重に掛かる */
          <div className="relative">
            <ImageSlider
              screenshots={project.screenshots}
              frameLayoutId={`project-media-${project.id}`}
            />
            {project.badge && (
              <motion.span
                layoutId={`project-badge-${project.id}`}
                style={{ borderRadius: 9999 }}
                className="absolute top-3 left-3 z-10 bg-accent text-base-white text-xs font-bold px-2.5 py-1"
              >
                {project.badge}
              </motion.span>
            )}
          </div>
        )}

        <div>
          <h3 className="font-bold text-lg mb-2 text-text-dark">概要</h3>
          {project.period && (
            <p className="text-xs text-gray-subtext mb-2">開発期間: {project.period}</p>
          )}
          <p className="text-sm text-text-main leading-relaxed">{project.description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-2 text-text-dark">課題</h3>
            <p className="text-sm text-text-main bg-gray-50 p-4 rounded-lg border border-gray-border leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-text-dark">解決策と成果</h3>
            <div className="text-sm text-text-main bg-gray-50 p-4 rounded-lg border border-gray-border leading-relaxed">
                <div className="mb-2">
                  <strong className="text-text-dark">解決策:</strong> {project.solution}
                </div>
                <div>
                  <strong className="text-text-dark">成果:</strong> <span className="font-bold text-accent">{project.result}</span>
                </div>
            </div>
          </div>
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div>
            <h3 className="font-bold text-lg mb-2 text-text-dark">技術的な工夫</h3>
            <ul className="text-sm text-text-main bg-gray-50 p-4 rounded-lg border border-gray-border leading-relaxed list-disc list-outside pl-8 space-y-2">
              {project.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className="font-bold text-lg mb-3 text-text-dark">技術スタック</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-accent/5 text-accent text-xs font-medium px-3 py-2 rounded-md border border-accent/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {(project.serviceUrl || project.demoUrl || project.repoUrl) && (
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-border">
            {project.serviceUrl && (
              <Button as="a" href={project.serviceUrl} variant="secondary" className="flex items-center gap-2">
                <ExternalLink size={16} />
                サービスサイトを見る
              </Button>
            )}
            {project.repoUrl && (
              <Button as="a" href={project.repoUrl} variant="secondary" className="flex items-center gap-2">
                <Github size={16} />
                GitHubで見る
              </Button>
            )}
            {project.demoUrl && (
              <Button as="a" href={project.demoUrl} variant="secondary" className="flex items-center gap-2">
                <ExternalLink size={16} />
                デモを見る
              </Button>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal; 