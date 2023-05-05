import React from 'react'
import "./VdLink.css"
const VdLink = ({img, link}) => {
    return (
    <div className='right-img'>
        <img alt='' src={img}/>
        <a href={link} target="_blank" rel="noreferrer"><span className="material-symbols-outlined">arrow_right</span></a>
    </div>
    )
}

export default VdLink
