import React from 'react'
import "./SecondPhase.css"
import VdLink from '../../../components/VdLink/VdLink'
const SecondPhase = ({img,title,view}) => {
    return (
    <div className='popular-component card'>
        <div className='image-card-header'>
        <VdLink img={img} link = "https://www.youtube.com/watch?v=r1b03uKWk_M"/>
        </div>
        <div className='profile-card-body card-body'>
            <p className='first'>{title}</p>
            <div className='profile-card-icon'><i className="material-symbols-outlined">visibility</i> <span>{view}</span></div>
        </div>
    </div>
    )
}

export default SecondPhase
