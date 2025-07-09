import { SiSpringboot } from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiDocker } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { motion } from "framer-motion";

const technologies = [
  { icon: DiJava, name: 'Java', color: 'text-yellow-500', category: 'Backend' },
  { icon: SiSpringboot, name: 'Spring Boot', color: 'text-green-400', category: 'Backend' },
  { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500', category: 'Frontend' },
  { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500', category: 'Backend' },
  { icon: RiReactjsLine, name: 'React', color: 'text-cyan-400', category: 'Frontend' },
  { icon: TbBrandNextjs, name: 'Next.js', color: 'text-white', category: 'Frontend' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400', category: 'Frontend' },
  { icon: SiCplusplus, name: 'C++', color: 'text-blue-500', category: 'Backend' },
  { icon: SiMysql, name: 'MySQL', color: 'text-blue-500', category: 'Database' },
  { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500', category: 'Database' },
  { icon: BiLogoPostgresql, name: 'PostgreSQL', color: 'text-sky-700', category: 'Database' },
  { icon: DiRedis, name: 'Redis', color: 'text-red-700', category: 'Database' },
  { icon: SiGit, name: 'Git', color: 'text-red-500', category: 'Version Control' },
  { icon: SiGithub, name: 'GitHub', color: 'text-white', category: 'Version Control' },
  { icon: SiDocker, name: 'Docker', color: 'text-sky-400', category: 'DevOps' },
];

const Technologies = () => {
  return (
    <div id="technologies" className='py-20 lg:py-32 bg-gradient-to-b from-neutral-900 to-neutral-950'>
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
            Technologies & <span className='text-cyan-400'>Tools</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6'></div>
          <p className='text-lg text-neutral-400 max-w-2xl mx-auto'>
            My technology stack includes modern frameworks, databases, and tools for building scalable applications
          </p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className='group relative'
            >
              {/* Card Background */}
              <div className='relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-6 rounded-2xl border border-neutral-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:border-cyan-400/50'>
                
                {/* Background Glow */}
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                {/* Icon */}
                <div className='relative z-10 flex flex-col items-center space-y-4'>
                  <div className='w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300'>
                    <tech.icon className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  
                  {/* Technology Name */}
                  <div className='text-center'>
                    <h3 className='text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300'>
                      {tech.name}
                    </h3>
                    <p className='text-xs text-neutral-500 mt-1'>
                      {tech.category}
                    </p>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    duration: 3 + index * 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className='absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60'
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='mt-16 text-center'
        >
          <div className='bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 p-8 rounded-2xl border border-neutral-700/50'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Always Learning
            </h3>
            <p className='text-neutral-400 max-w-3xl mx-auto leading-relaxed'>
              I'm constantly exploring new technologies and frameworks to stay current with industry trends. 
              My passion for learning drives me to experiment with emerging tools and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;