import React from 'react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center text-text-dark mb-12">
      {children}
    </h2>
  );
};

export default SectionTitle; 