'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is where you would normally send the form data to a server
    // For now, we'll just simulate a successful submission after a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset the status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-2 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form or get in touch directly using the contact details below. 
                I'm always open to discussing new projects, creative ideas or opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                  <EnvelopeIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <a 
                    href="mailto:contact@isuranga.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition"
                  >
                    isurangasulakshana@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                  <PhoneIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <a 
                    href="tel:+94785575691" 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition"
                  >
                    078 557 5691
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                  <MapPinIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    575/5A 3rd Kurana, Negombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-500 bg-white dark:bg-dark-300 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-500 bg-white dark:bg-dark-300 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-500 bg-white dark:bg-dark-300 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-500 bg-white dark:bg-dark-300 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition ${
                    isSubmitting
                      ? 'bg-gray-400 dark:bg-gray-700 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-lg"
                >
                  Thank you for your message! I'll get back to you as soon as possible.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 rounded-lg"
                >
                  There was an error sending your message. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
