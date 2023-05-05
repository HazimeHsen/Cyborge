/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Footer.css"
import {motion} from "framer-motion"
const Footer = () => {
    return (
    <motion.div initial={{backgroundColor: "red"}} transition={{duration: 3}} whileInView={{backgroundColor: "white"}} viewport={{once: true}} className=' container footer'>
        <p>Copyright © 2036 <a href='#'>Cyborg Gaming</a> Company. All rights reserved.
        Design: <a href='https://templatemo.com' target="_blank" rel="noreferrer">TemplateMo</a></p>
    </motion.div>
    )
}

export default Footer
