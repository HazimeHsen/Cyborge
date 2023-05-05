import React from 'react';
import "./Library.css";
import Components from './Components/Components';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import Game1 from "../../assets/images/game-01.jpg"
import Game2 from "../../assets/images/game-02.jpg"
import Game3 from "../../assets/images/game-03.jpg"
import ProjectButton from '../../components/ProjectButton/ProjectButton';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const Library = () => {
    const {ref, inView} = useInView({
        threshold: 0.3
        });
    const Animation = useAnimation();
    useEffect(()=>{
        if(inView){
            Animation.start({
                x: 0,
                transition: {
                    type: "spring",
                    bounce:0.3,
                    when: "beforeChildren"
                }
            })
        }
        else{
            Animation.start({
                x: "-100vh",
            })
        }
    },[Animation, inView])
    return (
    <motion.div ref={ref} animate={Animation} className='Project-container'>
        <HeaderComponent myHeading="Library" mySpan="Your Gaming"/>
        <motion.div className='com-container'>
            <Components delay = "0" dateAdded = "Date Added" hoursePlayed = "Hours Played" currently = "Currently" img = {Game1} name = "Dota 2" nickName = "Sandbox" date = "21/04/2036" hours = "740 H 52 Mins" current = "Downloaded" download = "Downloaded"/>
            <Components delay = "1" dateAdded = "Date Added" hoursePlayed = "Hours Played" currently = "Currently" myclass ="library-btn-active"  img = {Game2} name = "Fortnite"nickName = "Sandbox" date = "21/04/2036" hours = "740 H 52 Mins" current = "Downloaded" download = "Download"/>
            <Components delay = "2" dateAdded = "Date Added" hoursePlayed = "Hours Played" currently = "Currently" img = {Game3} name = "CS-GO" nickName = "Sandbox" date = "21/04/2036" hours = "740 H 52 Mins" current = "Downloaded" download = "Downloaded"/>
        </motion.div>
        <ProjectButton btnValue="View Your Library"/>
    </motion.div>
    )
}

export default Library
