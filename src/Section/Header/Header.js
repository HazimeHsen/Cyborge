import {useRef, useState, useEffect} from 'react'
import "./Header.css"
import logo from '../../assets/images/logo.png'
import profile from '../../assets/images/profile-header.jpg'
import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'
const Header = () => {
    const [showBanner, setShowBanner] = useState( window.sessionStorage.getItem('hsen') || "0");

useEffect(() => {
    window.sessionStorage.setItem('hsen', (showBanner));
}, [showBanner]);
useEffect(() => {
    let data0 = document.getElementById("0");
    data0.classList.remove("active")
    let data = document.getElementById(showBanner)
    data.classList.add("active")
    if(showBanner === "4" || showBanner === "5"){
        let data4 = document.getElementById("4");
        data4.classList.add("profile-active")
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

    const navRef = useRef();
    const menuRef = useRef();
    const closeRef = useRef();
    function menu () {
        navRef.current.classList.toggle("open");
        menuRef.current.classList.toggle("none");
        closeRef.current.classList.toggle("none");
    }

    document.addEventListener("click", (e) => {
        const myLink = document.querySelector(".active");
        const profileLi = document.querySelector(".profile")
        if(e.target.className === "my-link"){
            setShowBanner(e.target.id)
            if(myLink){
                myLink.classList.remove("active")
            }
            profileLi.classList.remove("profile-active")
            e.target.classList.toggle("active")
        }

        if(e.target.className === "profile" || e.target.id === "5"){
            setShowBanner(e.target.id)
            if(myLink){
                myLink.classList.remove("active")
            }
            profileLi.classList.toggle("profile-active")
        }
        
    }
    )
    return (
    <motion.div initial={{y: -300}} animate={{y: 0}} className=" my ">
        <div className='image-handler'>
            <img src={logo} alt=''/>
        </div>
        <div className='my-btn'>
            <span onClick={menu} ref={menuRef} className="  menu nav-btn material-symbols-outlined">menu</span>
            <span onClick={menu} ref = {closeRef}className="none close nav-btn material-symbols-outlined">close</span>
        </div>
        <div ref={navRef} className="infos-container d-flex">
            <form className="search d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Type something" aria-label="Search"/>
            </form>
            <ul className=" container ul-father">
                <li  className=" ul-content ">
                    <Link id='0' onClick={(e) => {setShowBanner(e.target.id)}} className=" my-link" to = "/">Home</Link>
                </li>
                <li  className=" ul-content ">
                    <Link id='1' onClick={(e) => {setShowBanner(e.target.id)}} className = "my-link" to = "/browse">Browse</Link>
                </li>
                <li  className=" ul-content ">
                    <Link id='2' onClick={(e) => {setShowBanner(e.target.id)}} className = "my-link" to = "/details">Details</Link>
                </li>
                <li  className=" ul-content ">
                    <Link id='3' onClick={(e) => {setShowBanner(e.target.id)}} className = "my-link" to = "/stream">Streams</Link>
                </li>
                <li  className=" ul-content">
                    <Link id='4' onClick={(e) => {setShowBanner(e.target.id)}} className='profile' to = "/profile">Profile<img onClick={(e)=>{
                                const myLink = document.querySelector(".active");
                                const profileLi = document.querySelector(".profile")
                                setShowBanner(e.target.id)
                                if(myLink){
                                    myLink.classList.remove("active")
                                }
                                profileLi.classList.add("profile-active")
                            }
                    } id = "5" className='gg-img' src={profile} alt=''/></Link>
                </li>
            </ul>
        </div>
    </motion.div >
)}


export default Header
