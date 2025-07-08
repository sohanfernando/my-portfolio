import { PROJECTS } from '../constants'
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';

const Projects = () => {
  return (
    <div id="projects" className='py-20 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900'>
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
            Featured <span className='text-cyan-400'>Projects</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6'></div>
          <p className='text-lg text-neutral-400 max-w-2xl mx-auto'>
            A showcase of my recent work, demonstrating my skills in full-stack development and problem-solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className='group h-full'
            >
              {/* Project Card */}
              <div className='bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl border border-neutral-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-cyan-400/50 overflow-hidden h-full flex flex-col'>
                
                {/* Project Image */}
                <div className='relative overflow-hidden flex-shrink-0'>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  
                  {/* Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='absolute bottom-4 left-4 right-4 flex gap-2'>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='flex-1 bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-600 transition-colors duration-300 flex items-center justify-center gap-2'
                      >
                        <FaEye />
                        View Demo
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='flex-1 bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center gap-2'
                      >
                        <FaGithub />
                        Code
                      </motion.button>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className='p-6 flex flex-col flex-grow'>
                  {/* Project Title */}
                  <div className='flex items-center gap-2 mb-3'>
                    <FaCode className='text-cyan-400 text-sm' />
                    <h3 className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'>
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Project Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='text-neutral-400 text-sm leading-relaxed mb-4 flex-grow'
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Technologies */}
                  <div className='space-y-3 mt-auto'>
                    <div className='flex items-center gap-2'>
                      <span className='text-xs font-semibold text-neutral-500 uppercase tracking-wide'>
                        Technologies
                      </span>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                          className='px-2 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-xs rounded-md border border-cyan-400/30'
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='mt-16 text-center'
        >
          <div className='bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 p-8 rounded-2xl border border-neutral-700/50'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Want to See More?
            </h3>
            <p className='text-neutral-400 max-w-2xl mx-auto mb-6'>
              Check out my GitHub profile for more projects and contributions to open-source software.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto'
              onClick={() => window.open('https://github.com/sohanfernando', '_blank')}
            >
              <FaGithub />
              View GitHub Profile
              <FaExternalLinkAlt className='text-sm' />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;