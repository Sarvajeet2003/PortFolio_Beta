import React from 'react';
import { Card, CardBody } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const awardsData = [
  {
    title: "Dean's Award for Academic Excellence",
    organization: "IIIT Delhi",
    icon: "lucide:award"
  },
  {
    title: "Finalist, The Great Bengaluru Hackathon",
    organization: "Top 9 out of 150+ teams",
    icon: "lucide:trophy"
  },
  {
    title: "2nd Place, Enactus Hackathon",
    organization: "Enactus IIITD",
    icon: "lucide:medal"
  },
  {
    title: "500+ Solved Problems",
    organization: "LeetCode",
    icon: "lucide:code"
  }
];

export const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Awards & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none">
                <CardBody className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Icon icon={award.icon} className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{award.title}</h3>
                    <p className="text-default-600">{award.organization}</p>
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