import React from 'react';
import "./Components.css";
import { motion } from 'framer-motion';
const Components = ({name,img,nickName,date,dateAdded,hours,hoursePlayed,current,currently,download,myclass,delay}) => {
    return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: delay}} className='library-object '>
        <div className='library-info'>
            <ul className='ul-library '>
                <li className='img'>
                    <img alt="" src={img}/>
                </li>
                <li>
                    <h5>{name}</h5>
                    <span>{nickName}</span>
                </li>
                <li>
                    <h5>{dateAdded}</h5>
                    <span>{date}</span>
                </li>
                <li>
                    <h5>{hoursePlayed}</h5>
                    <span>{hours}</span>
                </li>
                <li>
                    <h5>{currently}</h5>
                    <span>{current}</span>
                </li>
                <li className={myclass}>
                    <button className='library-btn '>{download}</button>
                </li>
            </ul>
        </div>
    </motion.div>
    )
}
export default Components
