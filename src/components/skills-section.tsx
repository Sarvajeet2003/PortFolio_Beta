import React from 'react';
import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const skillsData = {
  Languages: {
    icon: "lucide:code",
    skills: ["Python", "Java", "Kotlin"]
  },
  Backend: {
    icon: "lucide:server",
    skills: ["Django", "Flask", "REST API", "Spring Boot", "MongoDB", "MySQL", "Docker"]
  },
  "Data Science": {
    icon: "lucide:bar-chart",
    skills: ["Pandas", "NumPy", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "LSTM"]
  },
  Tools: {
    icon: "lucide:tool",
    skills: ["Git", "Postman"]
  }
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillsData).map(([category, { icon, skills }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardBody>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon icon={icon} className="h-6 w-6 text-primary-500" />
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Chip
                        key={skill}
                        variant="flat"
                        color="primary"
                      >
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};