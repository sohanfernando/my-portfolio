import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCode } from 'react-icons/fa';

const Experience = () => {
  return (
    <div id="experience" className='py-20 lg:py-32 bg-gradient-to-b from-neutral-900 to-neutral-950'>
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
            Work <span className='text-cyan-400'>Experience</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6'></div>
          <p className='text-lg text-neutral-400 max-w-2xl mx-auto'>
            My professional journey and the roles that have shaped my expertise in software development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className='max-w-5xl mx-auto'>
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='relative mb-12'
            >
              {/* Timeline Line */}
              <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500'></div>
              
              {/* Timeline Dot */}
              <div className='absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg'></div>
              
              {/* Content Card */}
              <div className='ml-16'>
                <div className='bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 p-8 rounded-2xl border border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-cyan-400/50'>
                  
                  {/* Header */}
                  <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6'>
                    <div className='flex items-center gap-3 mb-4 lg:mb-0'>
                      <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center'>
                        <FaBriefcase className='text-white text-xl' />
                      </div>
                      <div>
                        <h3 className='text-xl font-bold text-white'>
                          {experience.role}
                        </h3>
                        <div className='flex items-center gap-2 text-cyan-400'>
                          <FaBuilding className='text-sm' />
                          <span className='text-sm font-medium'>{experience.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Year Badge */}
                    <div className='flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-cyan-400/30'>
                      <FaCalendarAlt className='text-cyan-400 text-sm' />
                      <span className='text-cyan-400 font-semibold'>{experience.year}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='text-neutral-300 leading-relaxed mb-6'
                  >
                    {experience.description}
                  </motion.p>
                  
                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='space-y-4'
                  >
                    <div className='flex items-center gap-2'>
                      <FaCode className='text-cyan-400 text-sm' />
                      <span className='text-sm font-semibold text-white'>Technologies Used:</span>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                          className='px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-sm rounded-full border border-cyan-400/30 hover:bg-cyan-500/20 transition-colors duration-300'
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Experience Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='mt-16 text-center'
        >
          <div className='bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 p-8 rounded-2xl border border-neutral-700/50'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Professional Growth
            </h3>
            <p className='text-neutral-400 max-w-3xl mx-auto leading-relaxed'>
              Throughout my career, I've worked on diverse projects that have enhanced my skills in full-stack development, 
              team collaboration, and delivering high-quality software solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;