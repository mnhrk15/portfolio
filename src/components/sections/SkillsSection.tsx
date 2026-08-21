import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { skillsData } from '@/data/skills';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

const SkillsSection = () => {
  return (
    <FadeInWhenVisible>
      <Section id="skills" className="border-t border-gray-border">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-bold text-text-dark mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="bg-base-white rounded-md px-3 py-1.5 border border-gray-border">
                    <p className="font-semibold text-sm text-text-dark">{skill.name}</p>
                    {skill.experience && <p className="text-xs text-gray-subtext">{skill.experience}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </FadeInWhenVisible>
  );
};

export default SkillsSection;
