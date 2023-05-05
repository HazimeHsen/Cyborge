import React from 'react'
import "./Components.css"
const Components = ({CardImage,AvatarImage,title,info}) => {
    return (
    <div className='card stream-card'>
        <div className='stream-img'>
            <div className='stream-live'>
                <p className='p-live'> Live</p>
                <div className='bottom-hover'>
                    <div className='view-count'><span className="material-symbols-outlined">visibility</span><span>1.2K</span></div>
                    <div className='stream-game'><span className="material-symbols-outlined">sports_esports</span><span>CS-GO</span></div>
                </div>
            </div>
            <img alt='' src={CardImage}/>
        </div>
        <div className='card-body stream-card-body'>
            <div className='card-body-first-line'>
                <div className='avatar-img'>
                    <img alt='' src = {AvatarImage}/>
                </div>
                <span className='stream-icon'>
                <span className="material-symbols-outlined">done</span>
                    <span className='title-info'>{title}</span>
                </span>
            </div>
            <h5 className='stream-info'>{info}</h5>
        </div>
    </div>
    )
}

export default Components
