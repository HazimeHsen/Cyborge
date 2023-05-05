import './Hero.css'
import { motion, spring } from 'framer-motion'
const vart = {
    hidden : {
        x:"100vw",
        opacity: 0
    },
    visible : {
        x:"0",
        opacity: 1,
        transition:{
            delay: 0.5,
        }
    }
}
const op = {
    hidden : {
        opacity: 0
    },
    visible : {
        opacity: 1,
        transition :{
            delay: 1
        }
    }
}
const buttonVar = {
    hidden : {
        scale: 1.2
    },
    visible : {
        scale: 1,
        transition :{
            type: "spring",
            stiffness: 500,
            delay: 1,
        }
    }
}
const Hero = () => {
    return (
    <motion.div variants={vart} initial= "hidden" animate= "visible" className='hero-container text-light'>
        <motion.div variants={op} initial="hidden" animate="visible" className='hero-text'>
            <p className='hero-par'>Welcome To Cyborg</p>
            <h1 className='hero-title'><span className='hero-browse text-danger'>BROWSE</span> OUR  POPULAR GAMES HERE</h1>
        </motion.div>
        <motion.button variants={buttonVar} initial="hidden" animate="visible" className='btn'>Browse Now</motion.button>
    </motion.div>
    )
}

export default Hero
