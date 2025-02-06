import { HERO_CONTENT } from "../constants";
import SohanPic from "../assets/sohanProfilePic.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
})

const Hero = () => {
  return <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
    <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
                >
                    Sohan Fernando
                </motion.h1>
                <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'
                >
                    Full Stack Developer
                </motion.span>
                <motion.p
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 maax-w-xlpy-6 font_light tracking-tighter'
                >
                    {HERO_CONTENT}
                </motion.p>
                <motion.button 
                    variants={container(1.2)}
                    initial="hidden"
                    animate="visible"
                    className='cursor-pointer flex justify-between bg-gray-800 px-3 py-2 my-2 rounded-full text-white
                    tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono'
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = 'https://drive.google.com/uc?export=download&id=1ZJxxC890uZn2-tDP5UiAcSQwrSuMfdvV'
                        link.download = 'My CV.pdf';
                        link.click();
                    }}
                >
                        Download My CV
                </motion.button>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.img
                    className='rounded-3xl'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    src={SohanPic}
                    alt="Sohan Fernando" />
            </div>
        </div>
    </div>
  </div>
}

export default Hero