import React from 'react';
import { Card, CardBody } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    company: "Complex Systems Lab, IIIT Delhi",
    position: "Research Assistant",
    duration: "Aug 2023 - Present",
    icon: "lucide:flask",
    achievements: [
      "Developed ML models for allergen detection in protein sequences with 92% accuracy",
      "Built a recipe recommendation system using Collaborative Filtering, deployed via Flask"
    ]
  },
  {
    company: "Excelsoft Technologies Pvt Ltd",
    position: "Data Science Intern",
    duration: "May 2024 - Jul 2024",
    icon: "lucide:bar-chart-2",
    achievements: [
      "Created user engagement predictive models using TF-IDF & cosine similarity",
      "Performed data cleaning & EDA to improve personalization by 40%"
    ]
  },
  {
    company: "Caliper Business Solutions",
    position: "Backend Developer Intern",
    duration: "May 2023 - Jul 2023",
    icon: "lucide:code",
    achievements: [
      "Automated Twilio SMS alerts, cutting logistics delays by 30%",
      "Implemented geo-fencing system in Django, improving route compliance by 25%"
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-none">
                <CardBody>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                      <Icon icon={item.icon} className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">{item.company}</h3>
                        <p className="text-small text-default-500">{item.duration}</p>
                      </div>
                      <p className="text-default-600 mb-4">{item.position}</p>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon icon="lucide:check" className="h-5 w-5 text-primary-500 mt-0.5" />
                            <span className="text-default-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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