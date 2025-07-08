import { HERO_CONTENT } from "../constants";
import SohanPic from "../assets/sohanProfilePic.jpeg";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: delay, ease: "easeOut" }
    },
})

const Hero = () => {
  return (
    <div className='min-h-screen flex items-center justify-center py-20 lg:py-32'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          {/* Left Content */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='space-y-6'
            >
              {/* Greeting */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-lg text-cyan-400 font-medium tracking-wide'
              >
                Hello, I'm
              </motion.p>
              
              {/* Name */}
              <motion.h1
                variants={container(0.3)}
                initial="hidden"
                animate="visible"
                className='text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight'
              >
                <span className='text-white'>Sohan</span>
                <span className='text-cyan-400'> Fernando</span>
              </motion.h1>
              
              {/* Title */}
              <motion.div
                variants={container(0.6)}
                initial="hidden"
                animate="visible"
                className='space-y-2'
              >
                <h2 className='text-2xl lg:text-3xl font-semibold text-neutral-300'>
                  Full Stack Developer
                </h2>
                <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto lg:mx-0'></div>
              </motion.div>
              
              {/* Description */}
              <motion.p
                variants={container(0.9)}
                initial="hidden"
                animate="visible"
                className='text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto lg:mx-0'
              >
                {HERO_CONTENT}
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                variants={container(1.2)}
                initial="hidden"
                animate="visible"
                className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3'
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://drive.google.com/file/d/1MZAIPhSzO8K-tu27cT6yRWPNKxEz_Ae6/view?usp=sharing'
                    link.download = 'Sohan_Fernando_CV.pdf';
                    link.click();
                  }}
                >
                  <FaDownload className='text-sm' />
                  Download CV
                  <FaArrowRight className='text-sm group-hover:translate-x-1 transition-transform duration-300' />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-cyan-400 hover:text-white transition-all duration-300'
                  onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Image */}
          <div className='w-full lg:w-1/2 flex justify-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className='relative w-full max-w-xs lg:max-w-sm'
            >
              {/* Background Glow */}
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl'></div>
              
              {/* Image Container */}
              <div className='relative w-full'>
                <motion.img
                  className='w-full h-auto max-h-[310px] sm:max-h-[350px] lg:max-h-[380px] xl:max-h-[400px] object-cover rounded-full border-4 border-cyan-400/30 shadow-2xl'
                  src={SohanPic}
                  alt="Sohan Fernando"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className='absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-60 shadow-lg'
                ></motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className='absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 shadow-lg'
                ></motion.div>
                
                {/* Additional Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                    x: [-5, 5, -5]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className='absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-40 shadow-lg'
                ></motion.div>
                <motion.div
                  animate={{ 
                    y: [5, -5, 5],
                    x: [5, -5, 5]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className='absolute bottom-1/2 -left-6 w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full opacity-40 shadow-lg'
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;