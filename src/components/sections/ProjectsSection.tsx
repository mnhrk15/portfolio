"use client";

import React, { useState } from 'react';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import { projectsData, Project } from '@/data/projects';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Section id="projects" className="bg-base-white rounded-lg shadow-sm">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <FadeInWhenVisible key={project.id} delay={index * 0.1}>
            <ProjectCard
              project={project}
              onViewDetails={() => handleOpenModal(project)}
            />
          </FadeInWhenVisible>
        ))}
      </div>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </Section>
  );
};

export default ProjectsSection; 