import React, { useState } from 'react';
import { Card, CardBody, Input, Textarea, Button } from "@heroui/react";
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: "lucide:mail",
    label: "Email",
    value: "sarvajeeth21417@iiitd.ac.in",
    href: "mailto:sarvajeeth21417@iiitd.ac.in"
  },
  {
    icon: "lucide:phone",
    label: "Phone",
    value: "+91-8310934161",
    href: "tel:+918310934161"
  },
  {
    icon: "lucide:github",
    label: "GitHub",
    value: "Sarvajeet2003",
    href: "https://github.com/Sarvajeet2003"
  },
  {
    icon: "lucide:code",
    label: "LeetCode",
    value: "sarvajeeth21417",
    href: "https://leetcode.com/u/sarvajeeth21417/"
  },
  {
    icon: "lucide:linkedin",
    label: "LinkedIn",
    value: "sarvajeeth-uk",
    href: "https://linkedin.com/in/sarvajeeth-uk"
  }
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setSubmitSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-default-50">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Icon icon={item.icon} className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-default-500">{item.label}</p>
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-default-700 hover:text-primary-500 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <Card>
              <CardBody>
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="bordered"
                    isRequired
                  />
                  
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="bordered"
                    isRequired
                  />
                  
                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="bordered"
                    minRows={4}
                    isRequired
                  />
                  
                  {submitSuccess && (
                    <p className="text-success-500">Message sent successfully!</p>
                  )}
                  
                  {submitError && (
                    <p className="text-danger-500">{submitError}</p>
                  )}
                  
                  <Button
                    type="submit"
                    color="primary"
                    isLoading={isSubmitting}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
};