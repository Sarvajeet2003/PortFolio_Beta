import React from 'react';
import { Card, CardBody } from "@heroui/react";
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <Card className="overflow-hidden">
              <CardBody className="p-0">
                <img 
                  src="Assets/a.png"
                  alt="Sarvajeeth U K at Distrikt Festival"
                  className="w-full aspect-square object-cover"
                />
              </CardBody>
            </Card>
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-lg text-default-600">
            <p>
              As a final-year B.Tech student in Computational and Social Sciences at IIIT Delhi, 
              I'm passionate about leveraging machine learning and data science to solve real-world problems.
            </p>
            <p>
              My academic journey has been focused on developing robust backend systems and 
              implementing cutting-edge ML solutions, particularly in areas like allergen detection 
              and recommendation systems.
            </p>
            <p>
              I aim to continue pushing the boundaries of what's possible at the intersection of 
              machine learning and software engineering, creating impactful solutions that make a difference.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};