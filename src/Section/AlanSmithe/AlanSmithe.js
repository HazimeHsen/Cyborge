import React from 'react'
import "./AlanSmithe.css"
import ProfileImg from "../../assets/images/profile.jpg"
import ProfileComponents from './ProfileComponents/ProfileComponents'
import LinkOfProject from '../../components/LinkOfProject/LinkOfProject'
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import SecondPhase from './SecondPhase/SecondPhase'
import Clip1 from "../../assets/images/clip-01.jpg"
import Clip2 from "../../assets/images/clip-02.jpg"
import Clip3 from "../../assets/images/clip-03.jpg"
import Clip4 from "../../assets/images/clip-04.jpg"
import ProjectButton from "../../components/ProjectButton/ProjectButton"
const AlanSmithe = () => {
    return (
    <div className='profile-container container Project-container'>
        <div className='first-phase'>
            <div className='profile-img'>
                <img alt='' src={ProfileImg}/>
            </div>
            <div className='profile-info'>
                <div className='off-on'>Offline</div>
                <h3 className='profile-name'>Alan Smithee</h3>
                <p className='profile-paragraph'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                <div className='profile-link'>
                    <LinkOfProject>Start Live Stream</LinkOfProject>
                </div>
            </div>
            <div className='profile-com'>
                <ProfileComponents Downloaded = "3" Friends = "16" Live = "None" Clips = "20"/>
            </div>
        </div>
        <div className='second-phase'>
            <HeaderComponent myHeading="Clips" mySpan="Your Most Popular"/>
            <div className='popular-studio'>
                <SecondPhase img = {Clip1} title = "First Clip" view = "250"/>
                <SecondPhase img = {Clip2} title = "Second Clip" view = "183"/>
                <SecondPhase img = {Clip3} title = "Third Clip" view = "141"/>
                <SecondPhase img = {Clip4} title = "Fourth Clip" view = "91"/>
            </div>
        </div>
        <ProjectButton btnValue="Load More Clips"/>
    </div>
    )
}

export default AlanSmithe
