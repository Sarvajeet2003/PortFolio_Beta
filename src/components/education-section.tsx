import React from 'react';
import { Card, CardBody } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const educationData = [
  {
    school: "IIIT Delhi",
    degree: "B.Tech in Computational and Social Sciences",
    duration: "2021 - 2025 (Expected)",
    icon: "lucide:graduation-cap",
  },
  {
    school: "BGS PU College, Mysuru",
    degree: "Pre-University (96.6%)",
    duration: "2019 - 2021",
    icon: "lucide:book-open",
  },
  {
    school: "St. Joseph's Central School, Mysuru",
    degree: "Secondary Education (95.6%)",
    duration: "2007 - 2019",
    icon: "lucide:book",
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-default-50">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-none">
                <CardBody className="flex gap-4">
                  <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Icon icon={item.icon} className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.school}</h3>
                    <p className="text-default-600">{item.degree}</p>
                    <p className="text-small text-default-500">{item.duration}</p>
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