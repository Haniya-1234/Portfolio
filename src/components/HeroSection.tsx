import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../config/personal';
import DevfolioIcon from './icons/DevfolioIcon';

const HeroSection: React.FC = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf'; // Make sure to place your resume in the public/assets folder
    link.download = 'Haniya_Shaikh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[#1A1D21] text-white py-20 lg:py-0">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1D21] via-[#1A1D21] to-[#0F1215] pointer-events-none"></div>
      
      {/* Subtle glow effects */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl w-full mx-auto">
          {/* Content Section */}
          <motion.div
            className="flex flex-col gap-6 order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-cyan-400/80 text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, It's Me
            </motion.h2>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {personalInfo.name}
              <div className="text-cyan-400/90 mt-2 text-3xl sm:text-4xl lg:text-5xl">
                And I'm a {personalInfo.title}
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {personalInfo.bio.short}
            </motion.p>
            
            <motion.div
              className="flex gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 bg-gray-800/50"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  {link.icon === 'github' && <Github size={20} />}
                  {link.icon === 'linkedin' && <Linkedin size={20} />}
                  {link.icon === 'mail' && <Mail size={20} />}
                  {link.icon === 'devfolio' && <DevfolioIcon size={20} />}
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-4"
            >
              <motion.button
                onClick={handleDownloadCV}
                className="bg-cyan-500/90 hover:bg-cyan-600 text-white px-8 py-4 rounded-full flex items-center gap-3 text-base font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20"
                whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(6, 182, 212, 0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Image Section */}
          <motion.div
            className="order-1 md:order-2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-[220px] sm:w-[260px] md:w-[300px] aspect-square mx-auto mt-18 md:mt-20">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-2xl transform translate-y-7"></div>
              
              {/* Image container */}
              <div className="relative h-full rounded-full overflow-hidden border-2 border-cyan-500/20 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
                <img 
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center scale-125 translate-y-9"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-transparent opacity-20 rounded-full blur-md"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-10 rounded-full blur-2xl"></div>
              
              {/* Ring effect */}
              <div className="absolute -inset-3 border-2 border-cyan-500/10 rounded-full"></div>
              <div className="absolute -inset-4 border border-cyan-500/5 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button 
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center flex-col group cursor-pointer"
        >
          <span className="mb-2 text-sm group-hover:transform group-hover:translate-y-1 transition-transform">
            Scroll Down
          </span>
          <ArrowDownCircle size={20} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;