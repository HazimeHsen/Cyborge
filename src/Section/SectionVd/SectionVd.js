import React from 'react'
import "./SectionVd.css"
import Feature1 from "../../assets/images/feature-left.jpg"
import Feature2 from "../../assets/images/feature-right.jpg"
import VdLink from '../../components/VdLink/VdLink'
const SectionVd = () => {
    return (
    <div className='vd-section-container container'>
        <div className='left-img'>
            <img alt='' src={Feature1}/>
        </div>
        <VdLink img={Feature2} link = "https://www.youtube.com/watch?v=r1b03uKWk_M"/>
    </div>
    )
}

export default SectionVd
