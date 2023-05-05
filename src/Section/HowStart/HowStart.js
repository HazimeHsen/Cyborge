import React from 'react'
import "./HowStart.css"
import Components from './Components/Components'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import Service1 from "../../assets/images/service-01.jpg"
import Service2 from "../../assets/images/service-02.jpg"
import Service3 from "../../assets/images/service-03.jpg"
import ProjectButton from "../../components/ProjectButton/ProjectButton"
const HowStart = () => {
    return (
    <div className='Start-container container'>
        <div className='center-heading'><HeaderComponent myHeading="How To Start Your" mySpan="Live Stream"/></div>
        <div className='start-card-container'>
            <Components img = {Service1} header = "Go To Your Profile" info = "Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout." />
            <Components myLink = " small contribution via PayPal " infoCon = "to info [at] templatemo.com" img = {Service2} header = "Live Stream Button" info = "If you wish to support us, you can make a" />
            <Components img = {Service3} header = "You Are Live" info = "You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website." />
        </div>
        <ProjectButton btnValue= "Go To Profile"/>
    </div>
    )
}

export default HowStart
