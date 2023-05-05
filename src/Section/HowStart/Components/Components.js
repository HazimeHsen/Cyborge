import React from 'react'
import "./Components.css"
import { delay, motion } from 'framer-motion'
const buttonVar = {
    hidden : {
        opacity: 0
    },
    visible : {
        opacity: 1,
        transition :{
            duration: 1,
            delay:0.3
        }
    }
}
const Components = ({img,info,header,myLink,infoCon}) => {
    return (
    <motion.div initial={{x: 1400}} animate={{x:0}} className='card start-card'>
        <motion.div  variants={buttonVar} initial="hidden" animate="visible" className='start-image'>
            <img alt='' src={img}/>
        </motion.div>
        <motion.div variants={buttonVar} initial="hidden" animate="visible" className='card-body start-card-body'>
            <h4 className='start-heading'>
            {header}
            </h4>
            <p className='start-info'>
                {info}
                <a href = "/templatemo.com" target = "_blank">{myLink}</a>
                {infoCon}
            </p>
        </motion.div>
    </motion.div>
    )
}

export default Components
