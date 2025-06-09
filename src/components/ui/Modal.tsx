"use client";

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative m-4 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl border-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 bg-white z-10 rounded-t-xl">
            <h2 className="text-xl font-bold font-montserrat text-gray-900">{title}</h2>
            <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200"
            aria-label="モーダルを閉じる"
            >
            <X size={20} />
            </button>
        </div>
        <div className="p-6 bg-white text-gray-900">
            {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal; 