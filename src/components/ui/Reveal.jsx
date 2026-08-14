import { motion } from 'framer-motion';

/**
 * The site's single entrance animation. Wraps children in a scroll-triggered
 * fade-and-rise so individual sections never hand-roll initial/whileInView
 * triples of their own.
 */
const Reveal = ({ children, delay = 0, y = 24, as = 'div', className = '', ...rest }) => {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
