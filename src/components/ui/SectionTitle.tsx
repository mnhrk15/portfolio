import React from 'react';
import SectionRule from './SectionRule';

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-text-dark mb-12">
      {children}
      <SectionRule />
    </h2>
  );
};

export default SectionTitle;
