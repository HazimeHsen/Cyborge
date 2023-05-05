import './Popular.css'
import Components from './components/Components'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import ProjectButton from '../../components/ProjectButton/ProjectButton'
import { motion, AnimatePresence, spring, delay   } from 'framer-motion'
import Popular1 from '../../assets/images/popular-01.jpg'
import Popular2 from '../../assets/images/popular-02.jpg'
import Popular3 from '../../assets/images/popular-03.jpg'
import Popular4 from '../../assets/images/popular-04.jpg'
import Popular5 from '../../assets/images/popular-05.jpg'
import Popular6 from '../../assets/images/popular-06.jpg'
import Popular7 from '../../assets/images/popular-07.jpg'
import Popular8 from '../../assets/images/popular-08.jpg'
import { useState } from 'react'
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
const Popular = () => {
    const [showTitle, setShowTitle] = useState(true)
    setTimeout(() =>(
        setShowTitle(false)
    ), 3000)
    return (
    <motion.div variants={vart} initial= "hidden" animate= "visible"  className='Project-container'>
        <AnimatePresence>
            {showTitle && <motion.div exit={{x: -1000}}>
                <HeaderComponent myHeading="Right Now" mySpan="Most Popular"/>
            </motion.div>}
        </AnimatePresence>
        <motion.div variants={op} initial="hidden" animate="visible" className='all-rows'>
            <Components  img = {Popular1} name = "Fortnite" nickName = "Sandbox"/>
            <Components  img = {Popular2} name = "Fortnite" nickName = "Sandbox"/>
            <Components  img = {Popular3} name = "Fortnite" nickName = "Sandbox"/>
            <Components  img = {Popular4} name = "Fortnite" nickName = "Sandbox"/>
            <div className='my-card-container'>
                <Components  img = {Popular5} name = "Fortnite" nickName = "Sandbox"/>
                <Components  img = {Popular6} name = "Fortnite" nickName = "Sandbox"/>
            </div>
            <Components  img = {Popular7} name = "Fortnite" nickName = "Sandbox"/>
            <Components  img = {Popular8} name = "Fortnite" nickName = "Sandbox"/>
        </motion.div>
        <ProjectButton btnValue= "Discover Popular"/>
    </motion.div>
    )
}

export default Popular
