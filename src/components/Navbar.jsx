import React from 'react';
import logo from "../assets/kevinRushLogo.png";
import SF from "../assets/SF.png";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-20 h-20' src={SF} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/sohan-fernando" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
          <FaLinkedin />
        </a>
        <a href="https://github.com/sohanfernando" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/_sohanfernando_" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
