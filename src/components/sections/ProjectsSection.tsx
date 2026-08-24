"use client";

import React, { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import { projectsData, Project } from '@/data/projects';
import { staggerContainer, VIEWPORT } from '@/lib/motion';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  // Modal の ESC ハンドラが onClose に依存するため、参照を安定させる
  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <Section id="projects" className="border-t border-gray-border">
      <SectionTitle>Projects</SectionTitle>
      {/*
        カードを個別にラップせず、grid コンテナ側で stagger させる。
        個別ラップだと transform を持つ祖先がカードに被さり、
        カード→モーダルの共有レイアウト遷移で測定矩形がずれる。
      */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        custom={0.06}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={() => handleOpenModal(project)}
          />
        ))}
      </motion.div>

      {/* AnimatePresence が直前の要素を exit 完了まで保持するため、
          閉じる際に project データを別 state に退避する必要はない */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default ProjectsSection; 