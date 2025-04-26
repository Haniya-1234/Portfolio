import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
              Portfolio
            </a>
            <p className="mt-2 text-gray-400">Creating beautiful web experiences</p>
          </div>
          
          <div className="flex gap-8">
            <div>
              <h3 className="font-semibold text-white mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-3">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/Haniya-1234" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/haniya-shaikh-1b8649238/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://devfolio.co/@haniyashaikh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                  >
                    <svg 
                      className="w-4 h-4" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.303 0 9.6 4.297 9.6 9.6s-4.297 9.6-9.6 9.6-9.6-4.297-9.6-9.6 4.297-9.6 9.6-9.6zm0 1.2c-4.636 0-8.4 3.764-8.4 8.4s3.764 8.4 8.4 8.4 8.4-3.764 8.4-8.4-3.764-8.4-8.4-8.4zm0 1.2c3.978 0 7.2 3.222 7.2 7.2s-3.222 7.2-7.2 7.2-7.2-3.222-7.2-7.2 3.222-7.2 7.2-7.2zm0 1.2c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 1.2c2.647 0 4.8 2.153 4.8 4.8s-2.153 4.8-4.8 4.8-4.8-2.153-4.8-4.8 2.153-4.8 4.8-4.8z"/>
                    </svg>
                    <span>Devfolio</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Haniya Shaikh. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;