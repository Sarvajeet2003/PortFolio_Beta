import React from 'react';
import { Button } from "@heroui/react";
import { Icon } from '@iconify/react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 pt-32 pb-24 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm Sarvajeeth —
            <span className="text-primary-500"> Machine Learning & Backend Developer</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-default-600 mb-12"
          >
            Final-year B.Tech CSSS student at IIIT Delhi
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              as={ScrollLink}
              to="projects"
              spy={true}
              smooth={true}
              color="primary"
              size="lg"
              className="px-8"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              View Projects
            </Button>
            
            <Button
              as="a"
              href="/Resume.pdf" // Changed path
              target="_blank"
              variant="bordered"
              size="lg"
              className="px-8"
              endContent={<Icon icon="lucide:download" />}
            >
              Download Resume
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};