import React from 'react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-text-dark mb-12">
      {children}
      <span className="block w-10 h-px bg-accent mx-auto mt-5" aria-hidden="true" />
    </h2>
  );
};

export default SectionTitle;
