import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section = ({ children, id, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
      <div className="container mx-auto max-w-5xl px-4">
        {children}
      </div>
    </section>
  );
};

export default Section; 