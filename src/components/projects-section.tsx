import React from 'react';
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "SafeChoice",
    description: "Personalized product safety checker with barcode scanning",
    image: "https://img.heroui.chat/image/placeholder?w=600&h=400&text=SafeChoice",
    techStack: ["Streamlit", "OpenFoodFacts API", "SQLite"],
    highlights: [
      "Developed a user-friendly interface for scanning product barcodes",
      "Implemented personalized safety recommendations based on user allergies"
    ],
    github: "https://github.com/Sarvajeet2003/safechoice"
  },
  {
    title: "MedEase",
    description: "Hospital readmission predictor + summary generator",
    image: "https://img.heroui.chat/image/placeholder?w=600&h=400&text=MedEase",
    techStack: ["Python", "FHIR API", "OpenAI API"],
    highlights: [
      "Built a model to predict hospital readmission with 85% accuracy",
      "Created an AI-powered medical summary generator for patient records"
    ],
    github: "https://github.com/Sarvajeet2003/medease"
  },
  {
    title: "ML Allergen Model",
    description: "End-to-end allergen classification pipeline",
    image: "https://img.heroui.chat/image/placeholder?w=600&h=400&text=ML+Allergen",
    techStack: ["TensorFlow", "scikit-learn"],
    highlights: [
      "Developed a classification model for allergen detection in protein sequences",
      "Achieved 92% accuracy on test dataset with optimized hyperparameters"
    ],
    github: "https://github.com/Sarvajeet2003/allergen-detection"
  },
  {
    title: "Traffic Terminator",
    description: "Peak-hour taxi supply-demand optimization in Bengaluru",
    image: "https://img.heroui.chat/image/placeholder?w=600&h=400&text=Traffic+Terminator",
    techStack: ["LSTM", "Q-Learning", "Flask"],
    highlights: [
      "Implemented LSTM model to predict taxi demand patterns",
      "Created Q-Learning algorithm for optimal resource allocation"
    ],
    github: "https://github.com/Sarvajeet2003/traffic-terminator"
  },
  {
    title: "Course ChatBot & Suggester",
    description: "PDF ingestion & Q&A for university courses",
    image: "https://img.heroui.chat/image/placeholder?w=600&h=400&text=Course+ChatBot",
    techStack: ["Flask", "FAISS", "NLP"],
    highlights: [
      "Built a system to ingest and process course PDFs for semantic search",
      "Implemented a Q&A system with natural language understanding"
    ],
    github: "https://github.com/Sarvajeet2003/course-chatbot"
  },
  {
    title: "FaceRhythm",
    description: "Emotion-driven music recommendations",
    image: "https://img.heroui.chat/image/placeholder?w=600&h=400&text=FaceRhythm",
    techStack: ["TensorFlow", "Spotify API"],
    highlights: [
      "Developed emotion recognition model from text input",
      "Integrated with Spotify API for personalized music recommendations"
    ],
    github: "https://github.com/Sarvajeet2003/FaceRhythm"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-default-50">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardBody className="p-0">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-default-600 mb-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Chip
                          key={tech}
                          variant="flat"
                          color="primary"
                          size="sm"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon icon="lucide:check" className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                          <span className="text-default-600 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button
                    as="a"
                    href={project.github}
                    target="_blank"
                    color="primary"
                    variant="flat"
                    startContent={<Icon icon="lucide:github" />}
                    fullWidth
                  >
                    View Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};