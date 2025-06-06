import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { skillsData } from '@/data/skills';
import { Cpu, Code, BrainCircuit, Wrench } from 'lucide-react';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

const categoryIcons: { [key: string]: React.ReactNode } = {
  "Programming Languages": <Code size={24} className="text-accent" />,
  "Frameworks & Libraries": <Cpu size={24} className="text-accent" />,
  "AI": <BrainCircuit size={24} className="text-accent" />,
  "Tools & Others": <Wrench size={24} className="text-accent" />,
};


const SkillsSection = () => {
  return (
    <FadeInWhenVisible>
      <Section id="skills" className="bg-base-white rounded-lg shadow-sm">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div key={category.title}>
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {categoryIcons[category.title] || <Code size={24} className="text-accent" />}
                </div>
                <h3 className="text-xl font-bold font-montserrat">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="bg-base-white rounded-md px-3 py-1 shadow-sm">
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