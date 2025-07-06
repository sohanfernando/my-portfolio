import SF from "../assets/SF.png";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className='mb-3 flex items-center justify-between py-6 relative'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-20 h-20' src={SF} alt="logo" />
      </div>
      
      {/* Desktop Navigation Links */}
      <div className='hidden lg:flex items-center space-x-8 text-lg'>
        <button 
          onClick={() => scrollToSection('about')}
          className='hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
        >
          About Me
        </button>
        <button 
          onClick={() => scrollToSection('technologies')}
          className='hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
        >
          Technologies
        </button>
        <button 
          onClick={() => scrollToSection('education')}
          className='hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
        >
          Education
        </button>
        <button 
          onClick={() => scrollToSection('experience')}
          className='hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className='hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className='hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
        >
          Contact
        </button>
      </div>

      {/* Desktop Social Media Links */}
      <div className='hidden lg:flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/sohan-fernando" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-cyan-300 transition-colors duration-300'>
          <FaLinkedin />
        </a>
        <a href="https://github.com/sohanfernando" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-cyan-300 transition-colors duration-300'>
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100034818584224&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-cyan-300 transition-colors duration-300'>
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/_sohanfernando_" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-cyan-300 transition-colors duration-300'>
          <FaInstagram />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className='lg:hidden'>
        <button 
          onClick={toggleMenu}
          className='text-2xl hover:text-cyan-300 transition-colors duration-300'
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 right-0 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg z-50 lg:hidden'>
          <div className='py-4 px-6 space-y-4'>
            {/* Navigation Links */}
            <div className='space-y-3'>
              <button 
                onClick={() => scrollToSection('about')}
                className='block w-full text-left hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('technologies')}
                className='block w-full text-left hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
              >
                Technologies
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className='block w-full text-left hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className='block w-full text-left hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className='block w-full text-left hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className='block w-full text-left hover:text-cyan-300 transition-colors duration-300 cursor-pointer'
              >
                Contact
              </button>
            </div>
            
            {/* Divider */}
            <div className='border-t border-neutral-700'></div>
            
            {/* Social Media Icons */}
            <div className='flex items-center justify-center gap-6 text-2xl'>
              <a href="https://www.linkedin.com/in/sohan-fernando" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-cyan-300 transition-colors duration-300'>
                <FaLinkedin />
              </a>
              <a href="https://github.com/sohanfernando" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-cyan-300 transition-colors duration-300'>
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100034818584224&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-cyan-300 transition-colors duration-300'>
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/_sohanfernando_" target="_blank" rel="noopener noreferrer" className='cursor-pointer hover:text-cyan-300 transition-colors duration-300'>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
