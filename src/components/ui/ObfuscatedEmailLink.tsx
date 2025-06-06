"use client";

import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

interface ObfuscatedEmailLinkProps {
  user: string;
  domain: string;
  tld: string;
}

const ObfuscatedEmailLink: React.FC<ObfuscatedEmailLinkProps> = ({ user, domain, tld }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // This effect runs only on the client, after the component has mounted,
    // keeping the email address out of the initial server-rendered HTML.
    setEmail(`${user}@${domain}.${tld}`);
  }, [user, domain, tld]);

  // On the server or during initial client render, `email` is an empty string.
  // We can render a placeholder to avoid layout shifts.
  if (!email) {
    return (
      <div className="flex items-center gap-3 text-gray-subtext">
        <Mail size={18} />
        <span>...</span>
      </div>
    );
  }

  // Once mounted on the client, the full email link is rendered.
  return (
    <a href={`mailto:${email}`} className="flex items-center gap-3 hover:text-accent">
      <Mail size={18} />
      <span>{email}</span>
    </a>
  );
};

export default ObfuscatedEmailLink; 