import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Code, Mail, Award, Briefcase, Users } from 'lucide-react';
import { socialLinks, personalInfo } from '../config/personal';
import DevfolioIcon from './icons/DevfolioIcon';

const stats = [
  {
    icon: Award,
    value: personalInfo.stats.experience,
    label: "Years Experience"
  },
  {
    icon: Briefcase,
    value: personalInfo.stats.projects,
    label: "Projects Completed"
  },
  {
    icon: Users,
    value: personalInfo.stats.clients,
    label: "Happy Clients"
  }
];

const AboutSection: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'public/assets/resume.pdf';
    link.download = 'Haniya_Shaikh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-primary to-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.span 
            className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional Summary</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-teal-400 mx-auto"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <AnimatedSection delay={0.3}>
            <motion.div 
              className="relative group max-w-sm mx-auto md:max-w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-800/50 backdrop-blur-sm">
                <img 
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-[400px] md:h-[450px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  style={{
                    objectPosition: "center 15%"
                  }}
                />
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <stat.icon className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                      <p className="font-bold text-lg">{stat.value}</p>
                      <p className="text-xs text-gray-300">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5} className="flex flex-col gap-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
                  {personalInfo.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {personalInfo.bio.long}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-white">Key Achievements</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personalInfo.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <p className="text-sm text-gray-200">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-2">
              {socialLinks.map((link) => {
                const IconComponent = {
                  github: Github,
                  linkedin: Linkedin,
                  code: Code,
                  mail: Mail,
                  devfolio: DevfolioIcon
                }[link.icon];
                
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300">
                      {IconComponent && <IconComponent size={20} />}
                    </div>
                  </motion.a>
                );
              })}
            </div>
            
            <motion.button
              onClick={handleDownloadResume}
              className="mt-4 relative group w-fit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
                <Download size={18} />
                Download Resume
              </div>
            </motion.button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;