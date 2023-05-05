import React from 'react'
import { motion } from 'framer-motion'
import "./Container.css"
const Container = (props) => {
    return (
    <motion.div className='container nb-1'>
        {props.children}
    </motion.div>
    )
}

export default Container
