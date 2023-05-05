import React from 'react'
import "./ProfileComponents.css"
const ProfileComponents = ({Clips,Live ,Friends ,Downloaded}) => {
    return (
    <div className='card profile-card'>
        <ul>
            <li>
                <p>Games Downloaded</p>
                <span>{Downloaded}</span>
            </li>
            <li>
                <p>Friends Online</p>
                <span>{Friends}</span>
            </li>
            <li>
                <p>Live Streams</p>
                <span>{Live}</span>
            </li>
            <li>
                <p>Clips</p>
                <span>{Clips}</span>
            </li>
        </ul>
    </div>
    )
}

export default ProfileComponents
