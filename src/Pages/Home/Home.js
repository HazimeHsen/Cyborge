import Hero from '../../Section/Hero/Hero'
import Popular from '../../Section/Popular/Popular'
import Library from '../../Section/Library/Library'
import React from 'react'
import { motion,useScroll,useSpring } from 'framer-motion';

const Home = () => {
    // const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    // });
    return (
    <motion.div>
        {/* <motion.div className="progress" style={{ scaleX }} /> */}
        <Hero/>
        <Popular/>
        <Library/>
    </motion.div>
    )
}

export default Home
