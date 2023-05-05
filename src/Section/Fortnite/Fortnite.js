import React from 'react'
import "./Fortnite.css"
import Components from '../Popular/components/Components'
import FortniteComponents from './FortniteComponents/FortniteComponents'
import Details1 from "../../assets/images/details-01.jpg"
import Details2 from "../../assets/images/details-02.jpg"
import Details3 from "../../assets/images/details-03.jpg"
import ProjectButton from '../../components/ProjectButton/ProjectButton'
const Fortnite = () => {
    return (
        <div className='our-fortnite-container'>
            <div className='fortnite-heading'>
                <h2>FORTNITE DETAILS</h2>
            </div>
            <div className='fortnite-color Project-container'>
                <div className='fortnite-container container'>
                    <div className='fortnite-popular-img'>
                        <Components  img = "" name = "Fortnite" nickName = "Sandbox"/>
                    </div>
                    <div className='icons-fortnite card'>
                        <FortniteComponents/>
                    </div>
                </div>
                <div className='fortnite-img-handler'>
                    <img src= {Details1} alt = ""/>
                    <img src= {Details2} alt = ""/>
                    <img src= {Details3} alt = ""/>
                </div>
                <div className='fortnite-info'>
                    <p className='start-info'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <a href='https://paypal.me/templatemo' target="_blank" rel="noreferrer">
                        small contribution via PayPal</a> to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
                    </p>
                </div>
                <ProjectButton btnValue="Download Fortnite Now!"/>
            </div>
        </div>
    )
}

export default Fortnite
