import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: CONTACT.email,
      link: `mailto:${CONTACT.email}`,
      color: 'text-cyan-400'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: CONTACT.phoneNo,
      link: `tel:${CONTACT.phoneNo}`,
      color: 'text-green-400'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: CONTACT.address,
      link: null,
      color: 'text-purple-400'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sohan-fernando',
      color: 'text-blue-400'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/sohanfernando',
      color: 'text-gray-400'
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100034818584224&mibextid=LQQJ4d',
      color: 'text-blue-600'
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/_sohanfernando_',
      color: 'text-pink-400'
    }
  ];

  return (
    <div id="contact" className='py-20 lg:py-32 bg-gradient-to-b from-neutral-900 to-neutral-950'>
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
            Get In <span className='text-cyan-400'>Touch</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6'></div>
          <p className='text-lg text-neutral-400 max-w-2xl mx-auto'>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className='max-w-6xl mx-auto'>
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='grid md:grid-cols-3 gap-8 mb-16'
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className='group'
              >
                <div className='bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-8 rounded-2xl border border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-cyan-400/50 text-center'>
                  
                  {/* Icon */}
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300'>
                    <method.icon className={`text-2xl ${method.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className='text-lg font-semibold text-white mb-2'>
                    {method.label}
                  </h3>
                  
                  {method.link ? (
                    <a
                      href={method.link}
                      className='text-neutral-400 hover:text-cyan-400 transition-colors duration-300'
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className='text-neutral-400'>
                      {method.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h3 className='text-2xl font-bold text-white mb-8'>
              Connect With Me
            </h3>
            <div className='flex justify-center gap-6'>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-14 h-14 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full flex items-center justify-center border border-neutral-700 hover:border-cyan-400/50 shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  <social.icon className={`text-2xl ${social.color} hover:scale-110 transition-transform duration-300`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <div className='bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 p-8 rounded-2xl border border-neutral-700/50'>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Ready to Work Together?
              </h3>
              <p className='text-neutral-400 max-w-2xl mx-auto mb-6'>
                I'm currently available for freelance work and full-time opportunities. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto'
                onClick={() => window.open(`mailto:${CONTACT.email}?subject=Let's work together!`, '_blank')}
              >
                <FaEnvelope />
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;