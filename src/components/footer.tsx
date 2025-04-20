import React from 'react';
import { Link } from "@heroui/react";
import { Icon } from '@iconify/react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 bg-background border-t border-divider">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-default-600">
              © {currentYear} Sarvajeeth U K. All rights reserved.
            </p>
            <p className="text-default-500 text-sm mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
          
          <div className="flex gap-6">
            <Link 
              href="src/Resume.pdf" 
              target="_blank"
              download="Sarvajeeth_UK_Resume.pdf"
              className="text-default-600 hover:text-primary-500 transition-colors"
            >
              Resume
            </Link>
            <Link 
              href="#"
              className="text-default-600 hover:text-primary-500 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="https://github.com/Sarvajeet2003" 
              target="_blank"
              className="text-default-600 hover:text-primary-500 transition-colors"
            >
              <Icon icon="lucide:github" className="h-5 w-5" />
            </Link>
            <Link 
              href="https://leetcode.com/u/sarvajeeth21417/" 
              target="_blank"
              className="text-default-600 hover:text-primary-500 transition-colors"
            >
              <Icon icon="lucide:code" className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/sarvajeeth-uk" 
              target="_blank"
              className="text-default-600 hover:text-primary-500 transition-colors"
            >
              <Icon icon="lucide:linkedin" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};