import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-6 border-t border-gray-border bg-base-white">
      <div className="container mx-auto text-center text-sm text-gray-subtext">
        &copy; {currentYear} Hiraku. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer; 