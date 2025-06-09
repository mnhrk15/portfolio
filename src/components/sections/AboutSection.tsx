import React from 'react';
import Image from 'next/image';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import { Github, Award, Briefcase, GraduationCap } from 'lucide-react';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';
import ObfuscatedEmailLink from '../ui/ObfuscatedEmailLink';
import { profileData } from '@/data/profile';

const AboutSection = () => {
  return (
    <FadeInWhenVisible>
      <Section id="about" className="bg-base-white rounded-lg shadow-sm">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column: Profile */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex flex-col items-center text-center">
              <Image 
                src="/images/profile.png" 
                alt="Hiraku"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold font-montserrat text-text-dark">{profileData.name.japanese}</h3>
              <p className="text-text-main">{profileData.name.english}</p>
            </div>
            
            <div className="space-y-3 text-sm">
              <ObfuscatedEmailLink 
                user={profileData.contact.email.user} 
                domain={profileData.contact.email.domain} 
                tld={profileData.contact.email.tld} 
              />
              <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent">
                <Github size={18} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h4 className="flex items-center text-xl font-bold font-montserrat mb-3">
                <Briefcase size={20} className="mr-2 text-accent" />
                自己PR
              </h4>
              <p className="text-sm leading-relaxed">
                {profileData.bio}
              </p>
            </div>
            
            <div>
              <h4 className="flex items-center text-xl font-bold font-montserrat mb-3">
                <Briefcase size={20} className="mr-2 text-accent" />
                インターンシップ経験
              </h4>
              <div className="text-sm border-l-2 border-accent pl-4">
                <p className="font-bold">{profileData.internship.company}</p>
                <p className="text-xs text-gray-subtext">{profileData.internship.period}</p>
                <p className="mt-1">
                  {profileData.internship.description}
                </p>
              </div>
            </div>

            <div>
              <h4 className="flex items-center text-xl font-bold font-montserrat mb-3">
                <Award size={20} className="mr-2 text-accent" />
                保有資格
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                {profileData.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="flex items-center text-xl font-bold font-montserrat mb-3">
                <GraduationCap size={20} className="mr-2 text-accent" />
                学歴
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                {profileData.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </Section>
    </FadeInWhenVisible>
  );
};

export default AboutSection; 