import SF from "../assets/SF.png";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-neutral-900/95 backdrop-blur-md border-b border-neutral-700/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-between py-4 lg:py-6'>
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='flex flex-shrink-0 items-center group'
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <img 
                className='relative w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300 group-hover:scale-110' 
                src={SF} 
                alt="Sohan Fernando" 
              />
            </div>
            <span className='ml-3 text-xl lg:text-2xl font-bold text-white hidden sm:block'>
              Sohan <span className='text-cyan-400'>Fernando</span>
            </span>
          </motion.div>
          
          {/* Desktop Navigation Links (xl and above) */}
          <div className='hidden xl:flex items-center space-x-8'>
            {[
              { id: 'about', label: 'About Me' },
              { id: 'technologies', label: 'Technologies' },
              { id: 'education', label: 'Education' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className='relative text-neutral-300 hover:text-cyan-400 transition-colors duration-300 font-medium group'
              >
                {item.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300'></span>
              </motion.button>
            ))}
          </div>

          {/* Desktop Social Media Links (xl and above) */}
          <div className='hidden xl:flex items-center gap-4'>
            {[
              { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sohan-fernando', color: 'hover:text-blue-400' },
              { icon: FaGithub, url: 'https://github.com/sohanfernando', color: 'hover:text-gray-400' },
              { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100034818584224&mibextid=LQQJ4d', color: 'hover:text-blue-600' },
              { icon: FaInstagram, url: 'https://www.instagram.com/_sohanfernando_', color: 'hover:text-pink-400' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-full flex items-center justify-center border border-neutral-700/50 text-neutral-400 ${social.color} transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg`}
              >
                <social.icon className='text-lg' />
              </motion.a>
            ))}
          </div>

          {/* Mobile & Tablet Menu Button (below xl) */}
          <div className='xl:hidden'>
            <motion.button 
              onClick={toggleMenu}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-full flex items-center justify-center border border-neutral-700/50 text-neutral-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 shadow-lg'
            >
              {isMenuOpen ? <FaTimes className='text-lg lg:text-xl' /> : <FaBars className='text-lg lg:text-xl' />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu (below xl) */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className='xl:hidden bg-neutral-900/95 backdrop-blur-md border-t border-neutral-700/50'
        >
          <div className='container mx-auto px-6 py-6'>
            <div className='space-y-6'>
              {/* Navigation Links */}
              <div className='space-y-4'>
                <h3 className='text-lg lg:text-xl font-semibold text-white mb-4 text-center'>Navigation</h3>
                {[
                  { id: 'about', label: 'About Me' },
                  { id: 'technologies', label: 'Technologies' },
                  { id: 'education', label: 'Education' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className='block w-full text-left py-4 px-6 text-neutral-300 hover:text-cyan-400 hover:bg-neutral-800/50 rounded-lg transition-all duration-300 font-medium text-base lg:text-lg'
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              
              {/* Divider */}
              <div className='border-t border-neutral-700/50'></div>
              
              {/* Social Media Icons */}
              <div className='space-y-4'>
                <h3 className='text-lg lg:text-xl font-semibold text-white mb-4 text-center'>Connect</h3>
                <div className='flex justify-center gap-6'>
                  {[
                    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sohan-fernando', color: 'text-blue-400' },
                    { icon: FaGithub, url: 'https://github.com/sohanfernando', color: 'text-gray-400' },
                    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100034818584224&mibextid=LQQJ4d', color: 'text-blue-600' },
                    { icon: FaInstagram, url: 'https://www.instagram.com/_sohanfernando_', color: 'text-pink-400' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-full flex items-center justify-center border border-neutral-700/50 ${social.color} hover:border-cyan-400/50 hover:shadow-lg transition-all duration-300`}
                    >
                      <social.icon className='text-xl lg:text-2xl' />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;