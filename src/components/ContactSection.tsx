import React, { useState, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { socialLinks } from '../data/social';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_yz89gfk',
        'template_lt5a538',
        formRef.current,
        'PsBnY7PY8aHgZbgZ0'
      );
      
      alert('Message sent successfully!');
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-teal-400 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Interested in working together? Have a question about my work?
            Feel free to reach out using the form below.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.3}>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 h-full">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-2">Email</h4>
                  <p className="text-gray-300">haniyajshaikh05@gmail.com</p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Location</h4>
                  <p className="text-gray-300">Mumbai, Maharashtra, India</p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => {
                      const IconComponent = {
                        github: Github,
                        linkedin: Linkedin,
                        twitter: Twitter,
                        mail: Mail
                      }[link.icon];
                      
                      return (
                        <motion.a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300"
                          whileHover={{ y: -5, scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {IconComponent && <IconComponent size={20} />}
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5}>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Send a Message</h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-purple-500/20 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;