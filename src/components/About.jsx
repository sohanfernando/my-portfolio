import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion";
import { FaUser, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about" className='py-20 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>
            About <span className='text-cyan-400'>Me</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6'></div>
          <p className='text-lg text-neutral-400 max-w-2xl mx-auto'>
            Get to know me better and understand my journey in software development
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'
          >
            {/* Background Glow */}
            <div className='absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-3xl blur-3xl'></div>
            
            {/* Image Container */}
            <div className='relative'>
              <motion.img 
                className='w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl border border-cyan-400/30'
                src={aboutImg} 
                alt="About Me"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='absolute -top-6 -right-6 bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-2xl shadow-xl'
              >
                <div className='text-center text-white'>
                  <div className='text-2xl font-bold'>3+</div>
                  <div className='text-sm opacity-90'>Years Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            {/* Main Description */}
            <div className='space-y-6'>
              <motion.p 
                className='text-lg text-neutral-300 leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {ABOUT_TEXT}
              </motion.p>
            </div>

            {/* Key Points */}
            <div className='grid gap-6'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='flex items-start gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50'
              >
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center'>
                  <FaUser className='text-white text-lg' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-white mb-2'>Passionate Developer</h3>
                  <p className='text-neutral-400'>Dedicated to creating innovative solutions and continuously learning new technologies.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='flex items-start gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50'
              >
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center'>
                  <FaCode className='text-white text-lg' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-white mb-2'>Full Stack Expertise</h3>
                  <p className='text-neutral-400'>Proficient in both frontend and backend development with modern technologies.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className='flex items-start gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50'
              >
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center'>
                  <FaLightbulb className='text-white text-lg' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-white mb-2'>Problem Solver</h3>
                  <p className='text-neutral-400'>Strong analytical skills with a focus on delivering efficient and scalable solutions.</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300'
                onClick={() => {
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;