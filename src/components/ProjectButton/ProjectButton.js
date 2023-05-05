import React from 'react'
import "./ProjectButton.css"
import { motion } from 'framer-motion'
const ProjectButton = ({btnValue}) => {
    const buttonVar = {
        hidden : {
            opacity: 0
        },
        visible : {
            opacity: 1,
            transition :{
                delay: 1,
                duration: 1
            }
        }
    }
    return (
    <>
        <motion.button variants={buttonVar} initial="hidden" animate="visible" className='my-only-btn btn'>{btnValue}</motion.button>
    </>
    )
}

export default ProjectButton
